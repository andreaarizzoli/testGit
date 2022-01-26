import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { todoDataSelector, todosActions } from "../todos.slice";

export const MaurizioCreate = () => {
    const todoData = useSelector(todoDataSelector);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            id: '',
            name: '',
            owner: '',
            date: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
            .min(3, 'il testo deve essere più lungo')
            .required('Required'),

            owner: Yup.string()
                .min(3, 'il testo deve essere più lungo')
                .required('Required'),
            date: Yup.date()
            .min(new Date(), 'Non puoi inserire un giorno già passato')
            .required('Required'),
            
        }),
        onSubmit: values => {
            dispatch(todosActions.addTodo({ id: (todoData.length + 1).toString(), name: values.name, checked: false, owner: values.owner, data: new Date(values.date) }))
        },
    });
    return (
            <form onSubmit={formik.handleSubmit} style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", justifyItems: "center" }}>
                <h1>MODIFICA PER ALESSANDRO</h1>
                <div>
                    <label htmlFor="name">Testo</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div>{formik.errors.name}</div>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="owner">Owner</label>
                    <input
                        id="owner"
                        name="owner"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.owner}
                    />
                    {formik.touched.owner && formik.errors.owner ? (
                        <div>{formik.errors.owner}</div>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="date">Data inserimento</label>
                    <input
                        id="date"
                        name="date"
                        type="date"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.date}
                    />
                    {formik.touched.date && formik.errors.date ? (
                        <div>{formik.errors.date}</div>
                    ) : null}
                </div>
                
                <button type="submit">submit</button>
            </form>
    )
}

