import type { Props } from "./types";

const LinkText = ({ value, targetId }: Props) => {
	return (
		<a
			className="py-4 px-5 outline-none text-gray-500 hover:text-white"
			href={`#${targetId}`}
		>
			{value}
		</a>
	);
};

export default LinkText;
