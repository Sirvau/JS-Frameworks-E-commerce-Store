import ContactForm from "../../components/contact";
import { ContactAnimation } from "../../components/animations";

function ContactPage() {
    return (
        <div className="px-4 lg:px-20 py-10">
            <h1 className="uppercase text-2xl lg:text-3xl tracking-wide">Contact us</h1>
            <hr className="my-4 border-oak-brown opacity-30" />
            
            <div className="flex flex-col md:flex-row items-center md:items-start md:mx-2">
                <ContactForm />
                <div className="hidden md:block self-center">
              <ContactAnimation />
              </div>
            </div>
        </div>
    );
}

export default ContactPage;
