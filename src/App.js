
import { useState } from "react";
import "./App.css";

function App(){

  const [count,setCount]=useState(0);
  function minusHandler(){

    setCount(count-1);

  }
  function plusHandler(){
    setCount(count+1);


  }
  function resetHadler(){
    setCount(0);

  }


  return(
    // top level div
    <div className="w-[100vw] h-[100vh] bg-slate-900 flex flex-col justify-center items-center gap-10">
      <div className="text-[40px] font-bold text-white">Counter App</div>
      <div className="flex  bg-fuchsia-600 gap-12 py-3 rounded-sm text-[25px] text-black">
        <button onClick={minusHandler} className="flex justify-center items-center border-r-2 text-center w-20 border-black text-5xl "> - </button>
        <div className="flex justify-center items-center">

        {count}

        </div>
        <button onClick={plusHandler} className="border-l-2 text-center w-20 border-black text-5xl "> + </button>
      </div>

    

      <div className=" bg-red-600 p-4 rounded-md">
        <button className="text-white font-semibold" onClick={resetHadler}>Reset</button>
      </div>



      

    </div>


  );


}


export default App;
