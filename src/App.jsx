import { useState } from 'react'
import './App.css'
import BMICalculator from './Components/BMICalculator'

function App() {
  const [weight, setweight] = useState('')
  const [height, setheight] = useState('')

  const [result, setresult] = useState('')
  const [active, setactive] = useState(false)

  const Reset=()=>{
     setactive(false)
     setweight('')
     setheight('')
  }

  return (
  
<div className='flex flex-col lg:flex-row gap-8 lg:gap-30 items-center p-4 sm:p-6 lg:p-10'>
  <BMICalculator height={height} weight={weight} setresult={setresult} setactive={setactive} setweight={setweight} setheight={setheight} />

  <div className="information w-full lg:flex-1 min-w-0">

    {active && <div className="data flex flex-col gap-6 sm:gap-10">

      <h1 className='text-3xl sm:text-4xl font-bold '>Results:</h1>

      <h1 className='text-2xl sm:text-3xl break-words'>BMI score :{result}</h1>

      {result < 18.5 && <h1 className='text-xl sm:text-2xl italic text-blue-500'>"Under Weight"</h1>}

      {(result >= 18.5 && result < 24.9) && <h1 className='text-xl sm:text-2xl italic text-green-500'>"Normal Weight"</h1>}

      {(result > 25) && <h1 className='text-xl sm:text-2xl italic text-red-500'>"Over weight"</h1>}

      <div className="button">
        <button
          onClick={Reset}
          className='text-lg sm:text-xl px-6 py-3 text-white bg-red-500 rounded-xl shadow-xl active:scale-95 cursor-pointer'>
          Reset
        </button>
      </div>

    </div>}

  </div>
</div>

  )
}

export default App
