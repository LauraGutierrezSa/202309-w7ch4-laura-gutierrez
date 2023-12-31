import SlothForm from "../slothForm/slothForm";

const App = (): React.ReactElement => {
  return (
    <div className="main-container">
      <header className="main-header">
        <h1 className="main-title"> 🦥 Creador de perezosos 🦥 </h1>
      </header>
      <SlothForm />
    </div>
  );
};

export default App;
