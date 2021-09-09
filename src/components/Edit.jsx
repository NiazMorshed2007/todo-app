import React, { useState } from "react";

function Edit(props) {
  // const []
  return (
    <div className={props.open ? "edit-modal modal-open" : "edit-modal"}>
      <input type="text" className="edit-input" placeholder="Edit your todo" />
      <button onClick={() => props.show(false)}>Confirm</button>
      <button onClick={() => props.show(false)}>Cancel</button>
    </div>
  );
}

export default Edit;
