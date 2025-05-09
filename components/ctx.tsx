import {createContext, type PropsWithChildren, useContext} from 'react';
import {useStorageState} from '@/hooks/useStorageState';
import * as SecureStore from "expo-secure-store";
import {ACCESS_TOKEN} from "@/constants/StorageKeys";
import {jwtDecode} from "jwt-decode";
import {Platform} from "react-native";

const AuthContext = createContext<{
  signIn: () => Promise<void>;
  signOut: () => void;
  session?: any | null;
  isLoading: boolean;
}>({
  signIn: () => Promise.resolve(),
  signOut: () => null,
  session: null,
  isLoading: false,
});

export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

export function SessionProvider({children}: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session');

  return (
    <AuthContext.Provider
      value={{
        signIn: async () => {
          let token: string | null;
          if (Platform.OS === 'web') {
            token = localStorage.getItem(ACCESS_TOKEN);
          } else {
            token = await SecureStore.getItemAsync(ACCESS_TOKEN)
          }
          if (token) {
            const decoded = jwtDecode(token);
            const url = process.env.EXPO_PUBLIC_API_URL + '/users?email=' + (decoded as any).username;
            try {
              const response = await fetch(url, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`,
                }
              });
              const user = (await response.json())[0];
              setSession(user);
            } catch (e) {
              throw new Error('Invalid token, reconnect');
            }
          } else {
            throw new Error('No Token');
          }
        },
        signOut: async () => {
          if (Platform.OS === 'web') {
            localStorage.removeItem(ACCESS_TOKEN)
          } else {
            await SecureStore.deleteItemAsync(ACCESS_TOKEN)
          }
          setSession(null);
        },
        session,
        isLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
