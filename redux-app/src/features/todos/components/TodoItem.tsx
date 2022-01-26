import React, { FC } from "react"
import { date } from "yup/lib/locale"
import { Todo } from "../todos.slice"

export type TodoItemProps = {
    todo: Todo,
    onTodoChecked: (id: string, value: boolean) => void,
    onTodoDelete?: (id: string) => void
}

export const TodoItem: FC<TodoItemProps> = ({ todo: { name, checked, id, owner, data }, onTodoChecked, onTodoDelete }) => {

    var currentTime: any = new Date;
    var dd = String(currentTime.getDate()).padStart(2, '0');
    var mm = String(currentTime.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = currentTime.getFullYear();

    currentTime = dd + '-' + mm + '-' + yyyy;
    console.log(currentTime)
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
                        {currentTime}
                    </li>
                    <li style={{listStyleType: 'none'}}>
                        <input type="checkbox" checked={checked} onChange={() => onTodoChecked(id, !checked)}/>
                    </li>
                    <li style={{listStyleType: 'none'}}>
                        <button onClick={() => onTodoDelete && onTodoDelete(id)}>Elimina</button>
                    </li>
                </ul>
            </div>
            
    </div>
}