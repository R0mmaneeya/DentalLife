import React, { useState } from 'react'
import "./SDmodal.css"
import BodySD from './BodySD';
import SDcalendar from './SDcalendar';

const timenotavailable = {
    date: ["2023-11-05"], // value from database
    time: ["11:00 am"], // value from database
}

function SDmodal({setOpenClinicModal}) {

    return (
        <div className="modalBackground ">
            <div
                className="oc-bg"
                onClick={() => {
                    setOpenClinicModal(false);
                }}
            ></div>
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            setOpenClinicModal(false);
                        }}
                    >
                        X
                    </button>
                </div>
                <div className="title clinic">
                    <h1 style={{ color: "#A0C49D" }}>Scheduling</h1>
                </div>
                <div className='ingrid'>
                <BodySD />
                <SDcalendar Time={timenotavailable}/>
                </div>
                
                <div className="footer">
                    <button style={{ backgroundColor: "#94B49F" }} id="doneBtn"  >
                        Done
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SDmodal