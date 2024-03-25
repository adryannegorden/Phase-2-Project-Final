import React from "react";
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
                        <button
                            className="button px-2"
                            onClick={() => {
                                onConfirm();
                                close();
                            }}
                        >
                            Yes
                        </button>
                        <button className="button px-2" onClick={() => {close(); onCancel();}}>
                            No
                        </button>
                    </div>
                </div>
            )}
        </Popup>
    );
}

export default Confirmation;
