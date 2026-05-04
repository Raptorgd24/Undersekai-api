import { Task } from "@/entities/task"


type Props = {
    task: Task
    setComplete: (id: string) => void
    deleteTask: (id: string) => void
}

export default function TaskCard ({ task, setComplete, deleteTask }: Props) {
    return (
        <div className="w-full bg-white text-black border border-gray-200 rounded-lg flex flex-col gap-4">
            <p className="text-xl">{task.nom}</p>
            <p>{ task.isComplete ? "Completada": "No completada" }</p>
            { !task.isComplete && (<button type="button" onClick={() => setComplete(task.id)} className="bg-amber-300 border-0 hover:bg-amber-500 rounded-lg">Completar</button>)}
            <button type="button" onClick={() => deleteTask(task.id)} className="bg-red-300 border-0 hover:bg-red-500 rounded-lg">Eliminar</button>
        </div>
    )
}