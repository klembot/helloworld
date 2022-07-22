import {BoxArrowUpRight} from 'react-bootstrap-icons';
import './forecast-discussion-link.css';

export interface ForecastDiscussionLinkProps {
  station: string;
}

export const ForecastDiscussionLink = (props: ForecastDiscussionLinkProps) => {
  return (
    <div className="forecast-discussion-link">
      <a
        href={`https://forecast.weather.gov/product.php?site=${props.station}&issuedby=${props.station}&product=AFD&format=txt&version=1&glossary=1`}
      >
        Forecast Discussion
        <BoxArrowUpRight />
      </a>
    </div>
  );
};
