import ContactSection from "@/components/sections/ContactSection";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Pranav',
  description: 'Pranav Gandesree portfolio',
};

const  ContactPage : React.FC = () => {
    return (
     <>
        <ContactSection/>
     </>
    );
  }
  
export default ContactPage;