import LinkText from "./components/LinkText/LinkText";

const Header = () => {
	return (
		<div className="flex bg-black">
			<LinkText value="Project" targetId="project" />
			<LinkText value="Skill" targetId="skill" />
			<LinkText value="Contact" targetId="contact" />
		</div>
	);
};

export default Header;
