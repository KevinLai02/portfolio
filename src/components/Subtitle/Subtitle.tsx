import type { Props } from "./types";
import { cn } from "~/lib/utils";

const Subtitle = ({ value, className }: Props) => {
	return (
		<div className={cn("font-bold text-zinc-500", className)}>{value}</div>
	);
};

export default Subtitle;
