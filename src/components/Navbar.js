
import _ from 'lodash'
import React, { Component } from 'react'
import { Container, Dropdown, Menu, Visibility } from 'semantic-ui-react'



const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  marginTop: '4em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
}

const fixedMenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}




const Paragraph = () => (
  <p>
    {[
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ',
      'tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas ',
      'semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ',
      'ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean ',
      'fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. ',
      'Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor ',
      'neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, ',
      'accumsan porttitor, facilisis luctus, metus',
    ].join('')}
  </p>
)

export default class StickyLayout extends Component {
  state = {
    menuFixed: false,
  }

  stickTopMenu = () => this.setState({ menuFixed: true })

  unStickTopMenu = () => this.setState({ menuFixed: false })

  render() {
    const { menuFixed } = this.state

    return (
      <div>
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
            <Container text>

              <Menu.Item header>Home</Menu.Item>
              <Menu.Item as='a'>About</Menu.Item>
              <Menu.Item as='a'>Portfolio</Menu.Item>
              <Menu.Item as='a'>Blog</Menu.Item>
              <Menu.Item as='a'>Contact</Menu.Item>

              <Menu.Menu position='right'>
                <Dropdown text='Dropdown' pointing className='link item'>
                  <Dropdown.Menu>
                    <Dropdown.Item>Home</Dropdown.Item>
                    <Dropdown.Item>About</Dropdown.Item>
                    <Dropdown.Item>Portfolio</Dropdown.Item>
                    <Dropdown.Item>Blog</Dropdown.Item>
                    <Dropdown.Item>Contact</Dropdown.Item>
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
