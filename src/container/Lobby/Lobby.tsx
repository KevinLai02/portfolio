import Subtitle from "~/components/Subtitle/Subtitle";
import Title from "~/components/Title/Title";
import { Button } from "~/components/Button/Button";
import { ArrowRight, Github, Linkedin } from "lucide-react";

const Lobby = () => {
	return (
		<div
			id="lobby"
			className="flex flex-col items-center justify-center bg-black space-y-10 min-h-screen pt-10 px-5"
		>
			<Title
				className="text-4xl sm:text-6xl"
				value="Building Digital Experiences"
			/>
			<div>
				<Subtitle
					className="text-lg sm:text-2xl"
					value="Full-stack developer passionate about creating beautiful"
				/>
				<Subtitle
					className="text-lg sm:text-2xl"
					value=", functional web applications with modern technologies."
				/>
			</div>
			<div className="flex space-x-6">
				<a href="#project">
					<Button className="flex items-center justify-center text-xs sm:text-base">
						View My Work <ArrowRight className="ml-3 h-4 w-4" />{" "}
					</Button>
				</a>
				<a href="#contact">
					<Button variant="secondary">Get in Touch</Button>
				</a>
			</div>
			<div className="flex space-x-6">
				<a
					href="https://github.com/KevinLai02"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Github className="h-7 w-7 text-zinc-400 hover:text-zinc-100" />
				</a>
				<a
					href="https://www.linkedin.com/in/hong-yu-lai-615769327/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Linkedin className="h-7 w-7 text-zinc-400 hover:text-zinc-100" />
				</a>
			</div>
		</div>
	);
};

export default Lobby;
