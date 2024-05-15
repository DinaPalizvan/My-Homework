/* eslint-disable react/prop-types */
export default function ShowPlanets({ planets }) {
  // console.log(planets);
  return (
    <ul>
      {planets.map((p, i) => (
        <li key={i}>{p} </li>
      ))}
    </ul>
  );
}
