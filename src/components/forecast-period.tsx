import * as React from 'react';
import { ForecastResponsePeriod } from '../hooks/use-forecast';
import {WeatherIcon} from './weather-icon';
import './forecast-period.css';

export interface ForecastPeriodProps {
	item: ForecastResponsePeriod;
}

export const ForecastPeriod = (props: ForecastPeriodProps) => {
	const {item} = props;

	return (
		<div className="forecast-period">
			<WeatherIcon icon={item.icon} />
			<div className="text">
				<h1>{item.name}</h1>
				<p>{item.detailedForecast}</p>
			</div>
		</div>
	);
};