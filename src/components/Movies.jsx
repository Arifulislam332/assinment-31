import SingleMovie from "./SingleMovie";

const Movies = ({ movies }) => {
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-2xl uppercase tracking-widest font-semibold text-cyan-500 mb-5">Movies list: <span>({movies.length})</span></h1>
      <div className="grid grid-cols-3 gap-10">
        {movies.map((movie) => (
          <SingleMovie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
