import React, { useState, useEffect, createRef, useCallback } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import ButtonGroup from "../components/ButtonGroup";
import Popup from "../components/Popup";
import Loading from "../components/Loading";

const CompanyInfo = () => {
  let history = useHistory();

  const AgGrid = createRef();

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

  //ref Code 정의
  const sysCode = {
    A: "종합유통",
    F: "패션",
  };
  const useYnCode = {
    Y: "사용중",
    N: "미사용",
  };

  const posCode = {
    C: "클라우드포스",
    G: "굿엠디포스",
    N: "미사용",
  };

  //그리드 초기 컬럼 정의
  const columns = [
    {
      headerName: "No",
      width: 60,
      headerCheckboxSelection: true,
      checkboxSelection: true,
    },
    { headerName: "회사코드", width: 150, field: "comCd", filter: true },
    {
      headerName: "회사명",
      width: 150,
      field: "comNm",
      filter: true,
      editable: true,
    },
    { headerName: "요금", width: 150, field: "charge", sortable: true },
    {
      headerName: "해지여부",
      width: 150,
      field: "cancelYn",
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: Object.keys(useYnCode),
      },
      editable: true,
      refData: useYnCode,
    },
    {
      headerName: "포스사용여부",
      width: 150,
      field: "posType",
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: Object.keys(posCode),
      },
      editable: true,
      refData: posCode,
    },
    {
      headerName: "시스템구분",
      width: 150,
      field: "solType",
      refData: sysCode,
    },
    {
      headerName: "가입일",
      width: 250,
      field: "joinDate",
    },
    { headerName: "등록자", width: 100, field: "regId" },
    { headerName: "등록일", width: 250, field: "regDate" },
    { headerName: "수정자", width: 100, field: "modId" },
    { headerName: "수정일", width: 250, field: "modDate" },
  ];

  /**
   * Action 정의
   */

  //추가
  const fadd = () => {
    AgGrid.current.api.selectAll();
  };

  //조회
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
        console.log(Response.data);
        setGrid(Response.data.result);
        setLoading(false);
      })
      .catch((Error) => {
        console.log(Error);
        setLoading(false);
      });
  };

  const onBtExport = useCallback(() => {
    AgGrid.current.api.exportDataAsExcel();
  }, []);

  //초기화
  const finit = () => {
    // setGrid([]);
    AgGrid.current.api.exportDataAsExcel();
  };

  //저장
  const fsave = () => {
    console.log(AgGrid.current.api.getSelectedRows());
    setCount(AgGrid.current.api.getSelectedRows().length);
    openModal("S");
  };

  //삭제
  const fdel = () => {
    console.log(AgGrid.current.api.getSelectedRows());
    setCount(AgGrid.current.api.getSelectedRows().length);
    openModal("D");
  };

  const del = () => {
    console.log(AgGrid.current.api.getSelectedRows());
    axios
      .delete(
        "http://localhost:8090/company/delete/",
        AgGrid.current.api.getSelectedRows()
      )
      .then((Response) => {
        console.log(Response.data);
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
    console.log(localStorage.getItem("OassisToken"));

    axios
      .post(
        "http://localhost:8090/company/create/",
        AgGrid.current.api.getSelectedRows(),
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

  const getContextMenuItems = useCallback((params) => {
    console.log("TEST");
    var result = [
      {
        // custom item
        name: "Alert " + params.value,
        action: function () {
          window.alert("Alerting about " + params.value);
        },
        cssClasses: ["redFont", "bold"],
      },
      "separator",
      {
        // custom item
        name: "Windows",
        shortcut: "Alt + W",
        action: function () {
          console.log("Windows Item Selected");
        },
        icon: '<img src="https://www.ag-grid.com/example-assets/skills/windows.png" />',
      },
      {
        // custom item
        name: "Mac",
        shortcut: "Alt + M",
        action: function () {
          console.log("Mac Item Selected");
        },
        icon: '<img src="https://www.ag-grid.com/example-assets/skills/mac.png"/>',
      },
      "separator",
      {
        // custom item
        name: "Checked",
        checked: true,
        action: function () {
          console.log("Checked Selected");
        },
        icon: '<img src="https://www.ag-grid.com/example-assets/skills/mac.png"/>',
      },
      "copy",
      "separator",
      "chartRange",
    ];
    return result;
  }, []);

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
        <div
          className="ag-theme-alpine"
          style={{ height: "100%", width: "100%" }}
        >
          <AgGridReact
            ref={AgGrid}
            rowData={gridData}
            columnDefs={columns}
            allowContextMenuWithControlKey={true}
            getContextMenuItems={getContextMenuItems}
            rowSelection="multiple"
          ></AgGridReact>
        </div>
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
