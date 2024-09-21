import express from "express";
import dotenv from "dotenv";

dotenv.config();

//* express servers on routes and listen

const app = express();
const port = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.send("Server is ready!");
// });

app.use(express.static('dist'));

app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      title: 'A Joke',
      content: 'This is a joke',
    },
    {
      id: 2,
      title: 'Another Joke',
      content: 'This is Another joke',
    },
    {
      id: 3,
      title: 'Third Joke',
      content: 'This is Third joke',
    },
    {
      id: 4,
      title: 'Forth Joke',
      content: 'This is Forth joke',
    },
    {
      id: 5,
      title: 'Fifth Joke',
      content: 'This is Fifth joke',
    },
  ]
  res.send(jokes);
  // res.json(jokes);
})

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
