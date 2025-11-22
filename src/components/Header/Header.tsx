import LinkText from "./components/LinkText/LinkText";
import Title from "./components/Title/Title";

const Header = () => {
	return (
		<div className="flex bg-black items-center justify-between px-12 absolute w-full top-0 py-3">
			<Title value="Kevin Lai" targetId="home" />
			<div>
				<LinkText value="Project" targetId="project" />
				<LinkText value="Skill" targetId="skill" />
				<LinkText value="Contact" targetId="contact" />
			</div>
		</div>
	);
};

export default Header;
