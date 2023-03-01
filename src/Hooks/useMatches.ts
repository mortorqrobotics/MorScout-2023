import { useLayoutEffect, useState } from "react";

function useMatches() {
  let [matches, setMatches] = useState<string[][]>([]);

  useLayoutEffect(() => {
    let getData = async () => {
      let response = await fetch(
        `https://dcgnonpccjghlrgernjw.functions.supabase.co/server/api/matchTeams`
      );
      let data = await response.json();
      setMatches(data);
    };
    getData();
  }, []);

  return matches;
}

export default useMatches;
