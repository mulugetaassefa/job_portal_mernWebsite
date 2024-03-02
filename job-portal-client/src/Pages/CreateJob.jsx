import { useState } from 'react';
import { useForm } from 'react-hook-form';
import CreatableSelect from 'react-select/creatable';

const CreateJob = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.skills = selectedOption;

   // console.log(data);
   fetch("http://localhost:3000/post-job", {
    method: "POST",
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(data)
   })
   .then((res) => res.json())
   .then((result) => {
    console.log(result);
   })
  };

  const options = [
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'C++', label: 'C++' },
    { value: 'HTML', label: 'HTML' },
    { value: 'CSS', label: 'CSS' },
    { value: 'React', label: 'React' },
    { value: 'Node', label: 'Node' },
    { value: 'MongoDB', label: 'MongoDB' },
    { value: 'Redux', label: 'Redux' },
  ];
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {/* form */}
      <div className="bg-[#FAFAFA] py-10px-4 1g:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap gap-8">
          <div className="w-full">
            <div className="flex gap-8">
              <div className="1g:w-1/2 w-full">
                <label className="block mb-2 text-1g">Job Title</label>
                <input
                  type="text"
                  defaultValue="Web Developer"
                  {...register('jobTitle')}
                  className="create-job-input"
                />
              </div>
              <div className="1g:w-1/2 w-full">
                <label className="block mb-2 text-1g">Company Name</label>
                <input
                  type="text"
                  placeholder="Ex: Google"
                  {...register('CompanyName')}
                  className="create-job-input"
                />
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="flex gap-8">
              <div className="1g:w-1/2 w-full">
                <label className="block mb-2 text-1g">Minimum Salary</label>
                <input
                  type="text"
                  placeholder="$20k"
                  {...register('minPrice')}
                  className="create-job-input"
                />
              </div>
              <div className="1g:w-1/2 w-full">
                <label className="block mb-2 text-1g">Maximum Salary</label>
                <input
                  type="text"
                  placeholder="$120k"
                  {...register('maxPrice')}
                  className="create-job-input"
                />
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="flex gap-8">
              <div className="1g:w-1/2 w-full">
                <label className="block mb-2 text-1g">Salary Type</label>
                <select {...register('salaryType', { required: true })} className="create-job-input">
                  <option value="">Choose your salary</option>
                  <option value="Hourly">Hourly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Yearly">Yearly</option>
                </select>
              </div>
              <div className="1g:w-1/2 w-full">
                <label className="block mb-2 text-1g">Job Location</label>
                <input
                  type="text"
                  placeholder="Ex:New York"
                  {...register('jobLocation')}
                  className="create-job-input"
                />
              </div>
            </div>
          </div>

          {/* 4th row */}
          <div className="w-full">
            <div className="flex gap-8">
              <div className="1g:w-1/2 w-full">
                <label className="block mb-2 text-1g">Job Posting Date</label>
                <input
                  type="date"
                  placeholder="Ex:2023-10-28"
                  {...register('postingDate')}
                  className="create-job-input"
                />
              </div>
              <div className="1g:w-1/2 w-full">
                <label className="block mb-2 text-1g">Experience Level</label>
                <select {...register('salaryType')} className="create-job-input">
                  <option value="">Choose your experience</option>
                  <option value="NoExperience">NoExperience</option>
                  <option value="Internship">Internship</option>
                  <option value="work remotely">work remotely</option>
                </select>
              </div>
            </div>
          </div>

          {/* Required Skill Sets */}
          <div className="w-full">
            <label className="block mb-2 text-1g">Required Skill Sets:</label>
            <CreatableSelect
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              isMulti
              options={options}
              className="create-job-input py-4 w-full"
            />
             {/* 6th row */}
             <div className="w-full">
            <div className="flex gap-8">
              <div className="1g:w-1/2 w-full">
                <label className="block mb-2 text-1g">Company Logo</label>
                <input
                  type="text"
                  placeholder="paste your company log url:https://wssfc.com/img"
                  {...register('companyLogo')}
                  className="create-job-input"
                />
              </div>
              <div className="1g:w-1/2 w-full">
                <label className="block mb-2 text-1g">Emloyment Type</label>
                <select {...register("employmentType")} className="create-job-input">
                  <option value="">Choose your experience</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Internship</option>
                  <option value="Temporary">Temporary</option>
                </select>
              </div>
            </div>
          </div>
               {/* decription box*/}
               <div className="w-full">
               <label className="block mb-2 text-1g">Job Description</label>
               <textarea  className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700"
               rows={4}
               defaultValue={"This is job description text area"}
               placeholder="Job Description"
               {...register("description")} />
               </div>
             {/* last row*/}
             <div className="w-full">
                <label className="block mb-2 text-1g">Job posted By</label>
                <input 
                type="email" 
                placeholder="your email"
                {...register("postedBy")}
                className="create-job-input" />
             </div>
            <input type="submit" className="mb-12 block bg-blue text-white font-semibold px-8 py-2 rounded-sm" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateJob;