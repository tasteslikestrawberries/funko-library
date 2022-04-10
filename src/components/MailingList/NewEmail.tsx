import { useRef } from "react";

interface INewEmail {
  onAddEmail: (email: string) => void;
}

const NewEmail: React.FC<INewEmail> = ({ onAddEmail }) => {
  const userInput = useRef<HTMLInputElement>(null);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = userInput.current!.value;
    onAddEmail(enteredText);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Mailing list:</label>
        <input
          className="form-control"
          type="email"
          ref={userInput}
        ></input>
      </form>
    </>
  );
};

export default NewEmail;
