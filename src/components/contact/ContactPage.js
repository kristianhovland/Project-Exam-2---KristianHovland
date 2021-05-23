import ContactForm from "./ContactForm";
import Heading from "../layout/Heading";
import Footer from "../layout/Footer";

export default function ContactPage() {
	return (
		<>
			<Heading content="Contact" />
			<ContactForm />
			<Footer />
		</>
	);
}