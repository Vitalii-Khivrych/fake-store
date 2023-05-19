import { FC } from 'react';

import { ContainerProps } from './types';

export const Container: FC<ContainerProps> = ({ children }) => {
	return (
		<div className="mx-auto my-0 w-full px-4 py-0 mob:w-[420px] tab:w-[768px] desk:w-[1280px]">
			{children}
		</div>
	);
};
