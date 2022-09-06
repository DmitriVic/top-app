import { PProps } from './Tag.props';
import s from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({ size = 's', children, color = 'ghost', href, className, ...props }: PProps): JSX.Element => {
	return (
		<div
			className={cn(s.tag, className, {
				[s.s]: size == 's',
				[s.m]: size == 'm',
				[s.ghost]: color == 'ghost',
				[s.red]: color == 'red',
				[s.grey]: color == 'grey',
				[s.green]: color == 'green',
				[s.primary]: color == 'primary',
			})}
			{...props}
		>
			{
				href
					? <a href={href}>{children}</a>
					: <>{children}</>
			}
		</div>
	);
};

