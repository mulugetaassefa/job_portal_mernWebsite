import React from 'react'
import InputField from '../components/InputField';
const JobPostingData = ({handleChange }) => {
    const now =new Date();
    console.log(now)
    const twentyFourHoursAgo =new Date(now -24 * 60 * 60 * 1000);
    const SevenDayAgo =new Date(now -7* 24 * 60 * 60 * 1000);
    const ThirtyDayAgo =new Date(now -30 * 24 * 60 * 60 * 1000);
    // convert date to string
    const  twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().slice(0,10);
    const  SevenDaysAgoDate = SevenDayAgo.toISOString().slice(0,10);
    const  ThirtyDaysAgoDate =ThirtyDayAgo.toISOString().slice(0,10);
    
  return (
    
    <div>
    <h4 className='text-1g font-medium mb-2'>Date of Posting</h4>
    <div>
      <label className="sidebar-label-container">
        <input
          type="radio" 
          name="test" 
          id="test"  
          value=""
          onChange={handleChange}
        />
         <span className='checkmark'></span> ALL Time
      </label>

      <InputField 
        handleChange={handleChange} 
        value={ twentyFourHoursAgoDate}
        title="Last 24 hours"
        name="test" 
      />
      <InputField 
        handleChange={handleChange} 
        value={SevenDaysAgoDate}
        title="Last 7 days"
        name="test" 
      />
      <InputField 
        handleChange={handleChange} 
        value={ThirtyDaysAgoDate}
        title="Last 30 Days"
        name="test" 
      />
    </div>
  </div>
    
  )
}

export default JobPostingData
