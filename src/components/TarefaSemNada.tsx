import styles from './TarefaSemNada.module.css'
import clipboard from '../assets/clipboard.svg'

export function TarefaSemNada(){
    return (
        <div className={`${styles.tarefas} ${styles.linha}`}>
                <img className={styles.clipboard} src={clipboard} alt="" />
                <h1>Você ainda não tem tarefas cadastradas</h1>
                <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
    )
}