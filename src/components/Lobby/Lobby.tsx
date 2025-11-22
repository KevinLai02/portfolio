import Subtitle from "./components/Subtitle/Subtitle";
import Title from "./components/Title/Title";
import { Button } from "../Button/Button";
import { ArrowRight, Github, Linkedin } from "lucide-react";

const Lobby = () => {
	return (
		<div className="bg-black h-screen">
			<Title value="Building Digital Experiences" />
			<Subtitle value="Full-stack developer passionate about creating beautiful, functional web applications with modern technologies." />
			<div className="flex">
				<a href="#project">
					<Button className="flex items-center justify-center">
						View My Work <ArrowRight className="ml-3 h-4 w-4" />{" "}
					</Button>
				</a>
				<a href="#contact">
					<Button variant="secondary">Get in Touch</Button>
				</a>
			</div>
			<div className="flex">
				<a href="https://github.com/KevinLai02">
					<Github className="h-7 w-7 text-zinc-400 hover:text-zinc-100" />
				</a>
				<a href="https://www.linkedin.com/in/hong-yu-lai-615769327/">
					<Linkedin className="h-7 w-7 text-zinc-400 hover:text-zinc-100" />
				</a>
			</div>
		</div>
	);
};

export default Lobby;
