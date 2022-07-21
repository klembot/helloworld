import * as React from 'react';
import { Accordion } from 'react-bootstrap';
import { ExclamationTriangle } from 'react-bootstrap-icons';
import { AlertFeature } from '../hooks/use-alerts';

export interface AlertProps {
  alert: AlertFeature;
  eventKey: string;
}

export const Alert = ({ alert, eventKey }: AlertProps) => {
  const shortHeadline = alert.properties.headline.replace(/issued.*/, '');

  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>
        <ExclamationTriangle className="m-1" />
        {shortHeadline}
      </Accordion.Header>
      <Accordion.Body>
        <div className="details">
          <pre>{alert.properties.description}</pre>
          <pre>{alert.properties.instruction}</pre>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
};
