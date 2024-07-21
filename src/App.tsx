import { RouterProvider } from "react-router-dom"
import { router } from "./routes/routes"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useUserDetails from "./hooks/useUserDetails";


const App = () => {
  //Add user data To store
  useUserDetails()





  return (
    <div className="w-full min-h-screen dark:bg-[#242424] dark:text-white ">
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
