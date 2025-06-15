import React from 'react'
import NavLogo from './NavLogo'
import NavLinks from './NavLinks'
import NavAuthButtons from './NavAuthButtons'
import NavUserSection from './NavUserSection'
import ThemeSwitcher from '../../../../components/ThemeSwitcher'

const Navbar:React.FC = () => {
  return (
    <div className='px-4 md:px-20 lg:px-34 py-4 flex justify-between items-center'>
       <NavLogo />
       <NavLinks />
       <NavAuthButtons />
       <NavUserSection />
       <ThemeSwitcher />
    </div>
  )
}

export default Navbar