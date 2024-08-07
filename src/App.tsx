import { RouterProvider } from "react-router-dom"
import { router } from "./routes/routes"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useUserDetails from "./hooks/useUserDetails";
import { useSelector } from "react-redux";
import { Tstore } from "./redux/store";


const App = () => {
  //Add user data To store
  useUserDetails()

  const isNavbarOpen = useSelector((store: Tstore) => store.navbar.isNavbarOpen)



  return (
    <div className={`w-full min-h-screen dark:bg-[#242424] dark:text-white ${isNavbarOpen ? 'h-screen overflow-hidden' : ''}`}>
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
