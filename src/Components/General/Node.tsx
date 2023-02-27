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
      onClick={() => cycleNode(pieceType, currentPiece, row, index, setCurrentPiece)}
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

function cycleNode(
  pieceType: PieceTypes,
  currentPiece: CurrentPiece,
  row: Rows,
  index: number,
  setPiece: setCurrentPieceType
) {
  if (pieceType == PieceTypes.Cone) {
    if (currentPiece == "Cone") return setPiece(row, index, "None");
    setPiece(row, index, "Cone");
  } else if (pieceType == PieceTypes.Cube) {
    if (currentPiece == "Cube") return setPiece(row, index, "None");
    setPiece(row, index, "Cube");
  } else {
    if (currentPiece == "None") return setPiece(row, index, "Cone");
    else if (currentPiece == "Cone") return setPiece(row, index, "Cube");
    setPiece(row, index, "None");
  }
}

export default Node;
export { Color, PieceTypes };
