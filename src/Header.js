import React, { useState } from 'react'
import {
  Link
} from 'react-router-dom'
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler
} from 'reactstrap'

const Header = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }
  return (
    <Navbar color='light' light expand='md'>
      <div className='container'>
        <NavbarBrand tag={Link} to='/'>Minhas Séries</NavbarBrand>
        <NavbarToggler onClick={toggle}></NavbarToggler>
        <Collapse isOpen={open} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink tag={Link} to='/generos'>Gêneros</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to='/series'>Séries</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  )
}

export default Header
