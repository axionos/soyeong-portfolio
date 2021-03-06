
// import _ from 'lodash'
import React, { Component } from 'react'
import { Container, Dropdown, Menu, Visibility } from 'semantic-ui-react'
import { Link } from 'react-scroll'



const menuStyle = {
  // borderTop: '1px solid #ddd',
  borderBottom: '4px solid #43e072',
  borderRadius: 0,
  boxShadow: 'none',
  // marginBottom: '1em',
  // marginTop: '4em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
}

const fixedMenuStyle = {
  // backgroundColor: '#2d2d2d',
  borderBottom: '4px solid #43e072',
  // boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
  paddingTop: '10px',
  paddingBottom: '10px'
}

export default class StickyLayout extends Component {
  state = {
    menuFixed: false
  }

  stickTopMenu = () => this.setState({ menuFixed: true })

  unStickTopMenu = () => this.setState({ menuFixed: false })

  render() {
    const { menuFixed } = this.state

    console.log('navbar props', this.props)
    return (
      <div className='nav-wrapper'>
        {/* Heads up, style below isn't necessary for correct work of example, simply our docs defines other
            background color.
          */}



        {/* Attaching the top menu is a simple operation, we only switch `fixed` prop and add another style if it has
            gone beyond the scope of visibility
          */}
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            fixed={menuFixed ? 'top' : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container className='nav-container'>
              <Link
                activeClass="active"
                to="intro"
                spy={true}
                smooth={true}
                offset={0}
                duration= {500}
                className='link'
              >
                <Menu.Item>Home</Menu.Item>
              </Link>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={30}
                duration= {500}
                className='link'
                onClick={this.props.showSkills}
              >
                <Menu.Item as='a' onClick={this.props.showSkills}>About</Menu.Item>
              </Link>
              <Link
                activeClass="active"
                to="project"
                spy={true}
                smooth={true}
                offset={30}
                duration= {500}
                className='link'
              >
                <Menu.Item as='a'>Project</Menu.Item>
              </Link>
              <Link
                activeClass="active"
                to="blog"
                spy={true}
                smooth={true}
                offset={30}
                duration= {500}
                className='link'
              >
                <Menu.Item as='a'>Blog</Menu.Item>
              </Link>

              <Menu.Menu position='right' className='dropdown-nav'>
                <Dropdown text='Dropdown' pointing className='link item'>
                  <Dropdown.Menu>
                    <Dropdown.Item>Home</Dropdown.Item>
                    <Dropdown.Item>About</Dropdown.Item>
                    <Dropdown.Item>Portfolio</Dropdown.Item>
                    <Dropdown.Item>Blog</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Menu>
            </Container>
          </Menu>
        </Visibility>




      </div>
    )
  }
}
