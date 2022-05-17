import React, { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane,Row, Col, Button, Card, CardBody, CardText,CardSubtitle,CardTitle,CardGroup, Container } from 'reactstrap';
import styles from '../styles/Home.module.scss';

export default function Portifolio() {
  const [activeTab, setActiveTab] = useState('1');
  return (
    <div>
      <Container fluid="md">
      <Col  >
      <Nav pills tabs>
        <NavItem className={styles.tabtitulo}>
          <NavLink className={activeTab == '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
            Sites
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={activeTab == '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
            logo Marcas
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={activeTab == '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
          CRM (Plataforma de Gestão)
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
        <CardGroup>
  <Card className={styles.comcipa} style={{  backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.171), rgba(0, 0, 0, 0.589)),url(/site-comcipa.jpg)",
  backgroundRepeat: 'no-repeat',backgroundSize: 'cover' }} >
    <CardBody className={styles.rtitulo} >
      <CardTitle  tag="h5"> Comcipa</CardTitle>
      <CardSubtitle className={styles.subtitulo} tag="h6" >
        Medicina e Segurança do Trabalho
      </CardSubtitle>
      <CardText>
      Site da Comcipa Medicina e Segurança do Trabalho
      </CardText>
      <Button className={styles.botao} hrf="https://comcipa.com.br" >Veja </Button>
    </CardBody>
  </Card >
  <Card className={styles.medicipat} style={{  backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.171), rgba(0, 0, 0, 0.589)),url(/sitemedcipat.jpg)",
  backgroundRepeat: 'no-repeat',backgroundSize: 'cover' }}>
    <CardBody className={styles.rtitulo}>
<CardTitle tag="h5"> Medicipat  </CardTitle>
<CardSubtitle className={styles.subtitulo} tag="h6">Assessoria Técnica em Medicina e Segurança do Trabalho      </CardSubtitle>
      <CardText> Site com tecnologia moderna e design elegante </CardText>
      <Button href="https://medicipat.com.br" className={styles.botao}>Veja</Button>
    </CardBody>
  </Card>
  <Card className={styles.rwr} style={{  backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.171), rgba(0, 0, 0, 0.589)),url(/site-rwr.jpg)",
  backgroundRepeat: 'no-repeat',backgroundSize: 'cover' }}>
    <CardBody className={styles.rtitulo}>
      <CardTitle tag="h5">
      RWR 
      </CardTitle>
      <CardSubtitle className={styles.subtitulo} tag="h6">
        Eventos e Soluções
      </CardSubtitle>
      <CardText>
      Site feito para uma hotelaria com design e sistema modernos </CardText>
      <Button href="https://www.rwreventosesolucoes.com.br"className={styles.botao} >
        Veja
      </Button>
    </CardBody>
  </Card>
  </CardGroup>
        </TabPane>
        <TabPane tabId="2"><CardGroup>
  <Card className={styles.logomarca} style={{  backgroundImage: "url(/logo-rgs.jpg)",
  backgroundRepeat: 'no-repeat',backgroundSize: 'contain', }} >
    <CardBody  >
      <CardTitle  tag="h5"> RGS </CardTitle>
      <CardSubtitle className={styles.subtitulo} tag="h6" >
      Consultoria
      </CardSubtitle>
      <CardText>Logomarca RGS</CardText>
    </CardBody>
  </Card >
  <Card className={styles.logomarca} style={{  backgroundImage: "url(/logo-rc-imoveis.jpg)",
  backgroundRepeat: 'no-repeat',backgroundSize: 'contain' }}>
    <CardBody>
<CardTitle tag="h5"> RC </CardTitle>
<CardSubtitle className={styles.subtitulo} tag="h6">Imóveis</CardSubtitle>
      <CardText> logomarca RC</CardText>
    </CardBody>
  </Card>
  <Card className={styles.logomarca} style={{  backgroundImage: "url(/logo-marca-omega.jpg)",
  backgroundRepeat: 'no-repeat',backgroundSize: 'contain' }}>
    <CardBody >
      <CardTitle tag="h5">
      Omega 
      </CardTitle>
      <CardSubtitle className={styles.subtitulo} tag="h6">Prime </CardSubtitle>
      <CardText> Logomarca Omega </CardText>
    </CardBody>
  </Card>
  </CardGroup>
  </TabPane>
        <TabPane tabId="3">
        <Card  className={styles.logomarca} style={{  backgroundImage: "url(/web-application.jpg)",
  backgroundRepeat: 'no-repeat',backgroundSize: 'cover' }} >
    <CardBody className={styles.rtitulo} >
    <CardTitle tag="h5">RN CRM </CardTitle>
      <CardSubtitle className={styles.subtitulo} tag="h6" >
      RN Sistema Multiplataforma de Serviço
      </CardSubtitle>
      <Button className={styles.botao} href="https://crm.rntecinfo.com.br" >Veja </Button>
    </CardBody>
  </Card >
        </TabPane>
      </TabContent>
      </Col>
      </Container>
    </div>
  );
}