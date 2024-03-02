import React from 'react';
import InputField from '../components/InputField';
import Button from './Button';


const Salary = ({ handleChange, handleClick }) => {
  return (
    <div>
      <h4 className="text-1g font-medium mb-2">Salary</h4>
      <div className="mb-4">
        <Button onClick={handleClick} value="" title="Hourly" />
        <Button onClick={handleClick} value="Monthly" title="Monthly" />
        <Button onClick={handleClick} value="Yearly" title="Yearly" />
      </div>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>ALL
        </label>

        <InputField
          handleChange={handleChange}
          value={30}
          title="< 30000k"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={50}
          title="< 50000k"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={80}
          title="< 80000k"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={100}
          title="< 100000k"
          name="test2"
        />
      </div>
    </div>
  );
};

export default Salary;