/* eslint-disable react/prop-types */
// import React from 'react'
// const jobs from ./
// import jobs from '../jobs.json'
import { useEffect, useState } from 'react';
import JobListing from './JobListing';
// import { FaSpinner } from 'react-icons/fa';
import { ClipLoader } from 'react-spinners';

const JobListings = ({ isHome = false }) => {
    // console.log(jobs);
    // const recentJobs = !isHome ? jobs : jobs.slice(0, 3);
    const [recentJobs, setRecentJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchJobs = async () => {
        const apiUrl = isHome
        ? 'http://localhost:8001/jobs?_limit=3'
        : 'http://localhost:8001/jobs';
        try {
          const res = await fetch(apiUrl);
          const data = await res.json();
          setRecentJobs(data);          
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

      fetchJobs();
    }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
        { loading ? 
          ( <div className="flex w-screen justify-center place-items-center">
            <ClipLoader size={75} color={"indigo"} loading={true} />
          </div> ) 
            :
          ( <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentJobs.map((job) => (
                  // eslint-disable-next-line react/jsx-key
                  <JobListing key={job.id} job={job}></JobListing>
              ))}
          </div> )
        }
      </div>
    </section>
  )
}

export default JobListings
