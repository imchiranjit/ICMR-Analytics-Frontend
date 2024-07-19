import { Children } from 'react';
import { Link } from 'react-router-dom';

const Header = ({children}) => {
  return (
    <>
      <nav className="bg-teal-300  w-full top-0 left-0  border-gray-200 shadow-2xl">
        <div className="w-full flex flex-wrap items-center justify-between">
          <Link to="/" className="flex items-center" draggable="false">
            <img
              src="../../public/Images/ICMRlogo-no-bg.png"
              className="h-20 mx-4 py-2 px-6 lgo"
              alt="JNU-ICMR Logo"
              draggable="false"
            />
          </Link>
          <div className="flex md:order-2 uppercase btn-class">
            <Link
              to="/login"
              className="px-4 py-2  text-lg text-center text-dark-blue font-semibold mr-3 md:mr-2"
            >
              <button
                type="button"
                className="text-white btn-target bg-dark-blue hover:bg-blue-800 font-semibold rounded-lg text-sm px-5 py-2.5 mx-3 mb-2 dark:bg-blue-600 login-button"
              >
                Login
              </button>
            </Link>
          </div>
          <div
            className="items-center justify-center hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <h1 className="font-noto-sans text-dark-blue font-bold text-4xl select-none title">
              JNU-ICMR ANALYTICS
            </h1>
          </div>
          <div className='md:order-3'>
            {children}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
