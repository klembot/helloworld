export function emojiStatus(value: string) {
	if (value.includes('Thunderstorm')) {
		return '🌩';
	}

	if (value.includes('Rain') || value.includes('Showers')) {
		return '🌧';
	}

	if (value.includes('Sunny')) {
		return '☀️';
	}
}
