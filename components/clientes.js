import { Card, CardBody, CardText,CardSubtitle,CardTitle,CardGroup, CardImg, Col, Row } from 'reactstrap';
import styles from '../styles/Home.module.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function clientes() {
return(
<>
<div>
 <Col md={{
        offset: 2,
        size: 8
      }}
      sm="12">
<CardGroup >
  <Card>
    <CardImg src="/alex.jpg" top className={styles.imagemc}  />
    <CardBody className={styles.titulo}>
      <CardTitle tag="h5">Alex Carvalho</CardTitle>
      <CardSubtitle className="mb-2 text-muted" tag="h6">Diretor e SEO</CardSubtitle>
      <CardText>
      <FontAwesomeIcon icon="quote-left"  size="lg" pull='left'/> Empresa contratada com ótimos serviços e flexibilidade. Seu prestador está sempre nos atendendo com comprometimento e qualidade. </CardText>
    </CardBody>
   <ul> <FontAwesomeIcon icon="star"  size="lg" color="#FFC900"/> <FontAwesomeIcon icon="star"  size="lg" color="#FFC900"/> <FontAwesomeIcon icon="star"  size="lg" color="#FFC900"/><FontAwesomeIcon icon="star"  size="lg" color="#FFC900"/> <FontAwesomeIcon icon="star"  size="lg" color="#FFC900"/></ul>
  </Card>
  <Card>
    <CardImg src="/reginaldo.jpg" top className={styles.imagemc} />
    <CardBody className={styles.titulo}>
      <CardTitle tag="h5">Reginaldo Texeira</CardTitle>
      <CardSubtitle className="mb-2 text-muted" tag="h6">Técnico de Segurança do Trabalho</CardSubtitle>
      <CardText>
      <FontAwesomeIcon icon="quote-left"  size="lg" pull='left'/> Estão disponíveis sempre que preciso. Seus serviços são bem variados. </CardText>
    </CardBody>
   <ul> <FontAwesomeIcon icon="star"  size="lg" color="#FFC900"/> <FontAwesomeIcon icon="star"  size="lg" color="#FFC900"/> <FontAwesomeIcon icon="star"  size="lg" color="#FFC900"/><FontAwesomeIcon icon="star"  size="lg" color="#FFC900"/> <FontAwesomeIcon icon="star"  size="lg" color="#FFC900"/></ul>
  </Card>
  <Card>
    <CardImg src="/marcelo.jpg" top className={styles.imagemc} />
    <CardBody className={styles.titulo}>
      <CardTitle tag="h5">Marcelo Resende</CardTitle>
      <CardSubtitle className="mb-2 text-muted" tag="h6">Técnico de Segurança do Trabalho</CardSubtitle>
      <CardText>
      <FontAwesomeIcon icon="quote-left"  size="lg" pull='left'/> Encontrei seus serviços em uma empresa que trabalhei e gostei bastante, quando preciso, não chamo outra empresa. </CardText>
    </CardBody>
   <ul> <FontAwesomeIcon icon="star"  size="lg" color="#FFC900"/> <FontAwesomeIcon icon="star"  size="lg" color="#FFC900"/> <FontAwesomeIcon icon="star"  size="lg" color="#FFC900"/><FontAwesomeIcon icon="star"  size="lg" color="#FFC900"/> <FontAwesomeIcon icon="star"  size="lg" color="#FFC900"/></ul>
  </Card>
  <Card>
    <CardImg src="/felipe.jpg" top className={styles.imagemc} />
    <CardBody className={styles.titulo}>
      <CardTitle tag="h5">Felipe Freire</CardTitle>
      <CardSubtitle className="mb-2 text-muted" tag="h6">Engenheiro Projetista</CardSubtitle>
      <CardText>
      <FontAwesomeIcon icon="quote-left"  size="lg" pull='left'/>Profissional extremamente comprometido com a qualidade, identificou a origem e solucionou o problema com meu notebook da Dell. Recomendo tanto para serviços de manutenção quanto de suporte em sistemas. </CardText>
    </CardBody>
   <ul> <FontAwesomeIcon icon="star"  size="lg" color="#FFC900"/> <FontAwesomeIcon icon="star"  size="lg" color="#FFC900"/> <FontAwesomeIcon icon="star"  size="lg" color="#FFC900"/><FontAwesomeIcon icon="star"  size="lg" color="#FFC900"/> <FontAwesomeIcon icon="star"  size="lg" color="#FFC900"/> <FontAwesomeIcon icon="star"  size="lg" color="#FFC900"/></ul>
  </Card>
</CardGroup>
</Col>
</div>
</>
);
}