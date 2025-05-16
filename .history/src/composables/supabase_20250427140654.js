import { createClient } from '@supabase/supabase-js';
const supabaseUrl = import.meta.env.VITE_API_URL;
const supabaseKey = 'your-anon-key';
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;