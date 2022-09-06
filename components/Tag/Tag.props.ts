// example

// import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

// export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
// 	children: ReactNode;
// 	appearance: 'primary' | 'ghost';
// 	arrow?: 'right' | 'down' | 'none';
// }

import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	size?: 's' | 'm' ;
	children: ReactNode;
	color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
	href?: 'string';
}