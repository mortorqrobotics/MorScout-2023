import { useLayoutEffect, useState } from "react";

function useTeams() {
  let [teams, setTeams] = useState<string[][]>([]);

  useLayoutEffect(() => {
    let getData = async () => {
      let response = await fetch(
        `https://dcgnonpccjghlrgernjw.functions.supabase.co/server/api/teams`
      );
      let data = await response.json();
      setTeams(data);
    };
    getData();
  }, []);

  return teams;
}

export default useTeams;
