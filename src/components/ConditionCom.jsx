import React from "react";
import "../css/ConditionCom.css";

const ConditionCom = () => {
  return (
    <div className="condContainer">
      <label htmlFor="condCom">회사코드</label>
      <input id="condCom" type="text" />
    </div>
  );
};

export default ConditionCom;
