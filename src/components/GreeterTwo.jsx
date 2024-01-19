const GreeterTwo = ({ fullName, msg }) => {
  console.log(fullName,msg);
  msg = "Hello!"
  fullName= "Ariful"
  console.log(fullName,msg);
  return (
    <div>
      <h1 className="text-5xl font-semibold">{msg} {fullName}.Where are you going now?</h1>
    </div>
  );
};

export default GreeterTwo;
