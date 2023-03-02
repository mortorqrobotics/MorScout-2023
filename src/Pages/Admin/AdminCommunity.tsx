import Community, { CommunityState } from "Components/General/Community";
import InputBox from "Components/General/InputBox";
import { defaultCommunity } from "Pages/Match/MatchScout/MatchScout";
import React, { useRef, useState } from "react";
import "./AdminCommunity.css";

function AdminCommunity() {
  let [communityJson, setCommunityJson] = useState(defaultCommunity);
  let [jsonText, setJsonText] = useState("");
  let communityRef = useRef(null);

  let handleSubmit = () => {
    try {
      let communityState = JSON.parse(jsonText);
      if (
        !communityState.hasOwnProperty("B") ||
        !communityState.hasOwnProperty("M") ||
        !communityState.hasOwnProperty("T")
      )
        throw "failed";
      console.log(communityState);
      setCommunityJson(communityState as CommunityState);
    } catch (e) {
      alert("Not valid community state");
    }
  };

  return (
    <div className="AdminCommunity">
      <Community
        defaultCommunity={communityJson}
        handleChange={() => {}}
        key={JSON.stringify(communityJson)}
      ></Community>
      <p>Insert Json Here!</p>
      <InputBox updateText={setJsonText} onSubmit={handleSubmit}></InputBox>
    </div>
  );
}

export default AdminCommunity;
