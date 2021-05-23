import Heading from "../layout/Heading";
import Subheading from "../layout/Subheading";
import AccomodationList from "./AccomodationList"
import Footer from './../layout/Footer';



export default function AccomodationPage() {
    return (
        <>
            <Heading content="Accomodations" />
            <Subheading content="Find the perfect accomodation for your Bergen trip." />
            <AccomodationList />
            <Footer />
        </>
    );
}