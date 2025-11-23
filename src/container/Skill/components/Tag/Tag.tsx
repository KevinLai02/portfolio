import type { Props } from "./types";

const Tag = ({ value }: Props) => {
	return (
		<div className="flex items-center justify-center border border-zinc-700/70 rounded-md text-white bg-transparent text-base px-3">
			{value}
		</div>
	);
};

export default Tag;
