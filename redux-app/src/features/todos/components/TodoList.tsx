import React from "react";
import { useDispatch, useSelector } from "react-redux";
import todosActions, { completedTodoSelector, noCompletedTodoSelector, Todo, todoDataSelector } from "../todos.slice";
import { TodoItem } from "./TodoItem";

const TodoList = () => {

    const todoData = useSelector(todoDataSelector);
    const completed = useSelector(completedTodoSelector);
    const noCompleted = useSelector(noCompletedTodoSelector);

    const dispatch = useDispatch();

    const handleChecked = (id: string, value: boolean) => {
        dispatch( todosActions.actions.checkTodo({id, value})); //l'azione la crea in automatico grazie a todosAction
    }

    const handleDelete = (id: string) => {
        dispatch( todosActions.actions.removeTodo(id)); //l'azione la crea in automatico grazie a todosAction
    }

    return <div>
        <h2>Lista dei Todo</h2>
        {
            todoData.length > 0 ? todoData.map(
                (todo: Todo) => {
                    return <TodoItem key={todo.id} onTodoDelete={handleDelete} onTodoChecked={handleChecked} todo={todo}></TodoItem>
                }
            ) : <p>Non ci sono Todo!</p>
        } 
        <div>
            <p>Todo da fare: {noCompleted}</p>
        </div>
        <div>
        <p>Todo completati: {completed}</p>
        </div>
    </div>
}

export default TodoList;