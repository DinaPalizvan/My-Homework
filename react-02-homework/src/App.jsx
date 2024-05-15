import Card from "./components/Card";
import Alert from "./components/Alert";
import Card2 from "./components/BobDylan";
import ShowPlanets from "./components/ShowPlanets";
import RenderList from "./components/RenderList";
import CustomerInformation from "./components/CustomerInformation";
import Pokedex from "./components/Pokedex";

function App() {
  const data = {
    image: "../../.learn/assets/Dylan.png?raw=true",
    cardTitle: "Bob Dylan",
    cardDescription:
      "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
    button: {
      url: "https://en.wikipedia.org/wiki/Bob_Dylan",
      label: "Go to wikipedia",
    },
  };
  const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];
  const animals = [
    { label: "Horse" },
    { label: "Turtle" },
    { label: "Elephant" },
    { label: "Monkey" },
  ];

  const customer = {
    first_name: "Bob",
    last_name: "Dylan",
  };

  return (
    <>
      <Card />
      <Alert text="OMG! Something really bad has happened!" />
      <Card2 data={data} />
      <ShowPlanets const planets={planets} />
      <RenderList animals={animals} />
      <CustomerInformation customer={customer} />
      <Pokedex />
    </>
  );
}

export default App;
