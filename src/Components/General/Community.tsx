import React, { useState } from "react";
import Node, { Color, PieceTypes } from "./Node";
import "./Community.css";
import cloneDeep from "lodash.clonedeep";

type CurrentPiece = "Cone" | "Cube" | "None";

type CommunityRow = [
  CurrentPiece,
  CurrentPiece,
  CurrentPiece,
  CurrentPiece,
  CurrentPiece,
  CurrentPiece,
  CurrentPiece,
  CurrentPiece,
  CurrentPiece
];

interface CommunityState {
  B: CommunityRow;
  M: CommunityRow;
  T: CommunityRow;
}

type Rows = keyof CommunityState;

let defaultCommunity = {
  B: [...new Array(9).fill(0).map(() => "None")] as CommunityRow,
  M: [...new Array(9).fill(0).map(() => "None")] as CommunityRow,
  T: [...new Array(9).fill(0).map(() => "None")] as CommunityRow,
};

let communityColors = [
  Color.Red,
  Color.Blue,
  Color.Red,
  Color.Background,
  Color.Blue,
  Color.Background,
  Color.Red,
  Color.Blue,
  Color.Red,
];

let communityPieceTypes = [
  PieceTypes.Cone,
  PieceTypes.Cube,
  PieceTypes.Cone,
  PieceTypes.Cone,
  PieceTypes.Cube,
  PieceTypes.Cone,
  PieceTypes.Cone,
  PieceTypes.Cube,
  PieceTypes.Cone,
];

type setCurrentPieceType = (row: Rows, index: number, newValue: CurrentPiece) => void;

function Community() {
  let [communityState, setCommunityState] = useState<CommunityState>(defaultCommunity);

  let setCurrentPiece = (row: Rows, index: number, newValue: CurrentPiece) => {
    let newCommunityState = cloneDeep(communityState);
    newCommunityState[row][index] = newValue;
    setCommunityState(communityState);
    console.log(newCommunityState);
  };

  return (
    <div className="Community">
      {communityColors.map((color, i) => {
        return (
          <Node
            color={color}
            pieceType={communityPieceTypes[i]}
            currentPiece={communityState["T"][i]}
            row={"T"}
            index={i}
            key={"T" + i}
            setCurrentPiece={setCurrentPiece}
          ></Node>
        );
      })}
      {communityColors.map((color, i) => {
        return (
          <Node
            color={color}
            pieceType={communityPieceTypes[i]}
            currentPiece={communityState["M"][i]}
            row={"M"}
            index={i}
            key={"M" + i}
            setCurrentPiece={setCurrentPiece}
          ></Node>
        );
      })}
      {communityColors.map((color, i) => {
        return (
          <Node
            color={color}
            pieceType={communityPieceTypes[i]}
            currentPiece={communityState["B"][i]}
            row={"B"}
            index={i}
            key={"B" + i}
            setCurrentPiece={setCurrentPiece}
          ></Node>
        );
      })}
    </div>
  );
}

export default Community;
export type { CommunityState, CurrentPiece, setCurrentPieceType, Rows };
