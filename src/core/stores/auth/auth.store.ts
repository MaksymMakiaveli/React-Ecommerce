import { HttpService } from '@core/services/HttpService';
import { tokenStorageService } from '@core/services/TokenStorage';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { create, resetAllStores } from '../_utils';

import type { SigninDto, SigninEntity } from '@core/repositories/auth';

type State = {
  isLoginLoading: boolean;

  error: string | null;

  isLoggedIn: boolean;
};

type Action = {
  login: (dto: SigninDto) => Promise<void>;

  logout: () => void;
};

export type AuthState = State & Action;

const initialState: State = {
  error: null,
  isLoginLoading: false,
  isLoggedIn: !!tokenStorageService.getToken(),
};

const httpService = new HttpService('auth');

export const useAuthStore = create<AuthState>()(
  devtools(
    immer((set) => ({
      ...initialState,
      login: async (dto: SigninDto) => {
        try {
          const response = await httpService.post<SigninEntity>('login', dto);
          tokenStorageService.setToken(response.data.token);
          set({ isLoginLoading: true });
        } catch (e) {
          set({ isLoginLoading: false });
        }
      },

      logout: () => {
        console.log('logout');

        resetAllStores();
      },
    })),
    { name: 'AuthStore' }
  )
);
