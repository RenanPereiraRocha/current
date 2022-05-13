import React, { useState } from 'react';
import Image from 'next/image';
import {Container, Navbar, Nav, Button, Offcanvas, Dropdown, ButtonGroup} from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import profilePic from '../public/logo.webp';
import styles from '../styles/Home.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

library.add(fas)

const Menu = () => {  
return ( 
<>
  {['xl'].map((expand) => (
    <Navbar key={expand} bg="light" expand={expand} className="mb-3" sticky="top">
      <Container >
        <Navbar.Brand href="/"><Image src={profilePic} alt="RN Tecnologia e Informática" width={280} height={45} priority/></Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
            <Image src={profilePic} alt="RN Tecnologia e Informática" width={280} height={45} priority/>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="me-auto" >
        <Nav.Link className={styles.smenu} href="/" ><FontAwesomeIcon icon='house' /> INÍCIO</Nav.Link>
        <Nav.Link className={styles.smenu} href="/servicos"><FontAwesomeIcon icon='users' /> SERVIÇOS</Nav.Link>
        <Nav.Link className={styles.smenu} href="/projetos"><FontAwesomeIcon icon='suitcase' /> PROJETOS</Nav.Link>
        <Nav.Link className={styles.smenu} href="/sobre"><FontAwesomeIcon icon='building' />  SOBRE</Nav.Link>
        <Dropdown as={ButtonGroup}>
  <Button className={styles.botao}><FontAwesomeIcon  icon='ranking-star' /> CRM RN</Button>
  <Dropdown.Toggle split  id="dropdown-split-basic" />
  <Dropdown.Menu>
    <Dropdown.Item className={styles.smenu} href="/crm-recursos"><FontAwesomeIcon  icon='arrows-spin' /> Recursos</Dropdown.Item>
    <Dropdown.Item className={styles.smenu} href="/crm-planos"><FontAwesomeIcon  icon='credit-card' /> Planos</Dropdown.Item>
    <Dropdown.Item className={styles.smenu} href="crm.rntecinfo.com.br" eventKey="4"><FontAwesomeIcon icon='address-card' /> Acesse à Área do Cliente</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
            </Nav>
        <Button eventKey={2} className={styles.botao} href="https://m.me/109368571498533"><FontAwesomeIcon fade icon='comment' size="lg"  pull="left" /> CONTATO</Button>{' '}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  ))}
</>
  );
};
export default Menu;
