import React, { useEffect, useState } from 'react'

const App = () => {

  const [time , setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {

    let timer;

    if(isRunning) {
      timer = setInterval(() => {
        setTime((prev) => (prev+10), 10);
      })
    }
    else{
      clearInterval(timer);
    }

    return () => clearInterval(timer);

  },[isRunning]);

  const formateTime = (time) => {

    const minutes = Math.floor(time/60000).toString().padStart(2, '0');

    const seconds = Math.floor(time%60000/1000).toString().padStart(2,'0');

    const centiSecs = Math.floor(time%1000/10).toString().padStart(2, '0');

    return `${minutes} : ${seconds} : ${centiSecs}`;

  }

  return (
    <div className=' flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white'>

      <div className=" bg-zinc-300 bg-opacity-20 backdrop-blur-lg p-12 rounded-3xl shadow-2xl border border-gray-300/30 text-center w-[600px] relative">

        <h1 className=' text-4xl font-mono font-semibold mb-6 tracking-widest text-black'>
          STOP WATCH
        </h1>

        <div className=" bg-gradient-to-br from-gray-900 to-black p-4 rounded-2xl shadow-2xl text-6xl font-mono font-semibold mb-6">

          {formateTime(time)}
        </div>

        <div className=" space-x-4">

          <button onClick={() => {
            setIsRunning(true);
          }}
          className=' bg-blue-500 p-4 px-6 text-3xl rounded-2xl'
          >
            Start
          </button>

          <button onClick={() => {
            setIsRunning(false);
          }}
          className=' bg-red-500 p-4 px-6 text-3xl rounded-2xl'
          >
            Stop
          </button>

          <button onClick={() => {
            setIsRunning(false);
            setTime(0);
          }}
          className=' bg-green-500 p-4 px-6 text-3xl rounded-2xl'
          >
            Reset
          </button>

        </div>

      </div>


    </div>
  )
}

export default App