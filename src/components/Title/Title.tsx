import type { Props } from "./types";
import { cn } from "~/lib/utils";

const Title = ({ value, className }: Props) => {
	return <div className={cn("font-bold text-white", className)}>{value}</div>;
};

export default Title;
