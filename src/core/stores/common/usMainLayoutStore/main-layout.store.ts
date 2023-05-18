import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type Size = {
  sidebar: {
    width: number;
    collapsedWidth: number;
  };
};

interface State {
  isCollapsed: boolean;

  size: 'sm' | 'lg';

  sizeMap: Size;
}

interface Actions {
  toggleCollapsed: () => void;

  setIsCollapsed: (isCollapsed: boolean) => void;

  onChangeSize: (size: 'sm' | 'lg') => void;
}

const collapsedSidebarWidth = 60;

const initialState: State = {
  isCollapsed: window?.innerWidth <= 991,
  size: window?.innerWidth <= 991 ? 'sm' : 'lg',
  sizeMap: {
    sidebar: {
      width: 260,
      collapsedWidth: collapsedSidebarWidth,
    },
  },
};

export type MainLayoutStore = State & Actions;

export const useMainLayoutStore = create<MainLayoutStore>()(
  devtools(
    immer((set) => ({
      ...initialState,
      onChangeSize: (size) => {
        set(() => ({ size }));
      },
      toggleCollapsed: () => {
        set((state) => ({
          isCollapsed: !state.isCollapsed,
        }));
      },
      setIsCollapsed: (isCollapsed) => {
        set(() => ({ isCollapsed }));
      },
    })),
    { name: 'MainLayoutStore' }
  )
);
