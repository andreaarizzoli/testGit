import React, { FC } from "react";
import { Todo } from "../todos.slice";

export type TodoItemProps = {
  todo: Todo;
  onTodoChecked: (id: string, value: boolean) => void;
  onTodoDelete?: (id: string) => void;
};

export const TodoItem: FC<TodoItemProps> = ({
  todo: { name, checked, id, owner, data },
  onTodoChecked,
  onTodoDelete,
}) => {
  return (
    <div>
      <div>
        <ul style={{ display: "flex", justifyContent: "space-around" }}>
          <li>{name}</li>
          <li>{owner}</li>
          <li>
            {data &&
              data.getDate() +
                "-" +
                (data.getMonth() + 1) +
                "-" +
                data.getFullYear()}
          </li>
          <li style={{ listStyleType: "none" }}>
            <input
              type="checkbox"
              checked={checked}
              onChange={() => onTodoChecked(id, !checked)}
            />
          </li>
          <li style={{ listStyleType: "none" }}>
            <button onClick={() => onTodoDelete && onTodoDelete(id)}>
              Elimina
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

// <div>{JSON.stringify(data)}</div>
// <div>`{data?.getDate()}/{data?.getMonth()}/{data?.getFullYear()}`</div>
