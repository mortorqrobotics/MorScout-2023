import { Match, Team } from "../types/types.ts";

const TBA_KEY: string = Deno.env.get("BLUE_ALLIANCE_KEY") as string;
const EVENT: string = Deno.env.get("EVENT") as string;

async function getMatchTeams(): Promise<string[][]> {
  const matchTeams: string[][] = [];

  const response = await fetch(`https://www.thebluealliance.com/api/v3/event/${EVENT}/matches`, {
    method: "GET",
    headers: {
      "X-TBA-Auth-Key": TBA_KEY,
    },
  });
  const data: Match[] = await response.json();
  data.sort((a, b) => a.time - b.time);
  data.forEach((object) => {
    matchTeams.push([
      ...object.alliances.blue.team_keys.map((str) => str.slice(3)),
      ...object.alliances.red.team_keys.map((str) => str.slice(3)),
    ]);
  });

  return matchTeams;
}

async function getTeams(): Promise<string[]> {
  const teams: string[] = [];
  const response = await fetch(`https://www.thebluealliance.com/api/v3/event/${EVENT}/teams`, {
    method: "GET",
    headers: {
      "X-TBA-Auth-Key": TBA_KEY,
    },
  });
  const data: Team[] = await response.json();
  console.log(data);
  data.forEach((object) => {
    teams.push(object.team_number.toString());
  });
  teams.sort((a, b) => parseInt(a) - parseInt(b));

  return teams;
}

export { getMatchTeams, getTeams };
