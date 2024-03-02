import React from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiClock, FiDollarSign, FiMap, FiMapPin } from 'react-icons/fi';

const Card = ({ data }) => {
  
  const { companyName, companyLogo, jobTitle, minPrice, maxPrice, employmentType, postingDate, description, jobLocation } = data;

  return (
    <section className='card'>
      <Link to={"/"} className='flex gap-4 flex-col sm:flex-row items-start'>
        <img src={companyLogo} alt="Companylogo" />
        <div>
          <h4 className='text-primary mb-1'>{companyName}</h4>
          <h3 className='text-1g font-semibold mb-2'>{jobTitle}</h3>

          <div className='text-primary/70 text-base flex flex-wrap gap-2 mb-2'>
            <span className='flex place-items-center gap-2'><FiMapPin />{jobLocation}</span>
            <span className='flex place-items-center gap-2'><FiClock />{employmentType}</span>
            <span className='flex place-items-center gap-2'><FiDollarSign />{minPrice}-{maxPrice}k</span>
            <span className='flex place-items-center gap-2'><FiCalendar />{postingDate}</span>
          </div>
          <p className='text-base text-primary/70'>{description}</p>
        </div>
      </Link>
    </section>
  );
};

export default Card;