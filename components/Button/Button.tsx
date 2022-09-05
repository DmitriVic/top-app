

import s from './Button.module.css'
import { ButtonProps } from './Button.props'
import cn from 'classnames'




export const Button = ({ appearance,  children, className, ...props }: ButtonProps): JSX.Element => {
	return (
	<button  className={cn(s.button, className, {
		[s.primary]: appearance == 'primary',
		[s.ghost]: appearance == 'ghost',
	})}
	{...props}
	>
		{children}
	</button>)
}

