import * as React from 'react';

export function useGeolocation() {
	const [error, setError] = React.useState<GeolocationPositionError>();
	const [latitude, setLatitude] = React.useState<number>();
	const [longitude, setLongitude] = React.useState<number>();

	React.useEffect(() => {
		window.navigator.geolocation.getCurrentPosition(position => {
			setLatitude(position.coords.latitude);
			setLongitude(position.coords.longitude);
		}, setError);
	}, []);

	return {error, latitude, longitude};
}
