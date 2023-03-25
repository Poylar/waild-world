import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { I_Color, theme } from './Themes';

interface I_UseTheme {
  theme: string;
  themeState: I_Color;
  rememberTheme?: boolean;
  changeTheme: (newTheme?: string) => void;
}

const useThemeStore = create<I_UseTheme>()(
  persist(
    (set, get) => ({
      theme: 'light',
      themeState: theme.colors['light'],
      changeTheme: (newTheme) => {
        set(() => {
          const currentNewTheme =
            newTheme === 'light' ? 'light' : newTheme === 'dark' ? 'dark' : null;
          const anotherTheme = get().theme === 'light' ? 'dark' : 'light';
          const currentTheme = currentNewTheme !== null ? currentNewTheme : anotherTheme;

          return { theme: currentTheme, themeState: theme.colors[currentTheme] };
        });
      },
    }),
    {
      name: 'themeStore',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ theme: state.theme, themeState: state.themeState }),
    },
  ),
);

export default useThemeStore;
