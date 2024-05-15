/* eslint-disable react/prop-types */
export default function RenderList({ animals }) {
  // console.log(animals);
  return (
    <ul>
      {animals.map((a, i) => {
        return <li key={i}>{a.label}</li>;
      })}
    </ul>
  );
}
