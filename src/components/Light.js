import React, { useState } from 'react';

const Light = ({ tlColor = 'red' }) => {
    const [blink, setBlink] = useState(false);
    const style = {
        backgroundColor: tlColor,
        borderRadius: '50%',
        width: '100px',
        height: '100px',
        opacity: blink ? 0.3 : 1,
    };
    const handleClick = () => {
        setBlink(!blink);
    };

    return <div style={style} onClick={handleClick}></div>;
};

export default Light;