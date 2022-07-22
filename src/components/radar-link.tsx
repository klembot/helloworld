import {BoxArrowUpRight} from 'react-bootstrap-icons';
import './radar-link.css';

export interface RadarLinkProps {
  latitude: number;
  longitude: number;
}

export const RadarLink = (props: RadarLinkProps) => {
  const {latitude, longitude} = props;
  const settings = {
    agenda: {
      id: 'weather',
      center: [longitude, latitude],
      location: [longitude, latitude],
      zoom: 7
    },
    animating: false,
    base: 'standard',
    opacity: {alerts: 0, local: 0.6, localStations: 0.8, national: 0.6}
  };

  return (
    <div className="radar-link">
      <a
        href={`https://radar.weather.gov/?settings=v1_${window.btoa(
          JSON.stringify(settings)
        )}`}
      >
        Weather Radar
        <BoxArrowUpRight />
      </a>
    </div>
  );
};
