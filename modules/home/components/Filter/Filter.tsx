import { FC, useMemo } from 'react';
import { useRouter } from 'next/router';

import { CategoriesType } from '@/services';

type FilterTypeProps = {
	categories: CategoriesType;
	onChange: (value: string) => void;
};

const buttonStyle =
	'rounded capitalize  border-2 border-slate-500 px-2 py-1 text-xs transition delay-75 ease-in  hover:bg-slate-500 hover:text-white  tab:px-3 tab:py-1 tab:text-base';

export const Filter: FC<FilterTypeProps> = ({ categories, onChange }) => {
	const router = useRouter();

	return (
		<ul className=" top-20 z-20 mb-4 flex  flex-wrap justify-center  gap-4 ">
			{categories.map(category => (
				<li key={category}>
					<button
						type="button"
						onClick={() => onChange(category)}
						className={
							router.query.value === category
								? `${buttonStyle} border-cyan-700 font-bold  text-cyan-700 underline underline-offset-4`
								: buttonStyle
						}
					>
						{category}
					</button>
				</li>
			))}
		</ul>
	);
};
