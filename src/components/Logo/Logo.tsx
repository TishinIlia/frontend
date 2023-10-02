import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import LogoIcon from '@components/Logo/Logo.svg';

const Logo: FC = () => (
  <NavLink to="/" className="flex flex-shrink-0 items-center">
    <img className="h-12 w-auto" src={LogoIcon} alt="RZero logo" />
  </NavLink>
);

export default Logo;
