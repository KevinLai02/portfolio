import Subtitle from "./components/Subtitle/Subtitle";
import Title from "./components/Title/Title";
import { Button } from "../Button/Button";
import { FaArrowRight } from "react-icons/fa6";

const Lobby = () => {
	return (
		<div className="bg-black h-screen">
			<Title value="Building Digital Experiences" />
			<Subtitle value="Full-stack developer passionate about creating beautiful, functional web applications with modern technologies." />
			<div className="flex">
				<a href="#project">
					<Button className="flex items-center justify-center">
						View My Work <FaArrowRight className="ml-3" />{" "}
					</Button>
				</a>
				<a href="#contact">
					<Button variant="secondary">Get in Touch</Button>
				</a>
			</div>
		</div>
	);
};

export default Lobby;
