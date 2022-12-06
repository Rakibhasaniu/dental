import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegWindowClose } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from './AuthContext/UserContext';

function App() {

  const { user } = useContext(AuthContext);
  // console.log(user)
  return (
    <div className='max-w-[1440px] mx-auto'>
      {/* User modal */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-[300px] md:w-[auto] dark:bg-gray-900 mt-16">
          <label htmlFor="my-modal" className="flex justify-end h-10"><FaRegWindowClose className='cursor-pointer text-3xl mt-0 mb-3 text-white hover:text-red-600'></FaRegWindowClose></label>
          <div className="flex flex-col max-w-md p-6 dark:bg-gray-900 dark:text-gray-100">

            <img src={user?.photoURL} alt="" className="flex-shrink-0 object-cover h-64 rounded-full sm:h-96 dark:bg-gray-500 aspect-square" />
            <div>
              <h2 className="text-xl font-semibold mt-3">{user?.displayName}</h2>
              <span className="block pb-2 text-sm dark:text-gray-400">Location : Bangladesh</span>
              <div className="text-md mb-2">Last Login : {user?.metadata?.lastSignInTime} </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit, eligendi  consectetur adipisicing elit.Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
            </div>
            <label htmlFor="my-modal" className="flex justify-center px-10 btn mt-5 hover:text-success">OK</label>
          </div>
          {/* close modal */}

        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
