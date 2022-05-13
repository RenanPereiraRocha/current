import Menu from "../components/Menu";
import Head from "next/head";
import Image from 'next/image'
import profilePic from '../public/informatica-e-tecnologia.png'
import { Container, Row, Col, Button } from 'react-bootstrap';
import React from 'react';

function Inicio() {
  return (
    <div>
      <Head><title>Renan Tecnologia e Informática - Programador e Engenheiro</title>
        <meta name="description" content="Programador e prestador de serviço de informática em São Gonçalo, Niterói, Itaboraí e Rio de Janeiro." />
        <meta name="keywords" content="serviço de informática, serviço de informática em São Gonçalo, programador, serviço de informática em Niterói, serviço de informática em Itaboraí, serviço de informática mo rio de janeiro." />
        <meta name="author" content="Renan Pereira Rocha" />
        <meta name="email" content="contato@rntecinfo.com.br" />
        <meta name="website" content="https://www.rntecinfo.com.br" />
      </Head>
      <Menu />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Container >
        <Row xs="2">
          <Col>
            <>
              <Image src={profilePic} alt="Picture of the author" />
            </>
          </Col>
          <Col >
            <h1>Olá, Seja Bem Vindo(a) Navegue e Conheça Meu Portfólio</h1>
            <p>Prestador de serviços no ramo da Informática e da tecnologia, experientes na área com mão de obra especializada e comprometida com o serviço, preparado para atender todos os tipos de clientes, oferecendo assim, uma solução inteligente, de qualidade que caiba em seu bouço.</p>
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default Inicio