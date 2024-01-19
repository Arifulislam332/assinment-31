import Movies from "./components/movies";

const movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    publish: 1994,
  },
  {
    id: 2,
    title: "The Godfather",
    publish: 1972,
  },
  {
    id: 3,
    title: "Schindler's List",
    publish: 1993,
  },
  {
    id: 4,
    title: "The Dark Knight",
    publish: 2008,
  },
  {
    id: 5,
    title: "The Dark Knight",
    publish: 2008,
  },
  {
    id: 6,
    title: "The Dark Knight",
    publish: 2008,
  },
];

const App = () => {
  return (
    <React.Fragment>
      <Movies movies={movies} />;
    </React.Fragment>
  );
};

export default App;
