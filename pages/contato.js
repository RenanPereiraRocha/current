import Menu from "../components/Menu";
import Footer from "../components/rodape"
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { main } from "@popperjs/core";
import styles from '../styles/Home.module.scss';

export default function Contato(){
    return (
        <main>
            <section className={styles.secao}>
                <Menu />
            </section>
            <section className={styles.secao}>
                <Footer/>
            </section>
        </main>
    );
  };