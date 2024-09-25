// src/App.js
import React from 'react';
import JobPosting from './components/JobPosting';
import JobListings from './components/JobListings';

function App() {
    return (
        <div className="App">
            <h1>Saathi Job Hiring Platform</h1>
            <JobPosting />
            <JobListings />
        </div>
    );
}

export default App;
