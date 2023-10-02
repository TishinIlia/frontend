import React from 'react';

import Logo from '@components/Logo/Logo';
import ColorSchemeSwitcherDesktop from '@features/colorScheme/components/ColorSchemeSwitcherDesktop/ColorSchemeSwitcherDesktop';

const Header = () => (
  <header className="bg-background px-2 sm:px-6 lg:px-8 flex-grow-0">
    <div className="relative flex h-16 items-center justify-between">
      <Logo />

      <ColorSchemeSwitcherDesktop />
    </div>
  </header>
);

export default Header;
