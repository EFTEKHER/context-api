import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext.js'



const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    setUser({ username, password });
   
  };

  return (
    <div className="w-[100vw] h-[80vh] mx-25 flex">
      <div className="w-[500px] h-[400px] sm:w-[400px] sm:h-[350px] bg-slate-800 text-white m-auto font-serif shadow-4xl rounded-xl flex flex-col">
        <div className="flex items-center justify-center flex-col gap-6">
          <br />
          <h2 className="text-center text-2xl font-semibold font-mono">
            Login
          </h2>
          <input
            className="w-[250px] h-[30px] p-auto bg-slate-700 hover:bg-slate-800 rounded hover:rounded-lg"
            type="text"
            placeholder="  Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            className="w-[250px] h-[30px] p-auto bg-slate-700 hover:bg-slate-800 rounded hover:rounded-lg"
            type="password"
            placeholder="  Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            className="h-10 w-25 border border-white font-bold py-2 px-4 rounded-lg hover:bg-white transform transition-all duration-500 hover:text-black"
            onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
