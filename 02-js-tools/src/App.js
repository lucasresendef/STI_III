import { render } from "react-dom";
import SearchParams from "./SearchParams";
/*const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Mel",
      animal: "Dog",
      breed: "Mix",
    }),
    React.createElement(Pet, {
      name: "Pimenta",
      animal: "Bird",
      breed: "Papagaio",
    }),
    React.createElement(Pet, { name: "Pantera", animal: "Cat", breed: "Mix" }),
  ]);
};*/
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
