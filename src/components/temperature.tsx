import * as React from 'react';
import {CurrentConditionsValue} from '../hooks/use-current-conditions';
import {celsiusToFahrenheit} from '../util/conversions';

export type TemperatureProps = CurrentConditionsValue;

export const Temperature = (props: TemperatureProps) => {
	const {unitCode, value} = props;

	switch (unitCode) {
		case 'wmoUnit:degC':
			return <span>{Math.round(celsiusToFahrenheit(value))}&deg; F</span>;

		case 'wmoUnit:degF':
			return <span>{Math.round(value)}&deg; F</span>;

		default:
			return (
				<span>
					<em>Unknown unit: {unitCode}</em>
				</span>
			);
	}
};
