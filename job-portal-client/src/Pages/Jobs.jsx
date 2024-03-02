import React from 'react'

const Jobs = ({result}) => {
  return (
    <>
    <div >
      <h3 className="text-1g font-bold mb-2">{result.length} Jobs</h3>
       
    </div>
    <section className="card-container">{result}</section>
    </>
  )
}

export default Jobs
