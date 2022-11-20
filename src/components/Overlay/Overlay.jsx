import React from 'react';
import './overlay.scss';

const Overlay = ({ showFormHandler, children }) => {
    return (
        // <div className='overlay' onClick={showFormHandler}>{children}</div>
        <div className='overlay'>{children}</div>
    )
}

export default Overlay;
