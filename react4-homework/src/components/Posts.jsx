import { useState, useEffect } from "react";
import "./post.css"

export default function Posts() {
  const [postData, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(true);
        console.log(data);
      });
  }, []);

  return (
    <>
      <div>
        {!loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {postData.map((d) => (
              <li key={d.id}>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
