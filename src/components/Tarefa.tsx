import styles from './Tarefa.module.css'
import check from '../assets/check.svg'
import checkComplete from '../assets/checkComplete.svg'
import trash from '../assets/trash.svg'

interface TarefaProps{
    id: number,
    nome: string,
    isComplete: boolean,
    handleComplete: (id:number) => void,
    handleDelete: (id:number) => void
}

export function Tarefa({id,nome, isComplete, handleComplete, handleDelete}:TarefaProps){
    
    return (
        <div className={styles.container}>
            <button className={styles.check} onClick={()=> handleComplete(id)}>
                {isComplete ? <img src={checkComplete} alt="check" /> : <img src={check} alt="" />}
                
            </button>
            <h1 className={isComplete? styles.completed: styles.pending}>{nome}</h1>
            <button className={styles.trash} onClick={()=> handleDelete(id)}>
                <img src={trash} alt="" />
            </button>
        </div>
    )
}