import { createAction } from "@reduxjs/toolkit";
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import todoSlice, { todoDataSelector, todosActions } from "../todos.slice";
import { Formik, useFormik } from "formik";
import * as Yup from 'yup';



export const MicheleTodo = () => {
    const dispatch = useDispatch();

    const [error ,setError] :any = useState('');
    const todoData = useSelector(todoDataSelector);

    const SignupSchema = Yup.object().shape({
        owner: Yup.string()
          .min(3, 'Too Short!!! (min 3)')
          .required('Required'),
      });

      var currentTime: any = new Date;
    var dd = String(currentTime.getDate()).padStart(2, '0');
    var mm = String(currentTime.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = currentTime.getFullYear();

    let [nFact, setNFact] = useState(1)

    currentTime = dd + '-' + mm + '-' + yyyy;

    return (
        <div>
            <Formik
                initialValues={{
                    id: '',
                    name: '',
                    owner: '',
                    data: currentTime,
                }}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
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
                        <button type="submit" onClick={()=>{
                            setError(errors.owner)
                            dispatch( todosActions.addTodo({id: (todoData.length + 1).toString(), name: values.name, checked: false, owner: values.owner, data: values.data}))
                            }}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
            <span style={{'color':'red'}}>{error}</span>
        </div>
    )
};