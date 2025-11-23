import Title from "~/components/Title/Title";
import type { Props } from "./types";

const SkillCard = ({ title, children }: Props) => {
	return (
		<div className="bg-zinc-900/70 border border-zinc-800 rounded-xl max-w-100 min-w-70 min-h-40 p-6">
			<Title className="text-2xl" value={title} />
			<div className="flex flex-wrap gap-4 mt-10">{children}</div>
		</div>
	);
};

export default SkillCard;
