// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/v110/@supabase/supabase-js@2.10.0/dist/module/index";
import { MatchDatabase } from "../types/matchTypes.ts";
import { fillMatchData, updateMatchData } from "./blueAlliance.ts";

const supabaseClient = createClient(
  // Supabase API URL - env var exported by default.
  Deno.env.get("SUPABASE_URL") ?? "",
  // Supabase API ANON KEY - env var exported by default.
  Deno.env.get("SUPABASE_ANON_KEY") ?? ""
  // Create client with Auth context of the user that called the function.
  // This way your row-level-security (RLS) policies are applied.
  // { global: { headers: { Authorization: req.headers.get("Authorization")! } } }
);

serve(async () => {
  let currentSelect = await supabaseClient.from("MatchScout").select("*");
  if (!currentSelect.data) return new Response("failed to get data");
  let currentData = currentSelect.data as MatchDatabase[];
  await updateMatchData();

  for (let row of currentData) {
    if (!row.match_number || !row.team_number) continue;
    let updatedData = await fillMatchData(row, row.match_number, row.team_number);
    if (!updatedData) continue;
    await supabaseClient.from("MatchScout").upsert(updatedData);
  }

  return new Response("success!");
});

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
