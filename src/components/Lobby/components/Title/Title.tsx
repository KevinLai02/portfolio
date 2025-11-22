import type { Props } from "./types";

const Title = ({ value }: Props) => {
	return <div className="text-6xl font-bold px-5 text-white">{value}</div>;
};

export default Title;
