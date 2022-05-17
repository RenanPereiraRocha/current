import React from 'react';
import Image from 'next/image';
import {Navbar,UncontrolledDropdown, Nav, Button,Collapse,Offcanvas, ButtonGroup,NavbarBrand,NavbarToggler, OffcanvasHeader, OffcanvasBody, DropdownToggle,DropdownMenu,DropdownItem, NavLink, NavItem } from 'reactstrap';
import profilePic from '../public/logo.webp';
import styles from '../styles/Home.module.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fas)

export default function Menu(){  
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
return ( 
  <>
<div>
<Navbar light color="light" container="md" expand="lg" fixed='top'>
    <NavbarBrand href="/"><Image src={profilePic} alt="RN Tecnologia e Informática" width={280} height={45} priority/></NavbarBrand>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
      <Nav className="me-auto" navbar>
        <NavItem>
          <NavLink className={styles.smenu} href="/" ><FontAwesomeIcon icon='house' /> INÍCIO</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={styles.smenu} href="/servicos"><FontAwesomeIcon icon='users' /> SERVIÇOS</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={styles.smenu} href="/projetos"><FontAwesomeIcon icon='suitcase' /> PROJETOS</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={styles.smenu} href="/sobre"><FontAwesomeIcon icon='building' />  SOBRE</NavLink>
        </NavItem>
        <UncontrolledDropdown inNavbar nav >
        <DropdownToggle caret nav>
        <ButtonGroup>
          <Button className={styles.botao}><FontAwesomeIcon  icon='ranking-star' /> CRM RN</Button>
        </ButtonGroup>
          </DropdownToggle>
          <DropdownMenu >
            <DropdownItem className={styles.smenu} href="/crm-recursos"><FontAwesomeIcon  icon='arrows-spin' /> Recursos</DropdownItem>
            <DropdownItem className={styles.smenu} href="/crm-planos"><FontAwesomeIcon  icon='credit-card' /> Planos</DropdownItem>
            <DropdownItem divider />
            <DropdownItem className={styles.smenu} href="https://crm.rntecinfo.com.br" eventKey="4"><FontAwesomeIcon icon='address-card' /> Acesse à Área do Cliente</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
            <Button className={styles.botao} href="https://m.me/109368571498533"><FontAwesomeIcon fade icon='comment' size="lg"  pull="left" /> CONTATO</Button>
    </Collapse>
  </Navbar>
  </div>
  </>
  );
};
