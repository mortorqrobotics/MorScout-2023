import BackArrow from "Components/General/BackArrow";
import Login, { PageOptions } from "Pages/Login";
import Matches from "Pages/Match/MatchSelector/Matches";
import MatchScout from "Pages/Match/MatchScout/MatchScout";
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import PitTeamList from "Pages/Match/PitScout/PitTeamList";
import PitScout from "Pages/Match/PitScout/PitScout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          element={
            <>
              <BackArrow />
              <Outlet />
            </>
          }
        >
          <Route path="/match/matches" element={<Matches />}></Route>
          <Route
            path="/match/:match/:team/login"
            element={<Login page={PageOptions.Match} />}
          ></Route>
          <Route path="/pit/:team/login" element={<Login page={PageOptions.Pit} />}></Route>
          <Route path="/pit/teams" element={<PitTeamList />}></Route>
          <Route path="/pit/:team/scout" element={<PitScout />}></Route>
        </Route>
        <Route path="/match/:match/:team/scout" element={<MatchScout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
