import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AddJob from './pages/AddJob';
import NotFoundPage from './pages/NotFoundPage';
import JobsPage from './pages/JobsPage';
import JobsPages from './pages/JobsPages';
import { jobsLoader } from './pages/JobsPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='/jobs' element={<JobsPages/>}/>
      <Route path='/jobs/:id' element={<JobsPage/>} loader={jobsLoader}/>
      <Route path='/add-job' element={<AddJob/>}/>
      <Route path='/*' element={<NotFoundPage/>}/>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router}/> 
};

export default App; 
