import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoDataSelector, todosActions } from "../todos.slice";


export const CreateTodo = () => {

    const [name, setName] = useState("");
    const todoData = useSelector(todoDataSelector);
    const dispatch = useDispatch();

    //console.log(todoData)

    return <div>
        <h2>Inserisci nuova nota</h2>
        <label htmlFor="">Nome:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={() => {
            dispatch( todosActions.addTodo({id: (todoData.length + 1).toString(), name: name, checked: false}))
        }
        }>Conferma</button>
    </div>
}

