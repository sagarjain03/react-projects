import React, { useState } from 'react';

const App = () => {
  const [color, setColor] = useState("gray");

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <div className='h-screen flex items-center justify-center' style={{ backgroundColor: color }}>
      <div className='bg-gray-400 text-white rounded flex gap-2 px-4 py-2 absolute bottom-5'>
        <button>
          <div
            className="colors text-white bg-red-600 rounded px-5 py-1 text-xl"
            onClick={() => changeColor("red")}
          >
            Red
          </div>
        </button>
        <button>
          <div
            className="colors text-white bg-green-600 rounded px-5 py-1 text-xl"
            onClick={() => changeColor("green")}
          >
            Green
          </div>
        </button>
        <button>
          <div
            className="colors text-white bg-blue-600 rounded px-5 py-1 text-xl"
            onClick={() => changeColor("blue")}
          >
            Blue
          </div>
        </button>
        <button>
          <div
            className="colors text-white bg-yellow-600 rounded px-5 py-1 text-xl"
            onClick={() => changeColor("yellow")}
          >
            Yellow
          </div>
        </button>
        <button>
          <div
            className="colors text-white bg-black rounded px-5 py-1 text-xl"
            onClick={() => changeColor("black")}
          >
            Black
          </div>
        </button>
      </div>
    </div>
  );
};

export default App;
