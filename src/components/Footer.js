import React from 'react';


class Footer extends React.Component {

  render() {
    return (
      <div className='footer-wrapper'>
        <div className='footer-flex'>
          <span className='footer-icon-container'>
            <a href='https://github.com/axionos' target='_blank' rel='noopener noreferrer' alt='github'>
              <i class="fab fa-github"></i>
            </a>
            <a href='https://www.linkedin.com/in/soyeongoh/' rel='noopener noreferrer' target='_blank' alt='linkedin'>
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href='https://www.linkedin.com/in/soyeongoh/' rel='noopener noreferrer' target='_blank' alt='linkedin'>
              <i class="far fa-file"></i>
            </a>
          </span>
          <p>2019 © Soyeong Oh All Rights Reserved.</p>
        </div>
      </div>
    )
  }
}

export default Footer
