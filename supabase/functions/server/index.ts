import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { getMatchTeams, getTeams } from "./blueAllianceController.ts";
import { createMatchDatabase } from "./matchScoutController.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";
import { createPitDatabase } from "./pitScoutController.ts";

const supabaseClient = createClient(
  // Supabase API URL - env var exported by default.
  Deno.env.get("SUPABASE_URL") ?? "",
  // Supabase API ANON KEY - env var exported by default.
  Deno.env.get("SUPABASE_ANON_KEY") ?? ""
  // Create client with Auth context of the user that called the function.
  // This way your row-level-security (RLS) policies are applied.
  // { global: { headers: { Authorization: req.headers.get("Authorization")! } } }
);

const BASE_URL = "/server";

const BASE_ROUTE = new URLPattern({ pathname: `${BASE_URL}/` });
const MATCH_ROUTE = new URLPattern({ pathname: `${BASE_URL}/api/matchTeams` });
const TEAMS_ROUTE = new URLPattern({ pathname: `${BASE_URL}/api/teams` });
const MATCH_POST_ROUTE = new URLPattern({ pathname: `${BASE_URL}/api/matchScout` });
const PIT_POST_ROUTE = new URLPattern({ pathname: `${BASE_URL}/api/pitScout` });

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (BASE_ROUTE.test(req.url)) {
    return new Response("Hello World!");
  }

  if (MATCH_ROUTE.test(req.url)) {
    const matchTeams = await getMatchTeams();
    return new Response(JSON.stringify(matchTeams), {
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  if (TEAMS_ROUTE.test(req.url)) {
    const teams = await getTeams();
    return new Response(JSON.stringify(teams), {
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  if (MATCH_POST_ROUTE.test(req.url)) {
    if (req.method === "POST") {
      const data = await req.json();
      const matchData = createMatchDatabase(data);

      await supabaseClient.from("MatchScout").insert([matchData]);

      return new Response(JSON.stringify({ success: true }), {
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }
  }

  if (PIT_POST_ROUTE.test(req.url)) {
    if (req.method === "POST") {
      const data = await req.json();
      const pitData = createPitDatabase(data);

      await supabaseClient.from("PitScout").insert([pitData]);

      return new Response(JSON.stringify({ success: true }), {
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }
  }

  return new Response("Route not found");
});
