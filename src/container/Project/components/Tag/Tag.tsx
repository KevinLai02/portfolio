import type { Props } from "./types";

const Tag = ({ value }: Props) => {
	return (
		<div className="flex items-center justify-center border-none rounded-md text-white bg-zinc-900 text-sm px-3">
			{value}
		</div>
	);
};

export default Tag;
