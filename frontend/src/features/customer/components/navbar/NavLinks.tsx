import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavLinkItem {
  name: string;
  path: string;
}

const links: NavLinkItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Orders', path: '/orders' },
  { name: 'Work with us', path: '/work-with-us' },
];

const NavLinks: React.FC = () => {
  return (
    <nav className='hidden md:block'>
      <ul className="flex gap-6 tracking-wider font-semibold">
        {links.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? 'text-main-color'
                  : ''
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
