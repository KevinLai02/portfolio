import Header from "~/components/Header/Header";
import Lobby from "../Lobby/Lobby";
import Project from "../Project/Project";
import Skill from "../Skill/Skill";

export default function Home() {
	return (
		<div className="min-h-screen items-center justify-center bg-zinc-50">
			<Header />
			<Lobby />
			<Project />
			<Skill />
		</div>
	);
}
