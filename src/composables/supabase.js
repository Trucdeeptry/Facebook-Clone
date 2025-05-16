import { createClient } from '@supabase/supabase-js';
import Cookies from 'js-cookie'
const cookieStorage = {
    getItem: (key) => {
      return Cookies.get(key)
    },
    setItem: (key, value) => {
      Cookies.set(key, value, {
        expires: 30,       
        secure: true,     
        sameSite: 'Strict', 
      })
    },
    removeItem: (key) => {
      Cookies.remove(key)
    },
  }
const supabaseUrl = import.meta.env.VITE_API_URL;
const supabaseKey = import.meta.env.VITE_API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
        storage: cookieStorage,
        storageKey: 'supabase.auth.token',
        autoRefreshToken: true,
        persistSession: true,
    }
});
export default supabase;