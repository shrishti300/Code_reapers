const VD = () => {
    return (
      <div className="App flex">
        <div className="border-4 border-red-500 h-screen w-1/2 flex flex-col justify-center px-12">
          <div className="mb-8">
            <p className="text-xl font-bold text-left my-4">You Selected</p>
            <p className="text-3xl font-bold text-left">Fetch Vehicle Details</p>
          </div>
          <div className="py-4">
            <p className="text-xl mb-2">Enter the license plate number</p>
            <input
              type="text"
              className="border-2 border-gray-300 rounded-md p-2"
            />
            <p className="mt-4 text-cyan-800 font-semibold">OR</p>
          </div>
          <div>
            <button
              type="button"
              className="bg-cyan-400 px-4 py-2 rounded-lg mr-4"
            >
              <p className="text-white font-semibold">Scan</p>
            </button>
            <button
              type="button"
              className="bg-cyan-400 px-4 py-2 rounded-lg ml-4"
            >
              <p className="text-white font-semibold">Voice</p>
            </button>
          </div>
        </div>
        <div className="border-4 border-yellow-300">
          <p>hello</p>
        </div>
      </div>
    );
  };
  
  export default App;