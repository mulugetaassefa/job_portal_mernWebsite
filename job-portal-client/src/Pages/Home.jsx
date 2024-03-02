import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Sidebar from '../sidebar/Sidebar';
import NewsLetter from '../sidebar/NewsLetter';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setIsLoading(true);
    fetch("jobs.json")
      .then(res => res.json())
      .then(data => {
        setJobs(data);
        setIsLoading(false);
      });
  }, []);

  const [query, setQuery] = useState("");

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const filteredItems = jobs.filter(job =>
    job.jobTitle.toLowerCase().includes(query.toLowerCase())
  );

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

// handle click function
const handleClick =(event) => {
  setSelectedCategory(event.target.value);
}
  // calculate the index range
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };

  // function for next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  // function for the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const filteredData = () => {
    let filteredJobs = filteredItems;

    if (selectedCategory) {
      filteredJobs = filteredJobs.filter(({ 
        jobLocation, 
        experienceLevel,
        salaryType, 
        employmentType,
        postingDate 
      }) => (
        jobLocation.toLowerCase() === selectedCategory.toLowerCase() ||
        experienceLevel.toLowerCase() === selectedCategory.toLowerCase() ||
        salaryType.toLowerCase() === selectedCategory.toLowerCase() ||
        employmentType.toLowerCase() === selectedCategory.toLowerCase()
      ));
    }

    // slice the data based on the current page
    const { startIndex, endIndex } = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);

    return filteredJobs.map((job, index) => <Card key={index} data={job} />);
  };

  const result = filteredData();

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />

      {/* Main contents */}
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        {/* left sidebar */}
        <div className="col-span-1 bg-white p-4 rounded">
          <Sidebar handleChange={handleChange} handleClick={handleInputChange} />
        </div>

        {/* cards */}
        <div className="col-span-2 bg-white p-4">
          {isLoading ? (
            <p className="font-medium">Loading...</p>
          ) : result.length > 0 ? (
            <div>
              <h3 className="text-1g font-bold mb-2">{result.length} Jobs</h3>
              <div className="grid grid-cols-1 gap-6">{result}</div>
            </div>
          ) : (
            <>
              <h3 className="text-1g font-bold mb-2">0 Jobs</h3>
              <p>No data found!</p>
            </>
          )}

          {/* pagination */}
          {result.length > 0 && (
            <div className="flex justify-center mt-4 space-x-8">
              <button onClick={prevPage} disabled={currentPage === 1} className="hover:underline">
                Previous
              </button>
              <span className="mx-2">
                Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}
              </span>
              <button
                onClick={nextPage}
                disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage)}
                className="hover:underline"
              >
                Next
              </button>
            </div>
          )}
        </div>

        {/* right side */}
        <div className="col-span-1">
          <NewsLetter />
        </div>
      </div>
    </div>
  );
};

export default Home;