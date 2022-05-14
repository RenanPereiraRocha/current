import Image from 'next/image';
import React from 'react';
import {Row, Col, Container, Form, Button} from 'react-bootstrap';
import styles from '../styles/Home.module.scss';
import profilePic from '../public/logobranca.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, fab)

function  Rodape () {
  return (
    <>
<div className={styles.rodape}>
<Container>
  <Row className="justify-content-md-center" xs={6} md={4}>
    <Col ><Image src={profilePic} alt="Logo Marca RN" width={150} height={95}/> <p>Prestando serviços no ramo da Informática e tecnologia. Experiente na área com mão de obra especializada e comprometida com o serviço estando preparado para atender todos os tipos de clientes, oferecendo assim, uma solução inteligente, de qualidade que caiba em seu bouço.</p>
    <a  href="https://www.facebook.com/rntecinfo" target="_blank"><FontAwesomeIcon className={styles.icones} icon="fa-brands fa-facebook" size="xl" pull="left"/></a> <a href="https://www.instagram.com/renanprrocha/"><FontAwesomeIcon className={styles.icones} icon="fa-brands fa-instagram " size="xl" pull="left" /></a> <a href="https://twitter.com/rntecinfo"><FontAwesomeIcon className={styles.icones} icon="fa-brands fa-twitter" size="xl" pull="left" /></a> <a href="https://www.linkedin.com/in/renan-pereira-rocha-b7696b105/"><FontAwesomeIcon className={styles.icones} icon="fa-brands fa-linkedin" size="xl" pull="left" /></a>
    <br/>
    <br/>
    <p>CNPJ: 26046101/0001-97<br/>
    Inscrição Municipal: 132708</p>
    </Col>
    <Col><h5 className={styles.titulo}>Serviços</h5></Col>
    <Col className={styles.titulo} ><h5>Links úteis</h5> <p className={styles.rdescricao} href="/"><FontAwesomeIcon icon="angle-right" size="lg" pull="left" /> Termos e Serviços</p><p className={styles.rdescricao} href="/"><FontAwesomeIcon icon="angle-right" size="lg" pull="left" /> Política de Prívacidade</p> </Col>
    <Col  className={styles.titulo}><h5>Boletim de Notícias</h5> <p className={styles.rdescricao}>Inscreva-se para receber novidades, ofertas e descontos em todos os serviços</p>
    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label><FontAwesomeIcon icon="envelope" size="lg" pull="left" /> E-mail</Form.Label>
    <Form.Control type="email" placeholder="Use seu e-mail" /></Form.Group>
  <Button className={styles.botao} type="submit">Inscreva-se</Button>
  </Form>
   </Col>
  </Row>
</Container>
 </div> 
 {/*!-- Copyright --*/}
 <div className="text-center p-2">
    ©2016 - {new Date().getFullYear()} Todos os direitos reservados: <a class="text-reset fw-bold" href="/">Renan Tecnologia e Informática</a>
  </div>
  {/*!-- Copyright --*/}
  </>
  );
};
export default Rodape