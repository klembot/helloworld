import * as React from 'react';
import {CurrentConditionsValue} from '../hooks/use-current-conditions';
import {celsiusToFahrenheit} from '../util/conversions';

export type TemperatureProps = CurrentConditionsValue;

export const Temperature = (props: TemperatureProps) => {
	const {unitCode, value} = props;

	switch (unitCode) {
		case 'wmoUnit:degC':
			return (
        <span>
          <strong>{Math.round(celsiusToFahrenheit(value))}</strong>&deg; F
        </span>
      );

		case 'wmoUnit:degF':
			return (
        <span>
          <strong>{Math.round(value)}</strong>&deg; F
        </span>
      );

		default:
			return (
				<span>
					<em>Unknown unit: {unitCode}</em>
				</span>
			);
	}
};
