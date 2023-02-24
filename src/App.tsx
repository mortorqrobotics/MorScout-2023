import Login from "Pages/Login";
import Matches from "Pages/Match/MatchSelector/Matches";
import MatchScout from "Pages/Match/MatchScout/MatchScout";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import CommunityPage from "Pages/Match/MatchScout/CommunityPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/match/matches" element={<Matches />}></Route>
        <Route path="/match/:match/:team/login" element={<Login />}></Route>
        <Route path="/match/:match/:team/scout" element={<MatchScout />}></Route>
        <Route path="/match/:match/:team/scout/community" element={<CommunityPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
