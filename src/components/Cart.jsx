import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

export default function Cart() {
  const data= useSelector(state=>state.cart)
  let totalPrice= 0
  data.forEach(e=>{
    totalPrice=Number(totalPrice)+Number(e.price)
  })
  return (
    <>
    <div className="cartEl">
      <span style={{margin: "0 5px", fontSize: 18}}>${totalPrice}.00</span>
      <FontAwesomeIcon className="cart" icon={faCartShopping} />
      <div className="cartCount" style={{display: data.length>0? "block" : "none"}}>{data.length}</div>

    </div>
    </>
  );
}
