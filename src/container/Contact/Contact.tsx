import Subtitle from "~/components/Subtitle/Subtitle";
import Title from "~/components/Title/Title";
import ContactCard from "./components/ContactCard/ContactCard";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
	return (
		<div
			id="contact"
			className="flex flex-col items-center justify-center bg-zinc-950/95 min-h-screen space-y-8 pb-10 pt-25 px-5"
		>
			<Title className="text-5xl" value="Get In Touch" />

			<Subtitle
				className="text-xl"
				value="Have a project in mind or want to collaborate? Feel free to reach out!"
			/>
			<ContactCard
				title="Email"
				value="jihn.smith629@gmail.com"
				icon={<Mail className="h-7 w-7 text-sky-500" />}
			/>
			<ContactCard
				title="Phone"
				value="+886 983781511"
				icon={<Phone className="h-7 w-7 text-sky-500" />}
			/>
			<ContactCard
				title="Location"
				value="Tainan, TW"
				icon={<MapPin className="h-7 w-7 text-sky-500" />}
			/>
		</div>
	);
};

export default Contact;
