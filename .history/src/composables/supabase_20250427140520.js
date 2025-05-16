import { createClient } from '@supabase/supabase-js';

// Thay thế với URL Supabase và khoá API của bạn
const supabaseUrl = 'https://your-project-id.supabase.co';
const supabaseKey = 'your-anon-key';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;