import styles from './App.module.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Tarefas } from './components/Tarefas'

function App() {
 return(
  <div className={styles.container}>
    <Header/>
    <Tarefas/>
    <Footer/>
  </div>
 )
  
}

export default App
