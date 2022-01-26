import { useFormik } from 'formik';
import * as Yup from 'yup';

import { createAction } from "@reduxjs/toolkit";
import React, { useState } from "react"

import { useDispatch, useSelector } from "react-redux";
import todoSlice, { todoDataSelector, todosActions } from "../todos.slice";

export const CreateTodoCecilia = () => {

    const todoData = useSelector(todoDataSelector);
    const dispatch = useDispatch();
    //console.log(todoData.length)

    const formik = useFormik({
        initialValues: {
            id: '',
            name: '',
            checked: false,
            owner: '',
            data: '',
        },
        validationSchema: Yup.object({
            owner: Yup.string()
                .min(3, 'Name must be 3 characters or more!')
                .required('Required'),
            data: Yup.date().min(new Date(), 'Please choose a date that is not in the past').required('Required'),
        }),
        onSubmit: values => {
            dispatch(todosActions.addTodo({id: (todoData.length + 1).toString(), name: values.name, checked: false, owner: values.owner, data: new Date()}))
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div style={{ marginTop: "2em" }}>
            <h2>Inserisci nuova nota</h2>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="name">Nota: </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        onBlur={formik.handleBlur}
                    />
                </div>
                <div>
                    <label htmlFor="owner">Owner: </label>
                    <input
                        id="owner"
                        name="owner"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.owner}
                        onBlur={formik.handleBlur}
                    /> {formik.touched.owner && formik.errors.owner ? (
                        <div>{formik.errors.owner}</div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="data">Data: </label>
                    <input
                        id="data"
                        name="data"
                        type="date"
                        onChange={formik.handleChange}
                        value={formik.values.data}
                        onBlur={formik.handleBlur}
                    /> {formik.touched.data && formik.errors.data ? (
                        <div>{formik.errors.data}</div>
                    ) : null}
                </div>

                <div style={{ marginTop: "2em" }}>
                    <button type="submit">Aggiungi</button>
                </div>

            </form>
        </div>
    );
};