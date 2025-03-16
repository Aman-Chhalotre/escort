import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Landing from './components/Landing.jsx'
import Escorts from './components/escorts/Escorts.jsx'
import Locations from './components/locations/Locations.jsx'
import Nationality from './components/nationality/Nationality.jsx'
import Fetish from './components/fetish/Fetish.jsx'
import Appearance from './components/appearance/Appearance.jsx'
import Profile from './components/profile/Profile.jsx'
import Apply from './components/apply/Apply.jsx'
import Admin from './components/adminPanel/Admin.jsx'
import ApplicationDetails from './components/adminPanel/ApplicationDetails.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import Login from './components/adminPanel/Login.jsx'
import Services from './components/services/Services.jsx'
import CheckStatus from './components/checkStatus/CheckStatus.jsx'
import SearchResults from './components/searchResults/SearchResults.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route index element={<Landing/>}/>
      <Route path='/escorts' element={<Escorts/>}/>
      <Route path='/locations' element={<Locations/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/nationality' element={<Nationality/>}/>
      <Route path='/fetish' element={<Fetish/>}/>
      <Route path='/appearance' element={<Appearance/>}/>
      <Route path='/escorts/:slug' element={<Profile/>}/>
      <Route path='/apply' element={<Apply/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/checkStatus' element={<CheckStatus/>}/>
      <Route path='/searchResults/:slug' element={<SearchResults/>}/>
      <Route element={<ProtectedRoute/>}>
        <Route path='/admin' element={<Admin/>} />
        <Route path='/applicationDetails' element={<ApplicationDetails/>}/>
      </Route>
    </Route>

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
