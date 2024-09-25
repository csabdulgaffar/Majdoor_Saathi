// src/components/JobListings.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobListings = () => {
    const [jobPostings, setJobPostings] = useState([]);

    useEffect(() => {
        const fetchJobPostings = async () => {
            const response = await axios.get('http://localhost:5000/job-postings');
            setJobPostings(response.data);
        };
        fetchJobPostings();
    }, []);

    return (
        <div>
            <h2>Job Listings</h2>
            <ul>
                {jobPostings.map((job) => (
                    <li key={job._id}>
                        <h3>{job.title}</h3>
                        <p>{job.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobListings;
