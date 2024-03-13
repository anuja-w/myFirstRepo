import React from "react";
import "./Title.css"


const Title = ({ customTitle, additionalClassName}) => {
    return(
        <div className={'base-title-class ${additionalClassName}'}>
            {customTitle}
        </div>
    );
};


export default Title;