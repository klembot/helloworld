import * as React from 'react';
import { ForecastResponsePeriod } from '../hooks/use-forecast';

export interface ForecastPeriodProps {
	item: ForecastResponsePeriod;
}

export const ForecastPeriod = (props: ForecastPeriodProps) => {
	const {item} = props;

	return <div>
		<h2>{item.name}</h2>
		<p>{item.detailedForecast}</p>
	</div>;
}