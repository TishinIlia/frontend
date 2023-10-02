import React, { FC, useRef, useState } from 'react';
import Dropdown from '@components/Dropdown/Dropdown';
import useColorScheme from '@features/colorScheme/hooks';
import ColorSchemeSwitcherButton from '@features/colorScheme/components/ColorSchemeSwitcherButton/ColorSchemeSwitcherButton';
import ColorSchemeSwitcherMenu from '@features/colorScheme/components/ColorSchemeSwitcherMenu/ColorSchemeSwitcherMenu';

const ColorSchemeSwitcherDesktop: FC = () => {
  const { userScheme, setUserScheme } = useColorScheme();
  const [dropdownShown, setDropdownShown] = useState(false);
  const targetRef = useRef<HTMLButtonElement>(null);

  return (
    <div>
      <ColorSchemeSwitcherButton
        onClick={(event) => {
          event.stopPropagation();
          setDropdownShown(!dropdownShown);
        }}
        ref={targetRef}
        scheme={userScheme}
      />
      <Dropdown shown={dropdownShown} onShownChange={setDropdownShown} targetRef={targetRef}>
        <ColorSchemeSwitcherMenu
          className="w-52"
          selectedScheme={userScheme}
          onChangeScheme={(scheme) => setUserScheme(scheme)}
        />
      </Dropdown>
    </div>
  );
};

export default ColorSchemeSwitcherDesktop;
