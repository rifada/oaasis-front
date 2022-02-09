import React from "react";

const ButtonGroup = (props) => {
  const { fsearch, fadd, fsave, fdel, finit } = props;
  return (
    <div className="btn_group">
      {fsearch ? (
        <button className="btn_search" onClick={fsearch}>
          Search
        </button>
      ) : null}
      {fadd ? (
        <button className="btn_add" onClick={fadd}>
          Add
        </button>
      ) : null}
      {fsave ? (
        <button className="btn_save" onClick={fsave}>
          Save
        </button>
      ) : null}
      {fdel ? (
        <button className="btn_del" onClick={fdel}>
          Delete
        </button>
      ) : null}
      {finit ? (
        <button className="btn_init" onClick={finit}>
          Init
        </button>
      ) : null}
    </div>
  );
};

export default ButtonGroup;
