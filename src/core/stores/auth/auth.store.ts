/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface AuthState {
  isLoginLoading: boolean;

  error: string | null;

  login: (email: string, password: string) => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    immer((set) => ({
      isLoginLoading: false,

      error: null,

      login: (email, password) => {
        console.log(email, password);
        set({ isLoginLoading: true });
      },
    })),
    { name: 'AuthStore' }
  )
);
