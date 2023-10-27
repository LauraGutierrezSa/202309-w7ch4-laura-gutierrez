import { Sloths } from "../../types";
import { useState } from "react";

const SlothForm = () => {
  const emptySlothForm: Sloths = {
    id: 0,
    name: "",
    picture: "",
    fingers: 0,
  };

  const [newSloth, setNewSloth] = useState<Sloths>(emptySlothForm);

  const getSlothsLength = async () => {
    const response = await fetch("https://sloths-api.onrender.com/sloths");
    const sloths = (await response.json()) as Sloths[];

    return sloths.length;
  };

  const addSloth = async () => {
    const currentLength = await getSlothsLength();

    setNewSloth((newSloth) => ({
      ...newSloth,
      id: currentLength + 1,
    }));

    const response = await fetch("https://sloths-api.onrender.com/sloths", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSloth),
    });

    if (response.status !== 201) {
      return;
    }
  };

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await addSloth();
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <div className="form__group">
        <label htmlFor="name" className="form__label">
          Nombre del perezoso:{" "}
        </label>
        <input
          type="text"
          id="name"
          className="form__control"
          value={newSloth.name}
          onChange={(e) => setNewSloth({ ...newSloth, name: e.target.value })}
        />
      </div>
      <div className="form__group">
        <label htmlFor="picture" className="picture">
          Imagen en url:{" "}
        </label>
        <input
          type="text"
          id="picture"
          className="form__control"
          value={newSloth.picture}
          onChange={(e) =>
            setNewSloth({ ...newSloth, picture: e.target.value })
          }
        />
      </div>
      <div className="form__group">
        <label htmlFor="fingers" className="picture">
          Número de dedos:{" "}
        </label>
        <input
          type="number"
          id="picture"
          className="form__control"
          value={newSloth.fingers.toString()}
          onChange={(e) =>
            setNewSloth({ ...newSloth, fingers: parseInt(e.target.value) })
          }
        />
      </div>
      <button className="form__create" type="submit" onClick={addSloth}>
        Crear
      </button>
    </form>
  );
};

export default SlothForm;
