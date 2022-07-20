import * as React from 'react';

export interface ForecastDiscussionLinkProps {
	station: string;
}

export const ForecastDiscussionLink = (props: ForecastDiscussionLinkProps) => {
	return (
		<a
			href={`https://forecast.weather.gov/product.php?site=${props.station}&issuedby=${props.station}&product=AFD&format=txt&version=1&glossary=1`}
		>
			Forecast Discussion
		</a>
	);
};
