import Heading from "../layout/Heading";
import { AdminAdd } from "./AdminAdd";
import AdminEnquiries from "./AdminEnquiries";
import AdminList from './AdminList';
import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import AuthContext from "../../context/AuthContext";
import Footer from './../layout/Footer';

export default function AdminPage() {

    const [auth] = useContext(AuthContext);
    const history = useHistory();

    useEffect(() => {
        if(!auth) {
            history.push("/login");
            localStorage.clear();
        } 
    }, []);

	return (
		<>
			<Heading content="Admin Dashboard" />
				<h3>New Questions</h3>
			<AdminList />
				<h3>New Enquiries</h3>
			<AdminEnquiries />
				<h3>Add new accomodation</h3>
			<AdminAdd />
			<Footer />
			
		</>
	);
}