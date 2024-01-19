const Greeter = ({ fullName, msg }) => {
  // console.log(fullName, msg);
  return (
    <div>
      <h1 className="text-5xl text-red-500 font-semibold">
        {msg} {fullName}.
      </h1>
    </div>
  );
};

export default Greeter;
