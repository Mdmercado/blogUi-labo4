const FormContainer = ({ children, title, imageUrl }) => {
  return (
    <div className="flex h-screen bg-gray-100 ">
      <div
        className="hidden md:flex md:w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="flex flex-col  md:w-1/2 w-full p-6">
        <div className="w-full max-w-md mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">
            {title}
          </h2>
          <div className="bg-white shadow-md rounded p-8 mb-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
