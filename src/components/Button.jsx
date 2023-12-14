import React from 'react';
import styles from '../style';

const Button = ({ className, title = '', ...rest }) => {
	return (
		<button
			type="button"
			className={`${styles.hoverTranstion} py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] ${className}`}
			{...rest}
		>
			{title}
		</button>
	);
};

export default Button;
