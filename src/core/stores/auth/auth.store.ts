import { tokenStorageService } from '@core/services/TokenStorage';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { create, resetAllStores } from '../_utils';

type State = {
  isLoginLoading: boolean;

  error: string | null;

  isLoggedIn: boolean;
};

type Action = {
  login: (email: string, password: string) => void;

  logout: () => void;
};

export type AuthState = State & Action;

const initialState: State = {
  error: null,
  isLoginLoading: false,
  isLoggedIn: !!tokenStorageService.getToken(),
};

export const useAuthStore = create<AuthState>()(
  devtools(
    immer((set) => ({
      ...initialState,
      login: (email, password) => {
        console.log(email, password);
        set({ isLoginLoading: true });
      },

      logout: () => {
        console.log('logout');

        resetAllStores();
      },
    })),
    { name: 'AuthStore' }
  )
);
