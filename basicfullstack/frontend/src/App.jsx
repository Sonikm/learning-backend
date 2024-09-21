import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((res) => {
        console.log(res.data);
        setJokes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Chai and Full Stack || Chai aur Code</h1>
      <div className="">
        <h2>JOKES: {jokes.length}</h2>
        <div className="">
          {jokes.map((joke) => {
            return (
              <div className="flex" key={joke.id}>
                <h3>{joke.title}</h3>
                <p>{joke.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
