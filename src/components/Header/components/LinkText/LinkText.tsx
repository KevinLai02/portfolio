import type { Props } from "./types";

const LinkText = ({ value, targetId }: Props) => {
	return (
		<a
			className="text-sm sm:text-base px-2 md:px-5 outline-none text-gray-500 hover:text-white"
			href={`#${targetId}`}
		>
			{value}
		</a>
	);
};

export default LinkText;
