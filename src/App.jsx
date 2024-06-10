// import HomeCards from './component/HomeCards';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
// import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import AddJob from './pages/AddJob';
import NotFoundPage from './pages/NotFoundPage';
// import Hero from './component/Hero';
// import HomeCards from './component/HomeCards';
// import JobListings from './component/JobListings';
// import Navbar from './component/Navbar'
// import ViewAllJobs from './component/ViewAllJobs';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/jobs' element={<JobsPage/>}/>
      <Route path='/add-job' element={<AddJob/>}/>
      <Route path='/*' element={<NotFoundPage/>}/>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router}/> 
};

export default App; 
