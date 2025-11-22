import Header from "~/components/Header/Header";
import Lobby from "~/container/Lobby/Lobby";
import Project from "../Project/Project";

export default function Home() {
	return (
		<div className="min-h-screen items-center justify-center bg-zinc-50">
			<Header />
			<Lobby />
			<Project />
		</div>
	);
}
