import { createBrowserRouter } from "react-router-dom";
//import  {Dashboard} from "@/pages/Dashbord";
//import Createjob from "@/pages/Createjob"
import Listing from './pages/Listing'
//import Newdash from '@/pages/Newdash'
import Dash from "./pages/Dash";
//import CleanData from "./pages/CleanData";

import DashboardLayout from "./layouts/DashboardLayout";
import SettingsPage from "./pages/SettingsPage";
import StudentsList from "./pages/StudentsList";
import CompanyFinalPage from "./pages/CompanyFinalPage";


const router = createBrowserRouter([
       {
              path: '/',
              element: <DashboardLayout />,
              children: [
                     {
                            path: '/',
                            element: <Dash />
                     },
                     {
                            path: 'home',
                            element: <Dash />
                     },
                     {
                            path: 'list',
                            element: <Listing />
                     },
                     {
                            path: 'company',
                            element: <CompanyFinalPage />
                     },
                     {
                            path: 'students',
                            element: <StudentsList />
                     },
                     {
                            path: 'setting',
                            element: <SettingsPage/>
                     },

              ]
              
       },
       
       

       
       
]);
export default router;