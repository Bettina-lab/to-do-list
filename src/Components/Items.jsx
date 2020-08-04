import React, { useState } from "react" ;

function Items(props) {

    const [isChecked, setIsChecked] = useState(false);

    function handleChecked() {
        setIsChecked(prevValue => {
            return !prevValue;
        })
    }


    return (
        <div  onClick={handleChecked} >
            <li style={{color: isChecked ? "var(--color-green-light-3)" : "var(--color-grey-dark-1)" }}>{props.text}
                <i className="fas fa-check checked" style={{display: isChecked ? "inline" : "none" }}></i>
                <span className="delete" onClick={() => {props.onDoubleChecked(props.id)}} >X</span>
            </li>
        </div>
    )
};

export default Items;