import Subtitle from "~/components/Subtitle/Subtitle";
import Title from "~/components/Title/Title";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import { projectList } from "./constants";

const Project = () => {
	return (
		<div
			id="project"
			className="flex flex-col items-center justify-center bg-zinc-950 min-h-screen space-y-8 py-10"
		>
			<Title className="text-5xl" value="Featured Projects" />
			<div>
				<Subtitle
					className="text-xl"
					value="A selection of recent projects showcasing my skills"
				/>
				<Subtitle
					className="text-xl"
					value="in web development, design, and problem-solving."
				/>
			</div>
			<div className="grid grid-cols-2 gap-8 mt-10">
				{projectList.map((project) => (
					<ProjectCard
						key={project.id}
						title={project.title}
						description={project.description}
						imageUrl={project.imageUrl}
						projectUrl={project.projectUrl}
					/>
				))}
			</div>
		</div>
	);
};

export default Project;
