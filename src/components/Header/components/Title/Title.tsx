import type { Props } from "./types";

const Title = ({ value, targetId }: Props) => {
	return (
		<a
			className="text-base sm:text-xl md:text-2xl font-bold outline-none text-white"
			href={`#${targetId}`}
		>
			{value}
		</a>
	);
};

export default Title;
