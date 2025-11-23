import Tag from "./components/Tag/Tag";
import Subtitle from "~/components/Subtitle/Subtitle";
import Title from "~/components/Title/Title";
import SkillCard from "./components/SkillCard/SkillCard";
import { skillList } from "./constants";

const Skill = () => {
	return (
		<div
			className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 px-4 pt-25 pb-10"
			id="skill"
		>
			<div>
				<Title className="text-3xl sm:text-5xl" value="Skills & Technologies" />
				<Subtitle
					className="text-lg sm:text-xl mt-2"
					value="Tools and technologies I use to bring ideas to life."
				/>
			</div>
			<div className="flex flex-wrap gap-8 mt-10 justify-center">
				{skillList.map((skill) => (
					<SkillCard key={skill.id} title={skill.title}>
						{skill.tags.map((tag) => (
							<Tag key={tag.id} value={tag.name} />
						))}
					</SkillCard>
				))}
			</div>
		</div>
	);
};

export default Skill;
