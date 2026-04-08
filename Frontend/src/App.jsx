import { useState } from 'react'
import './App.css'
import { Navigate } from 'react-router-dom'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import GoogleLogin from './components/GoogleLogin'
import Dashboard from './components/Dashboard'
import PageNotFound from './components/PageNotFound'
import {GoogleOAuthProvider} from '@react-oauth/google'
import RefreshHandler from './RefreshHandler'




function App() {

const [isAuthenticated, setIsAuthenticated] = useState(false);

const GoogleAuthWrapper = () => {
      return (
        <GoogleOAuthProvider clientId='949980638863-njje4u6v28vlqbb1gt7j8bel7c1kvne8.apps.googleusercontent.com'>
          <GoogleLogin></GoogleLogin>
        </GoogleOAuthProvider>
      )
  }

const PrivateRoute = ({element}) => {
    return isAuthenticated ? element : <Navigate to="/login"/>
  }



  return (
    <BrowserRouter>
     <RefreshHandler setIsAuthenticated={setIsAuthenticated}/>
     <Routes>
        <Route path="/" element={<Navigate to="/login"/>}/>
        <Route path="/login" element={<GoogleAuthWrapper />} />
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard/>}/>}/>
        <Route path="*" element={<PageNotFound/>}/>
     </Routes>
    </BrowserRouter>

  )
}

export default App
