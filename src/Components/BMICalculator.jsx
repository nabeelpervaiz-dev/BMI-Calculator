import { Activity, Ruler, Weight } from "lucide-react";

function BMICalculator( {height, weight, setresult ,setactive ,setweight,setheight }) {

//     const [weight, setweight] = useState('')
//   const [height, setheight] = useState('')
  

  const SubmitHandle=(e)=>{
    e.preventDefault()
    console.log("form submitted")

  }
 

  const BMICal=()=>{

    if(weight && height){
const Meter_height= ((Math.floor(height * 12)) * 0.0254).toFixed(3);
   const BMI=(weight/(Meter_height * Meter_height)).toFixed(1)
   setresult(BMI);
   setactive(true);
   

    }else{
        alert("Please input values..")
    }
// step no :01 converting  height to meters 
  
   
  }
  


  return (
    <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-xl">

      {/* Header */}
     <form onSubmit={(e)=>{
        SubmitHandle(e)
     }}>
        <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
          <Activity size={30} />
        </div>

        <h1 className="text-3xl font-bold text-gray-900">
          BMI Calculator
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Calculate your Body Mass Index
        </p>
      </div>

      {/* Height Input */}
      <div className="mb-5">
        <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
          <Ruler size={18} className="text-blue-500" />
          Height ft   (e.g: 4.3ft)
        </label>

        <input
           value={height}
           onChange={(e)=>{
            setheight(e.target.value)
           }}
          type="number"
          placeholder="Enter your height"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />
      </div>

      {/* Weight Input */}
      <div className="mb-7">
        <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
          <Weight size={18} className="text-blue-500" />
          Weight (kg)
        </label>

        <input
            value={weight}
           onChange={(e)=>{
            setweight(e.target.value)
           }}
          type="number"
          placeholder="Enter your weight"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />
      </div>

      {/* Calculate Button */}
      <button
        onClick={BMICal}
        type='submit'
        className="w-full rounded-xl cursor-pointer bg-blue-600 py-3.5 font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700 active:scale-95"
      >
        Calculate BMI
      </button>


     </form>
    </div>
  );
}

export default BMICalculator;