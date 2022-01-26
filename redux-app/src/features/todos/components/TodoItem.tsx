import React, { FC } from "react"
import { Todo } from "../todos.slice"

export type TodoItemProps = {
    todo: Todo,
    onTodoChecked: (id: string, value: boolean) => void,
    onTodoDelete?: (id: string) => void
}

<<<<<<< HEAD
export const TodoItem: FC<TodoItemProps> = ({ todo: { name, checked, id, owner, data }, onTodoChecked, onTodoDelete }) => {


    return <div>
            <div>
                <ul style={{ display: "flex", justifyContent: "space-around"}}>
                    <li>
                        {name}
                    </li>
                    <li>
                        {owner}
                    </li>
                    <li>
                        {(data && data.getDate() + '-' + (data.getMonth() + 1) + '-' + data.getFullYear())}
                    </li>
                    <li style={{listStyleType: 'none'}}>
                        <input type="checkbox" checked={checked} onChange={() => onTodoChecked(id, !checked)}/>
                    </li>
                    <li style={{listStyleType: 'none'}}>
                        <button onClick={() => onTodoDelete && onTodoDelete(id)}>Elimina</button>
                    </li>
                </ul>
            </div>

=======
export const TodoItem: FC<TodoItemProps>  = ( { todo: { name, checked, id, owner, data}, onTodoChecked, onTodoDelete}) => {
    return <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
        <div>{name}</div>
        <div>{owner}</div>
        <div>new Date({data?.getDate()}/{data?.getMonth()}/{data?.getFullYear()})</div>
        <div>
            <input type="checkbox" checked={checked} onChange={() => onTodoChecked(id, !checked)} />
        </div>
        <div>
            <button onClick={() => onTodoDelete && onTodoDelete(id)}>Elimina</button>
        </div>
>>>>>>> features/44444/cecilia
    </div>
}

// <div>{JSON.stringify(data)}</div>
// <div>`{data?.getDate()}/{data?.getMonth()}/{data?.getFullYear()}`</div>