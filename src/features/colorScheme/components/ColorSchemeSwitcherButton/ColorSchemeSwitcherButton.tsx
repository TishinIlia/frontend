import React, { ForwardedRef, forwardRef } from 'react';
import Auto from '@components/Icons/Auto';
import Moon from '@components/Icons/Moon';
import Sun from '@components/Icons/Sun';
import ColorSchemeSwitcherValues from '@features/colorScheme/types';

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  scheme: ColorSchemeSwitcherValues;
}

const ColorSchemeSwitcherButton = forwardRef(({ onClick, scheme }: Props, ref: ForwardedRef<HTMLButtonElement>) => (
  <button
    type="button"
    aria-label="Change color scheme"
    className="rounded-full bg-background border-border w-7 h-7 flex items-center justify-center cursor-pointer text-primary"
    ref={ref}
    onClick={onClick}
  >
    {scheme === 'auto' && <Auto />}
    {scheme === 'dark' && <Moon />}
    {scheme === 'light' && <Sun />}
  </button>
));

ColorSchemeSwitcherButton.displayName = 'ColorSchemeSwitcherButton';

export default ColorSchemeSwitcherButton;
