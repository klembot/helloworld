import clsx from 'clsx';
import * as React from 'react';
import './weather-icon.css';

const emojiMappings = {
	day: {
		bkn: '🌥',
		blizzard: '🌨',
		cold: '🥶',
		du: '🌫',
		fc: '🌪',
		few: '☀️',
		fg: '🌫',
		frza: '🧊',
		fu: '🌫',
		hi_shwrs: '🌧',
		hi_tsra: '⛈',
		hur_warn: '🌪',
		hur_watch: '🌪',
		hot: '🔥',
		hz: '🌫',
		ip: '🧊',
		minus_ra: '🌧',
		ovc: '☁️',
		ra: '🌧',
		rain_showers: '🌧',
		raip: '❄️',
		ra_fzra: '🧊',
		ra_sn: '🌨',
		sct: '🌤',
		scttsra: '⛈',
		shra: '🌧',
		sn: '🌨',
		skc: '☀️',
		snip: '🌨',
		tor: '🌪',
		tsra: '⛈',
		tsra_sct: '⛈',
		tsra_hi: '⛈',
		ts_nowarn: '⛈',
		ts_warn: '⛈',
		ts_watch: '⛈',
		wind_bkn: '🌬',
		wind_few: '🌬',
		wind_ovc: '🌬',
		wind_sct: '🌬',
		wind_skc: '🌬'
	},
	night: {
		bkn: '☁️',
		blizzard: '🌨',
		cold: '🥶',
		du: '🌫',
		fc: '🌪',
		few: '✨',
		fg: '🌫',
		frza: '🧊',
		fu: '🌫',
		hi_shwrs: '🌧',
		hi_tsra: '⛈',
		hur_warn: '🌪',
		hur_watch: '🌪',
		ip: '🧊',
		minus_ra: '🌧',
		ovc: '☁️',
		ra: '🌧',
		rain_showers: '🌧',
		raip: '❄️',
		ra_fzra: '🧊',
		ra_sn: '🌨',
		sct: '☁️',
		scttsra: '⛈',
		shra: '🌧',
		skc: '✨',
		sn: '🌨',
		snip: '🌨',
		tor: '🌪',
		tsra: '⛈',
		tsra_sct: '⛈',
		tsra_hi: '⛈',
		ts_nowarn: '⛈',
		ts_warn: '⛈',
		ts_watch: '⛈',
		wind_bkn: '🌬',
		wind_few: '🌬',
		wind_ovc: '🌬',
		wind_sct: '🌬',
		wind_skc: '🌬'
	}
};

export interface WeatherIconProps {
	/**
	 * NWS icon path to render.
	 * @see https://www.weather.gov/forecast-icons
	 */
	icon: string;

	size?: 'medium' | 'large';
}

export const WeatherIcon = ({icon, size}: WeatherIconProps) => {
	const [iconType, ...iconKeys] = icon
		.replace('https://api.weather.gov/icons/land/', '')
		.replace(/\?.*$/, '')
		.split('/');

	if (iconType in emojiMappings) {
		return (
			<div
				className={clsx('weather-icon', {
					multiple: iconKeys.length > 1,
					[size as string]: true
				})}
			>
				{iconKeys.map(iconKey => {
					const [icon, percent] = iconKey.split(',');
					const emoji =
						(emojiMappings as any)[iconType][icon] ?? '❓';

					return (
						<div
							className={clsx('icon', {'has-percent': !!percent})}
							key={iconKey}
						>
							{emoji}
						</div>
					);
				})}
			</div>
		);
	}

	console.error(`Don't know how to handle icon type ${iconType}`);
	return <span className="weather-icon">❓</span>;
};
