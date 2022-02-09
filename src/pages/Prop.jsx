import React, { useState, useEffect } from "react";
import axios from "axios";

import "tui-grid/dist/tui-grid.css";

import Grid from "@toast-ui/react-grid";
import Loading from "../components/Loading";
import CondCom from "../components/ConditionCom";

const Prop = () => {
  const TuiGrid = React.createRef();
  const [gridData, setGrid] = useState([]);
  const [loading, setLoading] = useState(false);

  //그리드 초기 컬럼 정의
  const columns = [
    { name: "comCd", header: "회사코드" },
    { name: "propKey", header: "속성키" },
    {
      name: "propVal",
      header: "속성값",
      editor: "text",
      filter: { type: "select" },
    },
    {
      name: "remark",
      header: "설명",
      editor: "text",
    },
    { name: "regId", editor: "text", header: "등록자" },
    {
      name: "regDate",
      editor: {
        type: "datePicker",
      },
      header: "등록일시",
    },
    { name: "modId", editor: "text", header: "수정자" },
    {
      name: "modDate",
      editor: {
        type: "datePicker",
      },
      header: "수정일시",
    },
  ];

  const fsearch = () => {
    console.log("Search");
    setLoading(true);
    axios
      .get("http://localhost:8080/props/total")
      .then((Response) => {
        console.log(Response.data);
        setGrid(Response.data);
        setLoading(false);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  const fsave = () => {
    console.log("Save");
  };
  return (
    <>
      <div className="btn_group">
        <button className="btn_search" onClick={fsearch}>
          search
        </button>
        <button className="btn_save" onClick={fsave}>
          save
        </button>
      </div>
      <Loading visible={loading} />
      <div>
        <CondCom />
      </div>
      <div className="grid">
        <Grid
          ref={TuiGrid}
          data={gridData}
          columns={columns}
          rowHeight={25}
          bodyHeight={"fitToParent"}
          rowHeaders={["checkbox"]}
        />
      </div>
    </>
  );
};

export default Prop;
