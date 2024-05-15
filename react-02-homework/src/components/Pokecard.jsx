/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
export default function Pokecard({ data }) {
  const dataa = data.pokemon;
  console.log(dataa);
  return (
    <>
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
    <h2 style={{color:"gray"}}>Pokedex</h2>
    <div style={{display: "flex" , flexWrap: "wrap", alignItems: "center", justifyContent:"center"}}>
        {dataa.map((e)=>{
            return <div style={{background: "lightGray", borderRadius: 10, margin: 20, padding: 20, textAlign:"center", width: 150}}>
                <h2 style={{color: "blue"}}>{e.name} </h2>
                <img src={e.image} alt="" />
                <p style={{fontWeight:"bolder"}}>Type: {e.type}</p>
            </div>
        })}
    </div>

    </div>
    </>
  );
}
