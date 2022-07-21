import * as React from 'react';
import './link-button.css';

export interface LinkButtonProps {
	children: React.ReactNode;
	href: string;
}

export const LinkButton = ({children, href}: LinkButtonProps) => (
	<a className="link-button">{children}</a>
);
