import React, {useState} from 'react'
import { useAuth } from '@/contexts/Authcontext';
import { useNavigate } from 'react-router';
import SideNav from './Sidenav';
function Dashboard() {
  const [error, setError] = useState('')
  const {currentUser, logout} = useAuth()
  const Navigate = useNavigate()
  const handlelogout = async () => {
    setError('');
    try{
      await logout();
      Navigate('/login');
    }catch{
      setError('Failed To Logout')
    }
  }
  return (
    <>
    <SideNav />
    <div style={{color:'blue'}} className='flex-1 bg-white h-screen md:ml-64 p-4 md:p-6'>
      {error && <p style={{color:'red'}}>{error}</p>}
      <h1>Dashboard</h1>
      <h2>Profile</h2>
      <p>{currentUser.email}</p>
      <p>{currentUser.displayName}</p>
      <button onClick={handlelogout}>Log out</button>
    </div>
    </>
  )
}

export default Dashboard;