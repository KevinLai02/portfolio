import Subtitle from "~/components/Subtitle/Subtitle";
import Title from "~/components/Title/Title";
import ContactCard from "./components/ContactCard/ContactCard";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
	return (
		<div
			id="contact"
			className="flex flex-col items-center justify-center bg-zinc-950/95 min-h-screen pb-10 pt-25 px-5"
		>
			<Title className="text-3xl sm:text-5xl" value="Get In Touch" />

			<Subtitle
				className="text-lg sm:text-xl mt-3"
				value="Have a project in mind or want to collaborate? Feel free to reach out!"
			/>
			<div className="space-y-8 mt-8">
				<ContactCard
					title="Email"
					value="jihn.smith629@gmail.com"
					icon={<Mail className="h-6 w-6 sm:h-7 sm:w-7 text-sky-500" />}
				/>
				<ContactCard
					title="Phone"
					value="+886 983781511"
					icon={<Phone className="h-6 w-6 sm:h-7 sm:w-7 text-sky-500" />}
				/>
				<ContactCard
					title="Location"
					value="Tainan, TW"
					icon={<MapPin className="h-6 w-6 sm:h-7 sm:w-7 text-sky-500" />}
				/>
			</div>
		</div>
	);
};

export default Contact;
