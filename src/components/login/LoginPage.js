import Heading from "../layout/Heading";
import LoginForm from "./LoginForm";
import Footer from './../layout/Footer';


export default function LoginPage() {
	return (
		<>
			<Heading content="Login" />
			<LoginForm />
			<Footer />
		</>
	);
}