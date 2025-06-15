import React from 'react'

const NavAuthButtons:React.FC = () => {
  return (
    <div className='flex gap-4 font-medium'>
        <button className='px-3 py-2 '>Login</button>
        <button className='bg-main-color px-3 py-2 rounded-md hover:bg-main-color/90'>Sign up</button>
    </div>
  )
}

export default NavAuthButtons