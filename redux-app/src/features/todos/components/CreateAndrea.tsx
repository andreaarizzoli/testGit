import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Todo, todoDataSelector, todosActions } from "../todos.slice";
import { Field, Form, Formik, useFormik } from 'formik';

import * as Yup from 'yup';


export const CreateAndrea = () => {

    const dispatch = useDispatch();
    const todoData = useSelector(todoDataSelector);
    const initialValues = { name: '', owner: "", data: "" };

    const formik = useFormik({
        initialValues: initialValues,

        validationSchema: Yup.object({
            name: Yup
                .string()
                .required('Campo obbligatorio'),
            owner: Yup
                .string()
                .required('Campo obbligatorio')
                .min(3, 'Deve contenere almeno 3 caratteri'),
            data: Yup
                .date()
                .required('Campo obbligatorio')
        }),

        onSubmit: values => {
            //alert(JSON.stringify(values, null, 2));
            dispatch( todosActions.addTodo({id: (todoData.length + 1).toString(), name: values.name, checked: false, owner: values.owner, data: new Date(values.data) }))
        },
    })

    return <div>
        <h2>Inserisci nuova nota</h2>

        <form onSubmit={formik.handleSubmit}>
            <table>
                <tbody>
                    <tr>
                        <td><label htmlFor="name">Nome nota:</label></td>
                        <td>
                            <input id="name" name="name" type="text" onChange={formik.handleChange} value={formik.values.name} />
                        </td>
                        <td>
                            {formik.touched.name && formik.errors.name ? (
                                <div style={{color: "red"}}>{formik.errors.name}</div>
                            ): null}
                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="owner">Autore:</label></td>
                        <td>
                            <input id="owner" name="owner" type="text" onChange={formik.handleChange} value={formik.values.owner} />
                        </td>
                        <td>
                            {formik.touched.owner && formik.errors.owner ? (
                                <div style={{color: "red"}}>{formik.errors.owner}</div>
                            ): null}
                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="data">Data:</label></td>
                        <td>
                            <input id="data" name="data" type="date" onChange={formik.handleChange} value={formik.values.data } />
                        </td>
                        <td>
                            {formik.touched.data && formik.errors.data ? (
                                <div style={{color: "red"}}>{formik.errors.data}</div>
                            ): null}
                        </td>
                    </tr>
                </tbody>
            </table>
            <button type="submit">Inserisci</button>  
        </form>     
    </div>
}