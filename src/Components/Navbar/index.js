import { NavbarSection, Logo, LogoText, UlList, ListItem, Anchor  } from './style.js'
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar =()=> {
  return (
    <NavbarSection>

        <div className="container">
          <Logo>
            <LogoText>Ultra Profile</LogoText>
          </Logo>
          
          <UlList>
            <ListItem><Link to="/" > Home </Link></ListItem>
            <ListItem><Anchor href="#" > Work </Anchor></ListItem>
            <ListItem><Anchor href="#" > Portfolio </Anchor></ListItem>
            <ListItem><Anchor href="#" > Resume </Anchor></ListItem>
            <ListItem><Anchor href="#" > About </Anchor></ListItem>
            <ListItem><Link to="/contact" > contact </Link></ListItem>
          </UlList>
        
        </div>
    </NavbarSection>
  );
}

export default NavBar;