import { useState } from "react";

function App() {
  const [currentColor, setCurrentColor] = useState('black');
  const setColor = (color) => {
    setCurrentColor(color)
  }
  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: currentColor }}>
      <div className="bg-white flex flex-row justify-center fixed w-full bottom-4">
        <button className="bg-red-600 p-2 m-2 rounded-full w-20 cursor-pointer" onClick={() => { setColor('#dc2626') }}>Red</button>
        <button className="bg-black p-2 m-2 rounded-full w-20 text-white cursor-pointer" onClick={() => { setColor('black') }}>Black</button>
        <button className="bg-green-300 p-2 m-2 rounded-full w-20 cursor-pointer" onClick={() => { setColor('#86efac') }}>Green</button>
        <button className="bg-yellow-200 p-2 m-2 rounded-full w-20 cursor-pointer" onClick={() => { setColor('#fef08a') }}>Yellow</button>
        <button className="bg-blue-400 p-2 m-2 rounded-full w-20 cursor-pointer" onClick={() => { setColor('#60a5fa') }}>Blue</button>
        <button className="bg-purple-300 p-2 m-2 rounded-full w-20 cursor-pointer" onClick={() => { setColor('#d8b4fe') }}>Purple</button>
        <button className="bg-gray-400 p-2 m-2 rounded-full w-20 cursor-pointer" onClick={() => { setColor('#9ca3af') }}>Gray</button>
      </div>
    </div>
  )
}

export default App
