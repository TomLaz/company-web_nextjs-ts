import React, { useEffect } from 'react';
import { FormContainer, FormFields, FormField, FormTextArea, FormButton, FormButtonBox,FormErrorMessage } from './Form.styles';

const Form: React.FC = () => {
  const [name, setName] = React.useState( '' );
  const [email, setEmail] = React.useState( '' );
  const [subject, setSubject] = React.useState( '' );
  const [phone, setPhone] = React.useState( '' );
  const [message, setMessage] = React.useState( '' );
  const [showErrorMessage, setShowErrorMessage] = React.useState( false );

  useEffect(() => {
    setShowErrorMessage( false );
  },[name, email, subject, phone, message]);

  return (
    <FormContainer>
      <FormFields>
        <FormField
          tabIndex={1}
          placeholder='Your name'
          value={name}
          onChange={( e ) => setName( e.currentTarget.value )} />
        <FormField
          tabIndex={2}
          placeholder='Your email'
          type='email'
          value={email}
          onChange={( e ) => setEmail( e.currentTarget.value )} />
        <FormField
          tabIndex={3}
          placeholder='Subject'
          value={subject}
          onChange={( e ) => setSubject( e.currentTarget.value )} />
        <FormField
          tabIndex={4}
          placeholder='Contact Phone'
          type='tel'
          value={phone}
          onChange={( e ) => setPhone( e.currentTarget.value )} />
        <FormTextArea
          tabIndex={5}
          value={message}
          onChange={( e ) => setMessage( e.currentTarget.value )}
          placeholder='Message'
          rows={10}
          cols={50}
          maxLength={700} />
      </FormFields>
      <FormButtonBox>
        <FormErrorMessage>
          {showErrorMessage && '*Must complete all fields'}
        </FormErrorMessage>
        <FormButton
          tabIndex={6}
          onClick={() => {
            if ( !name || !email || !subject || !phone || !message ) {
              setShowErrorMessage( true );
            } else {
              alert( 'Thank you!' );
              setName( '' );
              setEmail( '' );
              setSubject( '' );
              setPhone( '' );
              setMessage( '' );
            }
          }}>
          {'SUBMIT->'}
        </FormButton>
      </FormButtonBox>
    </FormContainer>
  );
};

export default Form;