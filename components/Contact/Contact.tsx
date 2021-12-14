import { ContactContainer, ContactWrapper, ContactTitle, ContactDescription,
  ContactBody, ContactInfo, ContactData, ContactForm } from './Contact.styles';
import Form from './Form/Form';

const Contact: React.FC = () => {
  return (
    <ContactContainer
      id='item7'
      data-aos='fade-up'>
      <ContactWrapper>
        <ContactTitle>HOW FIND US</ContactTitle>
        <ContactDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam amet veritatis voluptatibus sunt nesciunt illum blanditiis numquam, veniam molestiae quieas
        </ContactDescription>
        <ContactBody>
          <ContactInfo>
            <ContactData>
              <h3>ADDRESS</h3>
              <p>Dignissimos accusamus placeat officiis cumque veritatis animi explicabo esse</p>
            </ContactData>
            <ContactData>
              <h3>CALL US</h3>
              <p>+54 9 2615590960</p>
            </ContactData>
            <ContactData>
              <h3>EMAIL</h3>
              <p>contact@email.com</p>
            </ContactData>
          </ContactInfo>
          <ContactForm>
            <Form />
          </ContactForm>
        </ContactBody>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;