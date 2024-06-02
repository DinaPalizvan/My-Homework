import NavComponent from "./Nav";

import "./style.css"

export default function Header() {
  return (
    <>
      <div style={{ backgroundImage: `url(${"src/data/hero-bg.jpg"})` , height: "97vh", backgroundSize:"cover", backgroundPosition:"center", borderRadius:"0 0 7% 7%",}}>
        <NavComponent />
        <div style={{ margin:"3rem 15vw"}}>
        <h6 style={{fontWeight:450, fontSize: 20}}>Best Quality Plants</h6>
        <h2 style={{}}>Amazing Variety Of Plants Starting Just $12</h2>
        <button className="shopBtn">SHOP NOW</button>
        </div>
      </div>
    </>
  );
}
