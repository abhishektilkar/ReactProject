import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
// import AddJob from './pages/AddJob';
import NotFoundPage from './pages/NotFoundPage';
import JobsPage from './pages/JobsPage';
import JobsPages from './pages/JobsPages';
import { jobsLoader } from './pages/JobsPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';



const App = () => {
  const addJob = async (newJob) => {
    // console.log(newJob);
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob)
    });
    return;
  }

  const hiredJob = async (jobId) => {
    console.log(jobId);
    const res = await fetch(`/api/jobs/${jobId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    return;
  }

  const updateJob = async (job) => {
    console.log('Job', job);
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  };
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/jobs' element={<JobsPages/>}/>
        <Route path='/jobs/:id' element={<JobsPage hiredJob={hiredJob}/>} loader={jobsLoader}/>
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>}/>
        <Route
          path='/edit-job/:id'
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobsLoader}
        />
        <Route path='/*' element={<NotFoundPage/>}/>
      </Route>
    )
  );
  return <RouterProvider router={router}/> 
};

export default App; 
