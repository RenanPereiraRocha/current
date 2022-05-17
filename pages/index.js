import Menu from "../components/menu";
import Head from "next/head";
import Image from 'next/image'
import profilePic from '../public/informatica-e-tecnologia.png'
import profilePic2 from '../public/soluçõesdigitais.png'
import { Container, Row, Col, Button} from 'reactstrap';
import React from 'react';
import Footer from "../components/rodape"
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin, faBootstrap } from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css';
import styles from '../styles/Home.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Portifolio from '../components/portifolio'
import Clientes from '../components/clientes'

library.add(fas, faTwitter, faFacebook, faInstagram, faLinkedin, faBootstrap )

function Inicio() {
  return (
    <>
 
      <Head><title>Renan Tecnologia e Informática - Programador e Engenheiro</title>
        <meta name="description" content="Programador e prestador de serviço de informática em São Gonçalo, Niterói, Itaboraí e Rio de Janeiro." />
        <meta name="keywords" content="serviço de informática, serviço de informática em São Gonçalo, programador, serviço de informática em Niterói, serviço de informática em Itaboraí, serviço de informática mo rio de janeiro." />
        <meta name="author" content="Renan Pereira Rocha" />
        <meta name="email" content="contato@rntecinfo.com.br" />
        <meta name="website" content="https://www.rntecinfo.com.br" />
      </Head>
      <Menu /> 
      <main>
      <section className={styles.secao}>
      <Container >
        <Row className="justify-content-md-center">
          <Col xs lg="4">
              <Image src={profilePic} width={376} height={310} alt="Prestando serviços de informatica e tecnologia como programador em são gonçalo." />
          </Col>
          <Col xs lg="4">
            <h1>Olá, Seja Bem Vindo(a) Navegue e Conheça <span className={styles.titulocolorido}>Meu Portfólio</span></h1>
            <p className={styles.descricao}>Prestador de serviços no ramo da Informática e da tecnologia, experientes na área com mão de obra especializada e comprometida com o serviço, preparado para atender todos os tipos de clientes, oferecendo assim, uma solução inteligente, de qualidade que caiba em seu bouço.</p>
          <Button href="#servicos" className={styles.botao}> <FontAwesomeIcon icon="angles-right" size="2xs" pull="right"/> Conheça</Button>
          </Col>
        </Row>
      </Container>
      </section>
      <section className={styles.secao}>
      <Container>
  <Row className="justify-content-md-center">
    <Col md className={styles.servico}><FontAwesomeIcon icon="splotch"  size="3x" color="#000166"/>
    <h4>Criação de Marca</h4> 
    <p>Receba sua marca pensando no seu público, projetos e serviços utilizando técnicas de design de qualidade.</p>
    </Col>
    <Col md className={styles.servico}><FontAwesomeIcon icon="vector-square"  size="3x" color="#000166"/>
    <h4>Marketing Digital e SEO</h4> 
    <p>Trabalho árduo para divulgar e planejar cada palavra chave (SEO) para sua marca com às melhores plataformas de marketing da atualidade como: google ads, bing ads, redes sociais (Facebook, instagram, twitter e linkedin), listas telefônicas, panfletagens, e-mail’s e o seu próprio site para que ele alavanque nos mecanismos de pesquisa e faturamento aumente no mínimo 20% em dias.</p>
    </Col>
    <Col md className={styles.servico}><FontAwesomeIcon icon="laptop-file"  size="3x" color="#000166"/>
    <h4>Informática</h4> 
    <p>Serviço em toda área: formatação, manutenção, instalação de hardware e softwares, recuperação de dados, redes, projetos de instalações, consultoria para redução de custo entre outros serviços na informática.</p>
    </Col>
  </Row>
  <Row>
    <Col md className={styles.servico}><FontAwesomeIcon icon="shop"  size="3x" color="#000166"/>
    <h4>Loja Online (Marketplace ou E-Commerce)</h4> 
    <p>Receba sua marca pensando no seu público, projetos e serviços utilizando técnicas de design de qualidade.</p>
    </Col>
    <Col md className={styles.servico}><FontAwesomeIcon icon="layer-group"  size="3x" color="#000166"/>
    <h4>Desenvolvimento de Aplicativos e Programas</h4> 
    <p>Construção de aplicativos para diferentes fins, usando tecnologias que permitem mais segurança e confiabilidade.</p>
    </Col>
    <Col md className={styles.servico}><FontAwesomeIcon icon="mobile-screen"  size="3x" color="#000166"/>
    <h4>Aplicativos Mobile</h4> 
    <p>Siga a tendência global e crie seu aplicativo móvel revolucionário construído com as melhores tecnologias.</p>
    </Col>
  </Row>
  <Row className="justify-content-md-center">
    <Col md="4" className={styles.servico}><FontAwesomeIcon icon="video"  size="3x" color="#000166"/>
    <h4>Monitoramento e Segurança</h4> 
    <p>Deixe sua empresa ou residência mais segura com câmeras de segurança e softwares para monitoramento dos dispositivos (computadores, notebook’s e etc…), possuindo recursos os melhores recursos de informática para todas as situações!</p>
    </Col>
  </Row>
</Container>
</section>
<section>
<Container >
        <Row className="justify-content-md-center">
          <Col md="5">
              <Image src={profilePic2} width={465} height={513} title="Produções e Desenvolvimentos inteligentes" alt="Desenvolvendo soluções digitais e toda área da informática de prestações em redes, segurança e computadores" />
          </Col>
          <Col md="5">
            <h2>Produções e Desenvolvimentos inteligentes</h2>
            <p className={styles.descricao}>Há mais de 4 anos desenvolvendo soluções digitais e 6 anos fornecendo prestações em redes, segurança e computadores para empresas e negócios que buscam ganhar maior visibilidade tanto na internet quanto na qualidade para com seus clientes. <br/>Passei por diversas funções como Técnico de informática auxiliar e até montador de equipamentos.
							<br/>Trabalho hoje com toda área da informática e da tecnologia (com programação / programador).</p>
          <Button href="#servicos" className={styles.botao}>Conheça <FontAwesomeIcon icon="angles-right" size="2xs"/></Button>
          </Col>
        </Row>
      </Container>
</section>
<section className={styles.banne} >
<Container  >
  <Row className="justify-content-md-center" >
    <Col className={styles.btitulo} ><h2>Pare de investir no que não esta te dando retorno.</h2>
    <p>Comece a trabalhar comigo, posso fornecer tudo o que você precisa para gerar conhecimento, direcionar tráfego e conectar-se.</p>
    </Col>
  </Row>
</Container>
</section>
<section className={styles.secao} > 
<Container  >
  <Row className="justify-content-md-center" >
    <Col className={styles.titulo} ><h2>Website Profissional</h2>
    <p>Construção do seu site profissional com funcionalidade responsiva e otimizada para os motores de busca mais populares como <b>google e bing</b> </p>
    </Col>
  </Row>
</Container>
<Container >
<Row className="justify-content-md-center" >
<Col className={styles.uso} xs="8" sm="8" md="6" lg="4" xl="4"><FontAwesomeIcon icon="display" size="lg" pull="left" className={styles.icone}/> <h6 className={styles.titulo}>Totalmente Responsivo</h6>
    </Col>
    <Col className={styles.uso} xs="8" md="6" lg="4" xl="4" ><FontAwesomeIcon icon="heart" size="lg" pull="left" className={styles.icone}/> <h6 className={styles.titulo}>Compartibilidade Total</h6>
    </Col>
    <Col className={styles.uso} xs="8" sm="8" md="6" lg="4" xl="4"><FontAwesomeIcon icon="eye" size="lg" pull="left" className={styles.icone}/> <h6 className={styles.titulo}>Pensado em Acessibilidade</h6>
    </Col>
    <Col className={styles.uso} xs="8" md="6" lg="4" xl="4" ><FontAwesomeIcon icon="fa-brands fa-bootstrap" size="lg" pull="left" className={styles.icone}/> <h6 className={styles.titulo}>Baseado no Bootstrap 5</h6>
    </Col>
    <Col className={styles.uso} xs="8" md="6" lg="4" xl="4" ><FontAwesomeIcon icon="feather" size="lg" pull="left" className={styles.icone}/> <h6 className={styles.titulo}>Icones Variados</h6>
    </Col>
    <Col className={styles.uso} xs="8" md="6" lg="4" xl="4" ><FontAwesomeIcon icon="code" size="lg" pull="left" className={styles.icone}/> <h6 className={styles.titulo}>Construído com SASS</h6>
    </Col>
    <Col className={styles.uso} xs="8" md="6" lg="4" xl="4" ><FontAwesomeIcon icon="user-check" size="lg" pull="left" className={styles.icone}/> <h6 className={styles.titulo}>Código Válido W3c</h6>
    </Col>
    <Col className={styles.uso} xs="8" md="6" lg="4" xl="4" ><FontAwesomeIcon icon="chart-line" size="lg" pull="left" className={styles.icone}/> <h6 className={styles.titulo}>Relatório Simplificado</h6>
    </Col>
    <Col className={styles.uso} xs="8" md="6" lg="4" xl="4"><FontAwesomeIcon icon="gear" size="lg" pull="left" className={styles.icone}/> <h6 className={styles.titulo}>Personalizado à sua Preferência</h6>
    </Col>
  </Row>
</Container>
</section>
   <Container>
   <Row>
    <Col sm={{
        offset: 5,
        size: 'auto'
      }} ><Button href="tel:21996644695" className={styles.botao}> Peça já o seu </Button>
</Col>
  </Row>
  </Container>   
  <section className={styles.secao}>
  <Container  >
  <Row className="justify-content-md-center" >
    <Col className={styles.titulo} ><h2>Portifólio</h2>
    <p>Contribuindo com o desenvolvimento das melhores ideas do mercado.  <b>Conheça alguns de nossos projetos</b> </p>
    </Col>
  </Row>
</Container>
<Portifolio/>
  </section>
  <section className={styles.secao}>
  <Container >
  <Row className="justify-content-md-center" >
    <Col className={styles.titulo} ><h2>Depoimentos de Clientes</h2>
    <p> Os <b>Clientes</b> estão satisfeitos com o trabalho que é realizado.A maior gratificação é receber o retorno do que foi construído. Isso me motiva a melhorar ainda mais. </p>
    </Col>
  </Row>
</Container>
    <Clientes/>
  </section>
      <Footer/>
</main>
</>
  );
}

export default Inicio