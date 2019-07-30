import React from 'react';
import { Container, Form, Button }from 'semantic-ui-react'

class Contact extends React.Component {
  render(){
    return (
      <div className="contact">
        <Container>
          <h1 className='page-title'>Contact Soyeong</h1>
          <Form>
            <Form.Input name='Name' placeholder='Your Name' />
            <Form.Input name='Email' placeholder='Your Email' />
            <Form.TextArea placeholder='Enter your Message here!' />
            <Button type='submit'>Submit</Button>
          </Form>


        </Container>
      </div>
    );
  }
}

export default Contact;
