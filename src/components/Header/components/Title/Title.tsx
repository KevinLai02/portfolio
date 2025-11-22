import type { Props } from "./types";

const Title = ({ value, targetId }: Props) => {
	return (
		<a
			className="text-2xl font-bold py-4 px-5 outline-none text-white"
			href={`#${targetId}`}
		>
			{value}
		</a>
	);
};

export default Title;
