import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'



function App() {
  const [jobs ,setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const fetchData = async () => {
    const response = await fetch(url);
    const jobs = await response.json();
    setJobs(jobs);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <section className='section loading'>
      <h1>loading</h1>
    </section>
  }

  return <main>
    <h2>{jobs}</h2>
  </main>
}

export default App;