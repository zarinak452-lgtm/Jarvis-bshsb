import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

serve(async (req) => {
  const { messages } = await req.json();
  return new Response(JSON.stringify({ messages }), {
    headers: { "Content-Type": "application/json" },
  });
});
