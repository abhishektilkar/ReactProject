/* eslint-disable react/prop-types */

import { useState } from "react"
import { FaMapMarker } from 'react-icons/fa'

// eslint-disable-next-line react/prop-types
const JobListing = ({ job }) => {
    const [descriptionLength, setDescriptionLength] = useState(false);
    
    let description = job.description;
    if (!descriptionLength) description = description.substring(0, 90) + '...';

    const toggle = (() => {
        setDescriptionLength((descriptionLength) => !descriptionLength);
    })
  return (
    <div className="bg-white rounded-xl shadow-md relative">
        <div className="p-4">
            <div className="mb-6">
            <div className="text-gray-600 my-2">{job.type}</div>
            <h3 className="text-xl font-bold">{job.title}</h3>
            </div>

            <div className="mb-5">
                {/* // eslint-disable-next-line react/prop-types */}
                {description}
            </div>
            <button className="text-indigo-500 mb-5 hover:text-indigo600" onClick={toggle}>{descriptionLength ? 'Read Less' : 'Read More'}</button>
            <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>

            <div className="border border-gray-100 mb-5"></div>

            <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="text-orange-700 mb-3">
                <FaMapMarker className="inline text-lg mb-1"/>
                {job.location}
            </div>
            <a
                href={`/job/${job.id}`}
                className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
                Read More
            </a>
            </div>
        </div>
    </div>
  )
}

export default JobListing