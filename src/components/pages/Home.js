import styles from './Home.module.css';

import savings from '../../img/savings.svg';
import { Link } from 'react-router-dom';
/* import LinkButton from '../layout/LinkButton'; */
function Home () {
    return(
        <section className={styles.home_container}>
            <h1>Bem- vindo ao <span>Cost</span></h1>
            <p>Comece a gerenciar os seus projetos</p>
        {/*     <LinkButton to="/newproject" text="Criar Projeto" /> */}
        <Link className={styles.btn} to="/newproject">
        Criar Projetos
        </Link>
            <img src={savings} alt="Costs" />

        </section>
    )
}
export default Home;