import * as React from 'react';
import {CurrentConditionsValue} from '../hooks/use-current-conditions';
import {celsiusToFahrenheit} from '../util/conversions';

export type TemperatureProps = CurrentConditionsValue;

export const Temperature = (props: TemperatureProps) => {
  const {unitCode, value} = props;

  // Assume US unit :(

  switch (unitCode) {
    case 'wmoUnit:degC':
      return (
        <span>
          <strong>{Math.round(celsiusToFahrenheit(value))}</strong>&deg;
        </span>
      );

    case 'wmoUnit:degF':
      return (
        <span>
          <strong>{Math.round(value)}</strong>&deg;
        </span>
      );

    default:
      return (
        <span>
          <em>Unknown unit: {unitCode}</em>
        </span>
      );
  }
};;
