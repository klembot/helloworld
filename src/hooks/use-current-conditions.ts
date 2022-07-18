import useFetch from 'react-fetch-hook';
import {useForecastGrid} from './use-forecast-grid';

export interface StationListResponse {
	features: {
		properties: {
			stationIdentifier: string;
		};
	}[];
}

export interface CurrentConditionsValue {
	qualityControl: string;
	unitCode: string;
	value: number;
}

export interface CurrentConditionsResponse {
	properties: {
		heatIndex: CurrentConditionsValue;
		textDescription: string;
		timestamp: string;
		icon: string;
		relativeHumidity: CurrentConditionsValue;
		temperature: CurrentConditionsValue;
		windChill: CurrentConditionsValue;
		windDirection: CurrentConditionsValue;
		windGust: CurrentConditionsValue;
		windSpeed: CurrentConditionsValue;
	}
}

export function useCurrentConditions(latitude: number, longitude: number) {
	const {data: gridData, isLoading: gridLoading} = useForecastGrid(
		latitude,
		longitude
	);
	const {data: stationData, isLoading: stationLoading} =
		useFetch<StationListResponse>(
			`https://api.weather.gov/gridpoints/${gridData?.properties.cwa}/${gridData?.properties.gridX},${gridData?.properties.gridY}/stations`,
			{depends: [!gridLoading]}
		);

	// console.log(stationData?.features[0].properties.stationIdentifier);

	const stationId = stationData?.features[0].properties.stationIdentifier;

	return useFetch<CurrentConditionsResponse>(
		`https://api.weather.gov/stations/${stationId}/observations/latest`,
		{depends: [!stationLoading, stationId]}
	);
}
