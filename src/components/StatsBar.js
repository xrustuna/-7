import React from 'react';

const StatsBar = ({ onChange, stats }) => {
    const handleClick = (isVertical) => {
        onChange && onChange(isVertical);
    };

    return (
        <div>

            {stats && (
                <div>
                    Статистика кліків: Червоний - {stats.red || 0}, Жовтий - {stats.yellow || 0}, Зелений - {stats.green || 0}
                </div>
            )}
        </div>
    );
};

export default StatsBar;