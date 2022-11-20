import React from 'react';
import './button.scss';

const Button = ({ btnClass, clickHandler, btnType, children}) => {
    return (
        <button className={`${btnClass} btn`} onClick={clickHandler} type={btnType}>{children}</button>
    )
}

export default Button;
