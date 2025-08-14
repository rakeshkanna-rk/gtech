import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mohazvmqefntxpaczvub.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vaGF6dm1xZWZudHhwYWN6dnViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUwODE3NDAsImV4cCI6MjA3MDY1Nzc0MH0.rhmOpHRmsR6bf3JXFzb2b_512Oq_KToKnSetJKkBZws";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
