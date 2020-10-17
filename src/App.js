import React from 'react';
import './App.css';

function App() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg" >
      <img className="w-full" src={require('./profile.png')} alt="Display" />
      <div className="px-6 py-4">
        <div className="font-bold text-blue-500 text-xl mb-2">
          Zheng Chen
        </div>
        <p className="text-gray-700 text-base">
          When i’m not coding i switch to tennis. <span></span>
        </p>
      </div>
      <div className="">
        <span className="inline-block bg-gray-200 rounded-full  px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Software Engineer</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Writter</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2 ml-20">#Public Speaker</span>
      </div>
    </div>
  );
}

export default App;
