import type { Props } from "./types";
import Image from "next/image";
import Title from "~/components/Title/Title";
import Subtitle from "~/components/Subtitle/Subtitle";
import { ExternalLink } from "lucide-react";

const ProjectCard = ({
	title,
	description,
	imageUrl,
	projectUrl,
	children,
}: Props) => {
	return (
		<div className="border border-zinc-800 rounded-xl overflow-hidden max-w-130 min-w-80 max-h-200 py-6 group">
			<Image
				src={imageUrl}
				alt=""
				className="w-full h-full max-h-45 sm:max-h-60 group-hover:scale-105 duration-300"
				width={0}
				height={0}
				sizes="100vw"
			/>
			<div className="px-5 py-6 space-y-4">
				<div className="flex justify-between">
					<Title value={title} className="text-xl" />
					<a href={projectUrl} target="_blank">
						<ExternalLink className="h-6 w-6 text-zinc-400 hover:text-zinc-100" />
					</a>
				</div>
				<Subtitle className="text-sm" value={description} />
				<div className="flex flex-wrap gap-3">{children}</div>
			</div>
		</div>
	);
};

export default ProjectCard;
