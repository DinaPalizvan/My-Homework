/* eslint-disable react/prop-types */
export default function Card2({ data }) {
  return (
    <div className="card m-5">
      <img className="card-img-top" src={data.image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{data.cardTitle}</h5>
        <p className="card-text">{data.cardDescription}</p>
        <a href={data.button.url} className="btn btn-primary">
          {data.button.label}
        </a>
      </div>
    </div>
  );
}
