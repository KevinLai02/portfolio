import LinkText from "./components/LinkText/LinkText";
import Title from "./components/Title/Title";

const Header = () => {
	return (
		<div className="fixed flex bg-black/65 items-center justify-between px-4 py-4 md:px-15 absolute w-full top-0 backdrop-blur-xl border-b border-white/10">
			<Title value="Kevin Lai" targetId="lobby" />
			<div>
				<LinkText value="Project" targetId="project" />
				<LinkText value="Skill" targetId="skill" />
				<LinkText value="Contact" targetId="contact" />
			</div>
		</div>
	);
};

export default Header;
