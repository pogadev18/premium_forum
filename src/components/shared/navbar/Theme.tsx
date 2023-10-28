'use client';

import { useTheme } from '@/context/ThemeProvider';
import {
  Menubar,
  //   MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  //   MenubarRadioGroup,
  //   MenubarRadioItem,
  //   MenubarSeparator,
  //   MenubarShortcut,
  //   MenubarSub,
  //   MenubarSubContent,
  //   MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar';
import Image from 'next/image';
import { themes } from '@/constants';

const Theme = () => {
  const { mode, setMode } = useTheme();

  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
          {mode === 'light' ? (
            <Image
              src="/assets/icons/sun.svg"
              alt="Image of a Sun"
              width={20}
              height={20}
              className="active-theme"
            />
          ) : (
            <Image
              src="/assets/icons/moon.svg"
              alt="Image of a Moon"
              width={20}
              height={20}
              className="active-theme"
            />
          )}
        </MenubarTrigger>
        <MenubarContent className="absolute right-[-3rem] mt-3 min-w-[120px] rounded border bg-light-900 py-2 dark:border-dark-400 dark:bg-dark-300">
          {themes.map(({ value, label, icon }) => (
            <MenubarItem
              key={value}
              onClick={() => {
                setMode(value);

                if (value !== 'system') {
                  localStorage.theme = value;
                } else {
                  localStorage.removeItem('theme');
                }
              }}
              className="flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400"
            >
              <Image
                src={icon}
                alt={value ?? 'Theme Icon'}
                width={16}
                height={16}
                className={`${mode === value && 'active-theme'}`}
              />
              <p
                className={`body-semibold text-light-500 ${
                  mode === value ? 'text-primary-500' : 'text-dark100_light900'
                }`}
              >
                {label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
