// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cimbquciphtwbtwxitcg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpbWJxdWNpcGh0d2J0d3hpdGNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxMDUyMTMsImV4cCI6MjA2ODY4MTIxM30.YTF6HyM2t_kbfe3RDZInrUVLgUKWvrZ9dDABl-3zfHA'; // From Supabase → Project Settings → API

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
