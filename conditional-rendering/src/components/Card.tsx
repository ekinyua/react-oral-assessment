import { useState } from 'react';

const Card = () => {
  const [state, setState] = useState('initial');

  const handleStateChange = (newState: any) => {
    setState(newState);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Current State: {state}</h2>
      
      {state === 'initial' && (
        <div className="bg-blue-100 p-4 rounded-md">
          <p className="text-blue-800">Welcome to the initial state!</p>
          <button 
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => handleStateChange('loading')}
          >
            Start Loading
          </button>
        </div>
      )}
      
      {state === 'loading' && (
        <div className="bg-yellow-100 p-4 rounded-md">
          <p className="text-yellow-800">Loading... Please wait.</p>
          <div className="mt-2 w-full bg-yellow-200 rounded-full h-2.5">
            <div className="bg-yellow-500 h-2.5 rounded-full w-1/2"></div>
          </div>
          <button 
            className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            onClick={() => handleStateChange('complete')}
          >
            Complete Loading
          </button>
        </div>
      )}
      
      {state === 'complete' && (
        <div className="bg-green-100 p-4 rounded-md">
          <p className="text-green-800">Loading complete!</p>
          <button 
            className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            onClick={() => handleStateChange('initial')}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;