const SingleMovie = ({ movie }) => {
  // const movieStyle = { color: "violet" };
  return (
    <div
      className={`${
        movie.id === 1 ? "bg-red-500" : "bg-gray-100"
      } flex flex-col gap-2 cursor-pointer p-10 shadow-lg rounded-xl hover:bg-gray-200 transition duration-300 ease-in-out `}
    >
      <p className="font-bold bg-red-600 text-white w-5 h-5 flex items-center justify-center rounded-full">
        {movie.id}
      </p>
      <h2 className="text-xl font-semibold ">{movie.title}</h2>
      <h5
        style={{ color: movie.id === 1 && "violet" }}
        className="font-semibold text-gray-400"
      >
        {movie.publish}
      </h5>
    </div>
  );
};

export default SingleMovie;
