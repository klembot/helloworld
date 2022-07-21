import useFetch from 'react-fetch-hook';
import {useForecastGrid} from './use-forecast-grid';

export interface AlertFeature {
	id: string;
	properties: {
		areaDesc: string;
		sent: string;
		effective: string;
		onset: string;
		expires: string;
		ends: string;
		severity: string;
		certainty: string;
		urgency: string;
		event: string;
		headline: string;
		description: string;
		instruction: string;
	};
}

export interface AlertsResponse {
	features: AlertFeature[];
}

export function useAlerts(latitude?: number, longitude?: number) {
	const {data: gridData} = useForecastGrid(latitude, longitude);
	const county = gridData?.properties.county.replace(
		'https://api.weather.gov/zones/county/',
		''
	);

	return useFetch<AlertsResponse>(
		`https://api.weather.gov/alerts/active/zone/${county}`,
		{depends: [!!gridData]}
	);
}
