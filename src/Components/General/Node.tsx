import React, { useState } from "react";
import Cone from "Assets/cone.png";
import Cube from "Assets/cube.png";
import "./Node.css";
import { CurrentPiece, Rows, setCurrentPieceType } from "./Community";

enum Color {
  Red = "red",
  Blue = "blue",
  Background = "background-gray",
}

enum PieceTypes {
  Cone,
  Cube,
  Both,
}

interface Props {
  color?: Color;
  pieceType: PieceTypes;
  currentPiece: CurrentPiece;
  setCurrentPiece: setCurrentPieceType;
  row: Rows;
  index: number;
}

function Node({ color, pieceType, currentPiece, setCurrentPiece, row, index }: Props) {
  return (
    <div
      className="Node"
      style={{ backgroundColor: `var(--${color})` }}
      onClick={() => setCurrentPiece(row, index, nextPiece(pieceType, currentPiece))}
    >
      {currentPiece === "Cone" ? (
        <img src={Cone} />
      ) : currentPiece === "Cube" ? (
        <img src={Cube} />
      ) : (
        <></>
      )}
    </div>
  );
}

function nextPiece(pieceType: PieceTypes, currentPiece: CurrentPiece): CurrentPiece {
  if (pieceType == PieceTypes.Cone) {
    if (currentPiece == "Cone") return "None";
    return "Cone";
  } else if (pieceType == PieceTypes.Cube) {
    if (currentPiece == "Cube") return "None";
    return "Cube";
  } else {
    if (currentPiece == "None") return "Cone";
    else if (currentPiece == "Cone") return "Cube";
    return "None";
  }
}

export default Node;
export { Color, PieceTypes };
