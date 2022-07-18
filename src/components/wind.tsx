import * as React from 'react';
import {CurrentConditionsValue} from '../hooks/use-current-conditions';
import {kmToMiles} from '../util/conversions';

export interface WindProps {
	direction: CurrentConditionsValue;
	gust: CurrentConditionsValue;
	speed: CurrentConditionsValue;
}

export const Wind = (props: WindProps) => {
	let direction = '';
	let gust = '';
	let speed = '';

	switch (props.direction.unitCode) {
		case 'wmoUnit:degree_(angle)':
			direction = `${props.direction.value}°`;
			break;

		default:
			direction = `Unknown wind direction unit: ${props.direction.unitCode}`;
	}

	switch (props.gust.unitCode) {
		case 'wmoUnit:km_h-1':
			gust = `${Math.round(kmToMiles(props.gust.value))} MPH`;
			break;

		case 'wmoUnit:km_h-1':
			gust = `${Math.round(props.gust.value)} MPH`;

		default:
			gust = `Unknown wind gust unit: ${props.speed.unitCode}`;
	}

	switch (props.speed.unitCode) {
		case 'wmoUnit:km_h-1':
			speed = `${Math.round(kmToMiles(props.speed.value))} MPH`;
			break;

		case 'wmoUnit:km_h-1':
			speed = `${Math.round(props.speed.value)} MPH`;

		default:
			direction = `Unknown wind speed unit: ${props.speed.unitCode}`;
	}

	return (
		<span>
			{direction} at {speed}
			{props.gust.value > 0 && <>, gusting {gust}</>}
		</span>
	);
};
