import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { todoDataSelector, todosActions } from "./todos.slice";
import * as Yup from 'yup';

export const useTodoManuState = () => {
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

    return {todoData,formik}
}