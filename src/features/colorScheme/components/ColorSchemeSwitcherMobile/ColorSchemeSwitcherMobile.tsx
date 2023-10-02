import React, { FC } from 'react';
import clsx from 'clsx';
import useColorScheme from '@features/colorScheme/hooks';
import ColorSchemeSwitcherButton from '@features/colorScheme/components/ColorSchemeSwitcherButton/ColorSchemeSwitcherButton';
import ColorSchemeSwitcherMenu from '@features/colorScheme/components/ColorSchemeSwitcherMenu/ColorSchemeSwitcherMenu';

interface Props {
  onClickSchemeButton: () => never;
  onChangeScheme: () => void;
  isMenuActive: boolean;
}

const ColorSchemeSwitcherMobile: FC<Props> = ({ onClickSchemeButton, isMenuActive, onChangeScheme }) => {
  const { userScheme, setUserScheme } = useColorScheme();

  return (
    <div className={clsx('color-scheme-switcher-mobile', isMenuActive && 'color-scheme-switcher-mobile--opened')}>
      {isMenuActive ? (
        <ColorSchemeSwitcherMenu
          selectedScheme={userScheme}
          onChangeScheme={(scheme) => {
            setUserScheme(scheme);
            onChangeScheme();
          }}
        />
      ) : (
        <ColorSchemeSwitcherButton onClick={onClickSchemeButton} scheme={userScheme} />
      )}
    </div>
  );
};

export default ColorSchemeSwitcherMobile;
