/* eslint-disable @typescript-eslint/no-unused-vars */
import {tokenStorageService} from '@core/services/TokenStorage';
import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';

import type {NonFunctionProperties} from '@shared/types';

interface AuthState {
  isLoginLoading: boolean;

  error: string | null;

  isLoggedIn: boolean;

  login: (email: string, password: string) => void;
}

const initialState: NonFunctionProperties<AuthState> = {
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
    })),
    { name: 'AuthStore' }
  )
);
