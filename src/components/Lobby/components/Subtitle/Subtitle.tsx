import type { Props } from "./types";

const Subtitle = ({ value }: Props) => {
	return (
		<div className="text-lg font-bold py-4 px-5 outline-none text-white">
			{value}
		</div>
	);
};

export default Subtitle;
