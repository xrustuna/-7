import React from 'react';
import TrafficLight from './TrafficLights';

const VerticalTrafficLights = () => {
    return (
        <div className="traffic-lights vertical">
            <TrafficLight color="red" />
            <TrafficLight color="yellow" />
            <TrafficLight color="green" />
        </div>
    );
};

export default VerticalTrafficLights;