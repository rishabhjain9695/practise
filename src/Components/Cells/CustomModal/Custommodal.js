import React, { useState } from "react";

import './customM.css'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function CustomModal({showModal,setShowModal}) {

  const navigate=useHistory();
  const handleClose = () => {
    setShowModal(false);
    navigate.push("/login");
  };
  return (
    <>
      <div className="modalContainer">
      <div id="modalDiv">
        <h1>Please Login First</h1>
        
        
        
        
        <button onClick={handleClose}> Ok</button>
      </div>
      </div>
    </>
  )
}

export default CustomModal;