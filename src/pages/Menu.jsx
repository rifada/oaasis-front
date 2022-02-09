import React, { useState, useEffect } from "react";

import "tui-grid/dist/tui-grid.css";

import Grid from "@toast-ui/react-grid";
import Loading from "../components/Loading";

const Menu = () => {
  const TuiGrid = React.createRef();
  //   const [gridData, setGrid] = useState([]);
  const [loading, setLoading] = useState(false);

  //그리드 옵션
  const options = {
    name: "progCd",
    useCascadingCheckbox: true,
    useIcon: true,
  };
  //그리드 초기 컬럼 정의
  const columns = [
    { name: "progCd", header: "메뉴코드" },
    {
      name: "progNm",
      header: "메뉴명",
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

  const gridData = [
    {
      progCd: "C1",
      progNm: "기준정보",
      remark: "설명",
      regId: "김성호",
      _children: [
        {
          progCd: "C1",
          progNm: "코드관리",
          remark: "설명",
          regId: "김성호",
        },
        {
          progCd: "C1",
          progNm: "기준정보관리",
          remark: "설명",
          regId: "김성호",
        },
      ],
    },
  ];
  const fsearch = () => {
    console.log("Search");
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
      <div className="grid">
        <Grid
          ref={TuiGrid}
          data={gridData}
          columns={columns}
          treeColumnOptions={options}
          rowHeight={25}
          bodyHeight={"fitToParent"}
          rowHeaders={["checkbox"]}
        />
      </div>
    </>
  );
};

export default Menu;
