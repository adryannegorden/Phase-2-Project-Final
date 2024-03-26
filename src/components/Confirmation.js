import React from "react";
import { NavLink } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Confirmation({ isOpen, onConfirm, onCancel }) {
    return (
        <Popup
            open={isOpen}
            onClose={onCancel}
            position="right center"
            modal
            nested
        >
            {close => (
                <div className="modal">
                    <div className="header text-center"> Confirmation </div>
                    <div className="content text-center">
                        Are you sure you want to sign out?
                    </div>
                    <div className="actions text-center">
                        {/* <button className="button bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-6" onClick={() => {onConfirm(); close();}}>
                            Yes
                        </button> */}
                        <NavLink to="/" className="button bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-6" onClick={() => {onConfirm(); close();}}>
                            Yes
                        </NavLink>
                        {/* <button className="button bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-6" onClick={() => {close(); onCancel();}}>
                            No
                        </button> */}
                        <NavLink to="/App" className="button bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-6" onClick={() => {onConfirm(); close();}}>
                            No
                        </NavLink>
                    </div>
                </div>
            )}
        </Popup>
    );
}

export default Confirmation;
