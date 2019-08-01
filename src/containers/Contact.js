import React from 'react';
import { Container, Form, Button, Grid }from 'semantic-ui-react'

class Contact extends React.Component {
  render(){
    return (
      <div className="contact" id='contact'>
        <Container>
          <h1 className='page-title'>Contact Soyeong</h1>
          <div className='contact-form-container'>
            <Grid centered columns={2}>
              <Grid.Column >
                <Form>
                  <Form.Input name='Name' placeholder='Your Name' />
                  <Form.Input name='Email' placeholder='Your Email' />
                  <Form.TextArea placeholder='Enter your Message here!' />
                  <div className='submit-btn-container'>
                    <Button type='submit'>Submit</Button>
                  </div>
                </Form>
              </Grid.Column>
            </Grid>
          </div>

        </Container>
      </div>
    );
  }
}

export default Contact;
