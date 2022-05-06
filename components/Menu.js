import React, { useState } from 'react';
import Image from 'next/image'
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,Button} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
library.add(fas);

const Menu = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
return (
    <div>
<Navbar color="light" container="sm" expand="md" sticky="top" light>
    <NavbarBrand href="rntecinfo.com.br">
    <Image
        src="/logo.webp"
        alt="RN Tecnologia e Informática"
        width={280}
        height={45}/>
    </NavbarBrand>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={!isOpen} navbar>
<Nav className='me-auto' navbar>
        <NavItem>
<NavLink href="/">
<h6><FontAwesomeIcon icon='house' /> INÍCIO</h6>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="/">
<h6><FontAwesomeIcon icon='users' /> SERVIÇOS</h6>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="/projetos">
<h6><FontAwesomeIcon icon='suitcase' /> PROJETOS</h6>
</NavLink>
</NavItem>
<NavItem>
<NavLink href="/sobre">
<h6><FontAwesomeIcon icon='building' />  SOBRE</h6>
</NavLink>
</NavItem>
</Nav>
<Button href="https://m.me/109368571498533"color="primary">
<h6><FontAwesomeIcon icon='comment' /> CONTATO </h6>
</Button>
</Collapse>
</Navbar>
</div>
  );
};
export default Menu;
