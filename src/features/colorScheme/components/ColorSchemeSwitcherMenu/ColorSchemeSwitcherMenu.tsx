import React, { FC } from 'react';

import Auto from '@components/Icons/Auto';
import Moon from '@components/Icons/Moon';
import Sun from '@components/Icons/Sun';
import ColorSchemeSwitcherValues from '@features/colorScheme/types';
import Check from '../../../../images/check.svg';

interface Props {
  selectedScheme: ColorSchemeSwitcherValues;
  onChangeScheme: (schema: ColorSchemeSwitcherValues) => void;
  className?: string;
}

const ColorSchemeSwitcherMenu: FC<Props> = ({ selectedScheme, onChangeScheme, className }) => (
  <div className={className} role="listbox">
    <button
      type="button"
      aria-selected={selectedScheme === 'auto'}
      role="option"
      onClick={() => onChangeScheme('auto')}
      className="flex items-center justify-start text-foreground cursor-pointer w-full py-3.5 px-4 box-border focus-visible:outline-0 focus-visible:shadow-secondary focus-visible:shadow-inner group"
    >
      <Auto />
      <span className="font-medium font text-base ml-3 group-hover:text-secondary">Auto</span>
      {selectedScheme === 'auto' && <img aria-hidden className="ml-auto" src={Check} alt="Selected scheme" />}
    </button>
    <button
      type="button"
      aria-selected={selectedScheme === 'light'}
      role="option"
      className="flex items-center justify-start text-foreground cursor-pointer w-full py-3.5 px-4 box-border focus-visible:outline-0 focus-visible:shadow-secondary focus-visible:shadow-inner group"
      onClick={() => onChangeScheme('light')}
    >
      <Sun />
      <span className="font-medium font text-base ml-3  group-hover:text-secondary">Light</span>
      {selectedScheme === 'light' && <img aria-hidden className="ml-auto" src={Check} alt="Selected scheme" />}
    </button>
    <button
      type="button"
      aria-selected={selectedScheme === 'dark'}
      role="option"
      className="flex items-center justify-start text-foreground cursor-pointer w-full py-3.5 px-4 box-border focus-visible:outline-0 focus-visible:shadow-secondary focus-visible:shadow-inner group"
      onClick={() => onChangeScheme('dark')}
    >
      <Moon />
      <span className="font-medium font text-base ml-3  group-hover:text-secondary">Dark</span>
      {selectedScheme === 'dark' && <img aria-hidden className="ml-auto" src={Check} alt="Selected scheme" />}
    </button>
  </div>
);

export default ColorSchemeSwitcherMenu;
