// src/supabaseClient.ts

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://dpjjjgckunemmnvzgzia.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwampqZ2NrdW5lbW1udnpnemlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM4ODQwNDAsImV4cCI6MjA0OTQ2MDA0MH0.eHTBe-KIwDD9_YJWyhQadqxd_1tJWaN8htmvH0I4wso';

// const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL!;
// const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY!;

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
