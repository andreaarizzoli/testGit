import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"
import { RootState } from "../../app/store"

export type Todo = {
    id: string,
    name: string,
    checked: boolean,
    owner?: string,
    data?: Date
}

type TodoSliceType = {
    data: Todo[],
    loading: boolean, //nel caso in qui facciamo chiamate al server le gestiamo con loading ed error
    error: string
}

const initialState: TodoSliceType = {
    data: [{
        id: "1",
        name:"Comprare latte",
        checked: false,
        owner: 'Andrea',
        data: new Date('2222/01/24')
    }], 
    loading: false,
    error: ""
}

const todoSlice = createSlice({  //genera automaticamente creatori di azioni e tipi di azione che corrispondono ai riduttori e allo stato.
    initialState,
    name: "@todos",
    //Fino a qui abbiamo inserito i dati, ora dobbiamo inserire le azioni
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => { //PayloadAction è per dire che è generico (come any)
            state.data.push(action.payload); //prima non si moteva modificare lo state, con toolkit si
        },
        checkTodo: (state, action: PayloadAction<{ id: string, value: boolean}>) => {
            const todo = state.data.find( (e) => e.id === action.payload.id); 
            if (todo) {
                todo.checked = action.payload.value;
            }
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            //si utilizza filter per cercare chi eliminare
            // ({id, name}) grazie alla destrutturazione possiamo destrutturizzare un oggetto e prendere solo quello che ci interessa
            state.data = state.data.filter( (e) => e.id !== action.payload)
        },
        removeTodo2: (state, {payload}: PayloadAction<string> ) => {
            state.data = state.data.filter(({ id }) => id !== payload)
        },
        //removeTodo3: (state, {payload: { id, value}}: PayloadAction<string> ) => {
        //    state.data = state.data.filter(({ id }) => id !== payload)
        //}
        checkTodo2: (state, { payload: { id, value }}: PayloadAction<{ id: string, value: boolean}>) => {
            const todo = state.data.find( (e) => e.id === id);
            if (todo) {
                todo.checked = value;
            }
        },
    } 
})

const todoStateSelector = (state: RootState) => state.todos; //recupera una porzione dello state
export const todoDataSelector = createSelector(todoStateSelector, todoState => todoState.data);
//creiamo più selettori in base alle nostre necessità

export const completedTodoSelector = createSelector(todoStateSelector, todoState => { 
    const count = todoState.data.filter( (todo) => todo.checked ); //non serve specificare che filtriamo solo i true
    return count.length; 
})

export const noCompletedTodoSelector = createSelector(todoStateSelector, todoState => { 
    const count = todoState.data.filter( (todo) => !todo.checked ); //non serve specificare che filtriamo solo i true
    return count.length; 
})

export const todosActions = todoSlice.actions;

export default todoSlice; 
