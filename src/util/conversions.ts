export function celsiusToFahrenheit(celsius: number) {
	return celsius * 1.8 + 32;
}

export function kmToMiles(kilometers: number) {
	return kilometers * 0.6213712;
}

export function degreesToCompassDirections(degrees: number) {
	const headings = [
		'N',
		'NNE',
		'NE',
		'ENE',
		'E',
		'ESE',
		'SE',
		'SSE',
		'S',
		'SSW',
		'SW',
		'WSW',
		'W',
		'WNW',
		'NW',
		'NNW',
		'N'
	];

	// Map degrees to 0-1 range, then map that to 0-headings.length.

	const interval = Math.round(((degrees % 360) / 360) * headings.length);

	return headings[interval];
}
