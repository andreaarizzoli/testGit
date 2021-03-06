import React,{FC} from "react"
import { Todo } from "../todos.slice"

export type TodoItemProps = {
    todo: Todo,
    onTodoChecked: (id: string, value: boolean) => void,
    onTodoDelete?: (id: string) => void
}

export const TodoItem: FC<TodoItemProps>  = ( { todo: { name, checked, id}, onTodoChecked, onTodoDelete}) => {

    return <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
        <div>{name}</div>
        <div>
            <input type="checkbox" checked={checked} onChange={() => onTodoChecked(id, !checked)} />
        </div>
        <div>
            <button onClick={() => onTodoDelete && onTodoDelete(id)}>Elimina</button>
        </div>
    </div>
}