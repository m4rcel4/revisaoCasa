import Header from '../Components/Header'
import Container from '../Components/Container'
import Footer from '../Components/Footer'
import styles from './index.module.css'


function Home () {

    return (
    <container>

        <header className={styles.topo}> 
        <Header/>
        </header>

         <container className={styles.meio}>
        <Container/>
        </container>


        <footer className={styles.baixo}>
        <Footer/>
        </footer>

    </container>
    )
}
export default Home