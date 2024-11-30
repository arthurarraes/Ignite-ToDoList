import styles from "./Tarefas.module.css"
import { Tarefa } from "./Tarefa"
import { TarefaSemNada } from "./TarefaSemNada"
import { useState } from "react"
import { Form } from "./Form"

export function Tarefas(){
    const [tarefas, setTarefas]= useState([
        {id:1, nome:"Limpar a casa", isComplete: false},
    ])
    // const [tarefasConcluidas, setTarefasConcluidas]  = useState(1)

    function handleComplete(id: number) {
        const updatedTarefas = tarefas.map(tarefa => {
            if (tarefa.id === id) {
                return { ...tarefa, isComplete: !tarefa.isComplete }
            }
            return tarefa;
        });
        setTarefas(updatedTarefas);
    }
    function addTarefa(nome: string) {
        const novaTarefa = { id: tarefas.length + 1, nome, isComplete: false };
        setTarefas([...tarefas, novaTarefa]);
    }
    function handleDelete(id:number){
        const updatedTarefas = tarefas.filter(i => i.id !== id)
        setTarefas(updatedTarefas)
    }
    return (
        <div className={styles.container}>
            <Form addTarefa={addTarefa}/>
            <div className={styles.acompanhamento}>
                <div>
                    <h1 className={styles.criadas}>Tarefas Criadas <span>{tarefas.length}</span></h1>
                </div>
                <div>
                    <h1 className={styles.concluidas}>Concluídas <span>{tarefas.filter(i => i.isComplete == true).length}</span></h1>
                </div>
            </div>
                {tarefas.length == 0 ? 
                (<TarefaSemNada/>) : 
                (tarefas.map(tarefa => {
                    return <Tarefa key={tarefa.id} id={tarefa.id} nome={tarefa.nome} isComplete={tarefa.isComplete} handleComplete={handleComplete} handleDelete={handleDelete}/>
                }))}
        </div>
    )
}