import React from "react";
import { Table } from "react-bootstrap";

interface ITodoProps {
  items: { id: string; name: string }[];
  onDeleteTodo: (id: string) => void;
}

const Todos: React.FC<ITodoProps> = ({ items, onDeleteTodo }) => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Todo</th>
          </tr>
        </thead>
        <tbody>
          {items.map((todo) => (
            <tr key={todo.id}>
              <td style={{ display: "flex", justifyContent: "space-between" }}>
                {todo.name}{" "}
                <button
                  className="btn btn-primary"
                  onClick={onDeleteTodo.bind(null, todo.id)}
                >
                  DELETE
                </button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Todos;
