import React from 'react'

interface props {
  setAuthScreen: (screen: string) => void;
  toggleAuthDrawer: () => void;
}


const NavAuthButtons:React.FC<props> = ({ toggleAuthDrawer, setAuthScreen }) => {
  return (
    <div className='flex gap-2 sm:gap-4 font-medium'>
        <button onClick={() => {
          toggleAuthDrawer()
          setAuthScreen("Login")
        }} className='px-3 py-2 '>Login</button>
        <button onClick={() => {
          toggleAuthDrawer()
          setAuthScreen("Sign up")
        }} className='bg-main-color px-3 py-2 rounded-md hover:bg-main-color/90'>Sign up</button>
    </div>
  )
}

export default NavAuthButtons