import React from 'react';

const PopUp = ({ message }) => {
    return (
        <div className="popup">
            <div className="popup-inner">
                <p>{message}</p>
            </div>
        </div>
    );
}

export default PopUp;