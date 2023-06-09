import React from 'react'
import "./Spinner.css"
const Spinner = () => {
  return (
    <div className="flex flex-col items-center space-y-5">
      <div className='spinner'></div>
      <p className="text-white text-lg font-bold">Loading....</p>
    </div>
  )
}

export default Spinner
