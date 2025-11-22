import Subtitle from "~/components/Subtitle/Subtitle";
import Title from "~/components/Title/Title";

const Project = () => {
	return (
		<div
			id="project"
			className="flex flex-col items-center justify-center bg-black h-screen space-y-8"
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
		</div>
	);
};

export default Project;
