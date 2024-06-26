import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({
    isActive
  }) => isActive ?
   'text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
    : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';
  
                  
  
  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="h-10 w-auto">
                <path fillRule="evenodd" d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z" clipRule="evenodd" />
              </svg>

              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                Software Gigs
              </span>

            </NavLink>

            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink
                  to="/"
                  className={linkClass}
                  >
                Home
                </NavLink>
                <NavLink
                  to="/jobs"
                  className={linkClass}

                  >Jobs</NavLink
                >
                <NavLink
                  to="/add-job"
                  className={linkClass}

                  >Add Job</NavLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar

