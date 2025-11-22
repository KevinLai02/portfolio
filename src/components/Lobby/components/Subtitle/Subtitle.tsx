import type { Props } from "./types";

const Subtitle = ({ value }: Props) => {
	return <div className="text-2xl font-bold px-5 text-zinc-500">{value}</div>;
};

export default Subtitle;
