import React from "react";
import { useState } from "react";
import NewEmail from "./NewEmail";
import Emails from "./Emails";
import { Email } from "./Email.model";

const MailingList: React.FC = () => {
  const [emails, setEmails] = useState<Email[]>([]);

  const addEmailHandler = (email: string) => {
    setEmails((prevEmails) => [
      ...prevEmails,
      { id: Math.random().toString(), email: email },
    ]);
  };

  const deleteEmailHandler = (id: string) => {
    setEmails((prevEmails) => {
      return prevEmails.filter((email) => email.id !== id);
    });
  };

  return (
    <>
      <h2>Mailing List</h2>
      <NewEmail onAddEmail={addEmailHandler} />
      {/*items and onDeleteEmail will be a properties of props object:*/}
      <Emails items={emails} onDeleteEmail={deleteEmailHandler} />{" "}
    </>
  );
};

export default MailingList;
