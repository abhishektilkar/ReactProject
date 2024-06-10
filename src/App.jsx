// import HomeCards from './component/HomeCards';
import Hero from './component/Hero';
import HomeCards from './component/HomeCards';
import JobListings from './component/JobListings';
import Navbar from './component/Navbar'
import ViewAllJobs from './component/ViewAllJobs';
const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <HomeCards/>
      <JobListings/>
      <ViewAllJobs/>
    </>
  )
}

export default App;
