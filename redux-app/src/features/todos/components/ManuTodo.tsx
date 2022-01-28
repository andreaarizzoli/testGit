import React from "react";
import { useTodoManuState } from "../useTodoManuState";

export const ManuTodo = () => {
  const { todoData, formik } = useTodoManuState();

  return (
    <>
      <h2>Manu Insert Form</h2>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          justifyItems: "center",
        }}
      >
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
  );
};
