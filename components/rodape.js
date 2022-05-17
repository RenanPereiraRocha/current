import Image from 'next/image';
import React from 'react';
import {Row, Col, Container, Form, Button, FormGroup, Input, Label} from 'reactstrap';
import styles from '../styles/Home.module.scss';
import profilePic from '../public/logobranca.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function  Rodape () {
  return (
    <>
<div className={styles.rodape}>
<Container fluid>
  <Row lg="3" md="5"sm="12"xs="12">
    <Col  xs="12" sm="3" md="3"><Image src={profilePic} alt="Logo Marca RN" width={150} height={95}/> <p>Prestando serviços no ramo da Informática e tecnologia. Experiente na área com mão de obra especializada e comprometida com o serviço estando preparado para atender todos os tipos de clientes, oferecendo assim, uma solução inteligente, de qualidade que caiba em seu bouço.</p>
    <a  href="https://www.facebook.com/rntecinfo" target="_blank"><FontAwesomeIcon className={styles.icones} icon="fa-brands fa-facebook" size="xl" pull="left"/></a> <a href="https://www.instagram.com/renanprrocha/"><FontAwesomeIcon className={styles.icones} icon="fa-brands fa-instagram " size="xl" pull="left" /></a> <a href="https://twitter.com/rntecinfo"><FontAwesomeIcon className={styles.icones} icon="fa-brands fa-twitter" size="xl" pull="left" /></a> <a href="https://www.linkedin.com/in/renan-pereira-rocha-b7696b105/"><FontAwesomeIcon className={styles.icones} icon="fa-brands fa-linkedin" size="xl" pull="left" /></a>
    <br/>
    <br/>
    <p>CNPJ: 26046101/0001-97<br/>
    Inscrição Municipal: 132708</p>
    </Col>
    <Col xs="8" sm="2" md="2" lg="2"><h5 className={styles.rtitulo}>Serviços</h5></Col>
    <Col xs="12" sm="3" md="3" lg="2"className={styles.rtitulo} ><h5>Links úteis</h5> <p className={styles.rdescricao} href="/"><FontAwesomeIcon icon="angle-right" size="lg" pull="left" /> Termos e Serviços</p><p className={styles.rdescricao} href="/"><FontAwesomeIcon icon="angle-right" size="lg" pull="left" /> Política de Prívacidade</p> </Col>
    <Col xs="8" sm="3"md="3" lg="3" className={styles.rtitulo}><h5>Boletim de Notícias</h5> <p className={styles.rdescricao}>Inscreva-se para receber novidades, ofertas e descontos em todos os serviços</p>
    <Form inline>
    <FormGroup floating>
      <Input id="e-mail"name="e-mail"placeholder="Use seu e-mail"type="e-mail"/>
      <Label for="E-mail"><FontAwesomeIcon icon="envelope" size="lg" pull="left" /> Email</Label>
    </FormGroup>
    <Button className={styles.botao} type="submit">Inscreva-se</Button>
  </Form>
   </Col>
  </Row>
  </Container>
 </div> 
 <div className="text-center p-2">
    ©2016 - {new Date().getFullYear()} Todos os direitos reservados: <a className="text-reset fw-bold" href="/">Renan Tecnologia e Informática</a>
  </div>
  </>
  );
};
export default Rodape