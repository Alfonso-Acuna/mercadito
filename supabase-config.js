window.SUPABASE_URL = "https://epmfbzcerrfdoijdvude.supabase.co";
window.SUPABASE_ANON_KEY = "sb_publishable_JCiYvgdfK4FvbpO8sNrj-A_8bzS20wc";
window.supabaseClient = null;

if (window.supabase && window.SUPABASE_URL.startsWith("https://") &&
    !window.SUPABASE_ANON_KEY.includes("PEGA_AQUI")) {
  window.supabaseClient = window.supabase.createClient(
    window.SUPABASE_URL,
    window.SUPABASE_ANON_KEY
  );
}
