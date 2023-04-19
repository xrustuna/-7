import React from 'react';
import TrafficLight from './TrafficLights';

const HorizontalTrafficLights = () => {
    return (
        <div className="traffic-lights horizontal">
            <TrafficLight color="red" />
            <TrafficLight color="yellow" />
            <TrafficLight color="green" />
        </div>
    );
};

export default HorizontalTrafficLights;