import useFetch from 'react-fetch-hook';
import {useForecastGrid} from './use-forecast-grid';

export interface ForecastResponsePeriod {
	number: string;
	name: string;
	startTime: string;
	endTime: string;
	isDaytime: boolean;
	temperature: number;
	temperatureUnit: string;
	temperatureTrend: null | 'rising' | 'falling';
	windSpeed: string;
	windDirection: string;
	icon: string;
	shortForecast: string;
	detailedForecast: string;
}

export interface ForecastResponse {
	properties: {
		updated: string;
		units: string;
		forecastGenerator: string;
		generatedAt: string;
		updateTime: string;
		validTimes: string;
		elevation: {
			unitCode: string;
			value: number;
		};
		periods: ForecastResponsePeriod[];
	};
}

export function useForecast(latitude?: number, longitude?: number) {
	const {data: gridData} = useForecastGrid(latitude, longitude);

	return {
		...useFetch<ForecastResponse>(
			`https://api.weather.gov/gridpoints/${gridData?.properties.cwa}/${gridData?.properties.gridX},${gridData?.properties.gridY}/forecast`,
			{depends: [!!gridData]}
		),
		office: gridData?.properties.cwa
	};
}
