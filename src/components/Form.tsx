import styles from './Form.module.css'
import plus from '../assets/plus.svg'
import { useState } from 'react'
export function Form({addTarefa}: {addTarefa: (tarefa: string) => void}) {
    const [tarefa, setTarefa] = useState('')
    function handleAddTarefa(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        addTarefa(tarefa)
        setTarefa('')
    }
    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleAddTarefa}>
                <input type="text" name="tarefa" onChange={(e)=>setTarefa(e.target.value)} value={tarefa} placeholder='Adicione uma nova tarefa' required/>
                <button type='submit' className={styles.button}>
                    Criar
                    <img src={plus} alt="" />
                </button>
            </form>
        </div>
    )
}