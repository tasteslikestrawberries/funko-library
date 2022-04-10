import React from "react";
import { Table } from "react-bootstrap";
//icons
import { Icon } from "@iconify/react";

interface IEmailProps {
  items: { id: string; email: string }[];
  onDeleteEmail: (id: string) => void;
}

const Emails: React.FC<IEmailProps> = ({ items, onDeleteEmail }) => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Emails</th>
          </tr>
        </thead>
        <tbody>
          {items.map((email) => (
            <tr key={email.id}>
              <td style={{ display: "flex", justifyContent: "space-between" }}>
                <input
                  style={{ backgroundColor: "transparent", border: "none" }}
                  type="email"
                  placeholder={email.email}
                ></input>
                {/*<Icon icon="emojione-v1:white-heavy-check-mark" />
                <Icon icon="bi:x-square-fill" color="#f24e1e" />*/}
                <button
                  className="btn btn-primary"
                  onClick={onDeleteEmail.bind(null, email.id)}
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

export default Emails;
