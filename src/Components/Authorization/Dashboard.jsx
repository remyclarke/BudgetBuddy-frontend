import { useEffect } from 'react'
import { useOutletContext, useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const { user } = useOutletContext() // Access user data provided by the Outlet's context
  const navigate = useNavigate()

  
  
  return (
    <div>
      <h1>Welcome, {user && user.username.toUpperCase()}</h1>
      <h3>You have now logged out</h3>
      {/* <h3>This is a protected Component called Dashboard</h3> */}
      {/* Use user data as needed, for example: */}
    </div>
  )
}

export default Dashboard
