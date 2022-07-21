import * as React from 'react';
import {LinkButton} from './link-button';

export interface ForecastDiscussionLinkProps {
	station: string;
}

export const ForecastDiscussionLink = (props: ForecastDiscussionLinkProps) => {
	return (
		<LinkButton
			href={`https://forecast.weather.gov/product.php?site=${props.station}&issuedby=${props.station}&product=AFD&format=txt&version=1&glossary=1`}
		>
			Forecast Discussion
		</LinkButton>
	);
};
