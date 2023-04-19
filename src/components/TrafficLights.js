import React from 'react';

import Light from './Light';

const TrafficLights = ({ isVertical = false, onClick, stats }) => {
    const flexDirection = isVertical ? 'column' : 'row';
    const alignItems = isVertical ? 'center' : 'flex-start';
    const justifyContent = isVertical ? 'flex-start' : 'center';

    const handleClick = (color) => {
        onClick && onClick(color);
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: flexDirection,
                alignItems: alignItems,
                justifyContent: justifyContent,
            }}
        >
            <div onClick={() => handleClick('red')}>
                <Light tlColor="red" />
                {stats && <div>Червоний - {stats.red || 0}</div>}
            </div>
            <div onClick={() => handleClick('yellow')}>
                <Light tlColor="yellow" />
                {stats && <div>Жовтий - {stats.yellow || 0}</div>}
            </div>
            <div onClick={() => handleClick('green')}>
                <Light tlColor="green" />
                {stats && <div>Зелений - {stats.green || 0}</div>}
            </div>
        </div>
    );
};

export default TrafficLights;