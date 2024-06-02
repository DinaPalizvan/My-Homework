/* eslint-disable react/jsx-key */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import data from "../data/data.json";
import { addToCart, setShowToast } from "../redux/actions/cartActions";

export default function Main() {
  const dispatch = useDispatch();
  const handleBasketClick = (plant) => {
    dispatch(addToCart(plant));
    dispatch(setShowToast(true));
  };

  return (
    <>
      <div className="mainContainer">
        {data.map((d) => {
          const starsArray = [];
          for (let i = 0; i < d.stars; i++) {
            starsArray.push(
              <FontAwesomeIcon icon={faStar} className="fullStar" />
            );
          }
          const emptyStar = [];
          const num = 5 - starsArray.length;
          for (let i = 0; i < num; i++) {
            emptyStar.push(
              <FontAwesomeIcon icon={faStar} className="emptyStar" />
            );
          }
          return (
            <div className="plantCard">
              <FontAwesomeIcon
                icon={faBasketShopping}
                className="icon"
                onClick={() => {
                  handleBasketClick({
                    name: d.name,
                    price: d.offPrice ? d.offPrice : d.price,
                    image: d.src,
                  });
                }}
              />
              <img src={d.src} alt="picture" />
              <div className="plantInfo">
                <span className="type">{d.type}</span>
                <p style={{ marginBottom: 0 }}>{d.name}</p>
                <div>
                  {starsArray}
                  {emptyStar}
                </div>

                <span
                  style={{
                    textDecorationLine: d.offPrice ? "line-through" : "none",
                    marginRight: 5,
                    color: d.offPrice
                      ? "rgb(171, 171, 171)"
                      : "rgb(93, 97, 103)",
                  }}
                >
                  ${d.price}
                </span>
                {d.offPrice ? (
                  <span style={{ color: "rgb(93, 97, 103)" }}>
                    ${d.offPrice}
                  </span>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
