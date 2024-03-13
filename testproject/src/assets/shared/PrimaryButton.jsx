import React from "react";
import "./PrimaryButton.css"


const PrimaryButton = ({ customTitle, additionalClassName}) => {
    return(
        <button className={'base-title-btn ${additionalClassName}'}>
            {customTitle}
        </button>
    );
};


export default PrimaryButton;