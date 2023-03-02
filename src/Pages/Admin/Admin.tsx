import SmallButton from "Components/General/SmallButton";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

function Admin() {
  let navigate = useNavigate();

  return (
    <div className="Admin">
      <SmallButton onClick={() => navigate("/admin/community")} disabled={false}>
        View Community Json
      </SmallButton>
    </div>
  );
}

export default Admin;
