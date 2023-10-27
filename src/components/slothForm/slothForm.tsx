const SlothForm = (): React.ReactElement => {
  return (
    <div className="form">
      <div className="form__group">
        <label htmlFor="name" className="form__label">
          Nombre del perezoso:{" "}
        </label>
        <input type="text" id="name" className="form__control" />
      </div>
      <div className="form__group">
        <label htmlFor="picture" className="picture">
          Imagen en url:{" "}
        </label>
        <input type="text" id="picture" className="form__control" />
      </div>
      <div className="form__group">
        <label htmlFor="fingers" className="picture">
          Número de dedos:{" "}
        </label>
        <input type="text" id="picture" className="form__control" />
      </div>
      <button className="form__create" type="submit">
        create
      </button>
    </div>
  );
};

export default SlothForm;
