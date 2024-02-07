import './App.css'

function App() {

  const handleClick = () => {
    fetch('https://catfact.ninja/fact')
    .then(res => res.json())
    .then(data => {
      document.querySelector('.fact-container').innerText = data.fact;
    })
  }
  
  return (
    <main className="w-full min-h-screen">
      <div className='flex justify-between items-center px-4 py-6 sm:px-8 md:px-12 lg:px-16 xl:px-20'>
        <h1 className="font-bold text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl px-4 sm:px-0">Cat Facts</h1>
        <img src="/kuromi.png" alt="logo" className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32" />
      </div>

      <div className='flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20'>

        <div className='fact-container text-white p-4 bg-[#212121] rounded-xl shadow-lg border border-[#ff2ff1]'></div>
        <button 
          onClick={handleClick}
          className='px-6 py-4 rounded-xl shadow-lg'>Get Fact</button>

      </div>
    </main>
  )
}

export default App;