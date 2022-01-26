import { createAction } from "@reduxjs/toolkit";
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import todoSlice, { todoDataSelector, todosActions } from "../todos.slice";
import { Formik, useFormik } from "formik";
import * as Yup from 'yup';



export const MicheleTodo = () => {
    const dispatch = useDispatch();

    const todoData = useSelector(todoDataSelector);

    const SignupSchema = Yup.object().shape({
        owner: Yup.string()
          .min(3, ' Owner - Too Short!!! (min 3)')
          .required('Owner Required'),
        data: Yup.date()
          .min(new Date, 'Date Errors!')
          .required('Data Required')
      });


    return (
        <div>
            <Formik
                initialValues={{
                    id: '',
                    name: '',
                    owner: '',
                    data: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                    dispatch( todosActions.addTodo({id: (todoData.length + 1).toString(), name: values.name, checked: false, owner: values.owner, data: new Date(values.data)}))
                    console.log(values)
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Insert ToDo"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        <input
                            type="text"
                            name="owner"
                            placeholder="Owner"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.owner}
                        />
                        <input
                            type="date"
                            name="data"
                            placeholder="Insert Data"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.data}
                        />
                        <br />
                        <span style={{'color':'red'}}>{errors.owner}</span> <br />
                        <span style={{'color':'red'}}>{errors.data}</span>
                        <br />
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
            
        </div>
    )
};