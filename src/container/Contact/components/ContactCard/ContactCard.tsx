import type { Props } from "./types";
import Subtitle from "~/components/Subtitle/Subtitle";
import Title from "~/components/Title/Title";

const ContactCard = ({ title, value, icon }: Props) => {
	return (
		<div className="flex bg-transparent border border-zinc-800 rounded-xl min-w-80 min-h-30 p-6 gap-6">
			<div className="flex items-center">{icon}</div>
			<div className="">
				<Title className="text-xl mb-1" value={title} />
				<Subtitle className="text-lg" value={value} />
			</div>
		</div>
	);
};

export default ContactCard;
