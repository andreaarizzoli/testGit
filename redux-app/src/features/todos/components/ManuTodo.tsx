import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { todoDataSelector, todosActions } from "../todos.slice";

export const ManuTodo = () => {
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
            owner: Yup.string()
                .min(3, 'Deve essere più di 3 caratteri')
                .required('Required'),
            date: Yup.date()
            .min(new Date(), 'Non puoi inserire un todo nel passato!')
            .required('Required'),
            // date: Yup.string().matches(/^\d{2}[-]\d{2}[-]\d{4}$/, 'La data deve essere in formato GG-MM-YYYY')
        }),
        onSubmit: values => {
            dispatch(todosActions.addTodo({ id: (todoData.length + 1).toString(), name: values.name, checked: false, owner: values.owner, data: new Date(values.date) }))
        },
    });
    return (
        <>
            <h2>Manu Insert Form</h2>
            <form onSubmit={formik.handleSubmit} style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", justifyItems: "center" }}>
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
                {/* <div>
                    <label htmlFor="date">Data inserimento</label>
                    <input
                        id="date"
                        name="date"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.date}
                    />
                    {formik.touched.date && formik.errors.date ? (
                        <div>{formik.errors.date}</div>
                    ) : null}
                </div> */}
                <button type="submit">Invia</button>
            </form>
        </>
    )
}

