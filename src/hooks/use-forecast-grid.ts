import useFetch from "react-fetch-hook";

export interface ForecastGridResponse {
	properties: {
		cwa: string;
		gridX: string;
		gridY: string;
	}
}

export function useForecastGrid(latitude: number, longitude: number) {
	return useFetch<ForecastGridResponse>(`https://api.weather.gov/points/${latitude},${longitude}`);
}