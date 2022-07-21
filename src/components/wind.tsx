import * as React from 'react';
import {CurrentConditionsValue} from '../hooks/use-current-conditions';
import {degreesToCompassDirections, kmToMiles} from '../util/conversions';
import {Arrow} from './arrow';
import './wind.css';

export interface WindProps {
	direction: CurrentConditionsValue;
	gust: CurrentConditionsValue;
	speed: CurrentConditionsValue;
}

export const Wind = (props: WindProps) => {
	let direction = '';
	let gust = '';
	let speed = '';

	if (props.speed.value === 0) {
		return <span>Calm winds</span>;
	}

	switch (props.direction.unitCode) {
		case 'wmoUnit:degree_(angle)':
			direction = degreesToCompassDirections(props.direction.value);
			break;

		default:
			direction = `Unknown wind direction unit: ${props.direction.unitCode}`;
	}

	switch (props.gust.unitCode) {
		case 'wmoUnit:km_h-1':
			gust = `${Math.round(kmToMiles(props.gust.value))} MPH`;
			break;

		case 'wmoUnit:mi_h-1':
			gust = `${Math.round(props.gust.value)} MPH`;

		default:
			gust = `Unknown wind gust unit: ${props.speed.unitCode}`;
	}

	switch (props.speed.unitCode) {
		case 'wmoUnit:km_h-1':
			speed = `${Math.round(kmToMiles(props.speed.value))} MPH`;
			break;

		case 'wmoUnit:mi_h-1':
			speed = `${Math.round(props.speed.value)} MPH`;

		default:
			direction = `Unknown wind speed unit: ${props.speed.unitCode}`;
	}

	return (
		<div className="wind">
			<Arrow direction={props.direction.value} />
			{direction} wind at {speed}
			{props.gust.value > 0 && <>, gusting {gust}</>}
		</div>
	);
};
