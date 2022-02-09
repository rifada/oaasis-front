import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";
import "tui-pagination/dist/tui-pagination.css";

import "tui-grid/dist/tui-grid.css";
import Grid from "@toast-ui/react-grid";
import ButtonGroup from "../components/ButtonGroup";
import Popup from "../components/Popup";
import Loading from "../components/Loading";

const CompanyInfo = () => {
  let history = useHistory();

  //ref
  const TuiGrid = React.createRef();

  const [gridData, setGrid] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);

  const [count, setCount] = useState(0);

  const [loading, setLoading] = useState(false);

  const [actionType, setActionType] = useState("");

  const openModal = (type) => {
    setActionType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  //초기화 useEffect 로 첫 로딩 시, 필요한 함수 호출
  useEffect(() => fsearch(), []);

  //그리드 초기 컬럼 정의
  const columns = [
    { name: "comCd", editor: "text", width: 150, header: "회사코드" },
    {
      name: "comNm",
      header: "회사명",
      editor: "text",
      width: 150,
      filter: { type: "select" },
    },
    {
      name: "charge",
      header: "요금",
      editor: "text",
      sortingType: "desc",
      width: 150,
      sortable: true,
    },
    {
      name: "cancelYn",
      header: "해지여부",
      formatter: "listItemText",
      width: 150,
      editor: {
        type: "select",
        options: {
          listItems: [
            { text: "사용중", value: "N" },
            { text: "해지", value: "Y" },
          ],
        },
      },
    },
    { name: "solType", width: 150, editor: "text", header: "시스템구분" },
    {
      name: "storeYn",
      width: 150,
      header: "매장관리사용여부",
      formatter: "listItemText",
      editor: {
        type: "select",
        options: {
          listItems: [
            { text: "사용중", value: "N" },
            { text: "미사용", value: "Y" },
          ],
        },
      },
    },
    {
      name: "joinDate",
      width: 250,
      header: "가입일",
      editor: {
        type: "datePicker",
      },
    },
    { name: "regId", width: 80, editor: "text", header: "등록자" },
    {
      name: "regDate",
      width: 250,
      editor: {
        type: "datePicker",
        options: {
          format: "yyyy-MM-dd HH:mm A",
        },
      },
      header: "등록일시",
    },
    { name: "modId", width: 80, editor: "text", header: "수정자" },
    {
      name: "modDate",
      width: 250,
      editor: {
        type: "datePicker",
      },
      header: "수정일시",
    },
  ];

  const fcheck = (ev) => {
    //특정컬럼의 값
    //console.log(TuiGrid.current.getInstance().getColumnValues("charge"))
    //특정로우의 값
    // console.log(TuiGrid.current.getInstance().getRow(1));
    //변화된 값 감지
    let gridData = TuiGrid.current
      .getInstance()
      .getCheckedRows({ checkedOnly: true });
  };

  const fadd = () => {
    TuiGrid.current.getInstance().appendRow();
  };

  const fsearch = () => {
    setLoading(true);
    console.log(localStorage.getItem("OassisToken"));
    axios
      .get("http://localhost:8090/company/all", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("OassisToken"),
        },
      })
      .then((Response) => {
        console.log(Response);
        setGrid(Response.data.result);
        setLoading(false);
      })
      .catch((Error) => {
        console.log(Error);
        setLoading(false);
      });
  };
  const finit = () => {
    setGrid([]);
  };

  const fsave = () => {
    setCount(TuiGrid.current.getInstance().getCheckedRows().length);
    openModal("S");
  };

  const fdel = () => {
    setCount(TuiGrid.current.getInstance().getCheckedRows().length);
    openModal("D");
  };

  const del = () => {
    console.log(TuiGrid.current.getInstance().getCheckedRows());
    axios
      .delete("http://localhost:8090/company/delete/", {
        data: TuiGrid.current.getInstance().getCheckedRows(),
      })
      .then((Response) => {
        console.log(Response);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };
  const confirm = () => {
    if (actionType === "S") {
      save();
    } else if (actionType === "D") {
      del();
    }

    closeModal();
  };

  const save = () => {
    console.log(TuiGrid.current.getInstance().getCheckedRows());
    console.log(localStorage.getItem("OassisToken"));
    axios
      .post(
        "http://localhost:8090/company/create/",
        {
          data: TuiGrid.current.getInstance().getCheckedRows(),
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("OassisToken"),
          },
        }
      )
      .then((Response) => {
        console.log("save");
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  return (
    <>
      <ButtonGroup
        fsearch={fsearch}
        fadd={fadd}
        fsave={fsave}
        // fdel={fdel}
        finit={finit}
      />
      <Loading visible={loading} />
      <div className="grid">
        <Grid
          ref={TuiGrid}
          data={gridData}
          columns={columns}
          rowHeight={25}
          pageOptions={{ useClient: true, perPage: 2 }}
          bodyHeight={"fitToParent"}
          rowHeaders={["checkbox"]}
          onCheck={fcheck}
        />
      </div>
      <div>
        <Popup
          open={modalOpen}
          confirm={confirm}
          close={closeModal}
          type={"W"}
          header={"저장하시겠습니까?"}
        >
          변경사항 {count} 건
        </Popup>
      </div>
    </>
  );
};

export default CompanyInfo;
