import React, { useState } from "react";
import Cone from "Assets/cone.png";
import Cube from "Assets/cube.png";
import "./Node.css";

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

enum CurrentPiece {
  Cone,
  Cube,
  None,
}

interface Props {
  color?: Color;
  pieceType: PieceTypes;
}

function Node({ color, pieceType }: Props) {
  let [piece, setPiece] = useState(CurrentPiece.None);
  return (
    <div
      className="Node"
      style={{ backgroundColor: `var(--${color})` }}
      onClick={() => cycleNode(pieceType, piece, setPiece)}
    >
      {piece == CurrentPiece.Cone ? (
        <img src={Cone} />
      ) : piece == CurrentPiece.Cube ? (
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
  setPiece: React.Dispatch<React.SetStateAction<CurrentPiece>>
) {
  if (pieceType == PieceTypes.Cone) {
    if (currentPiece == CurrentPiece.Cone) return setPiece(CurrentPiece.None);
    setPiece(CurrentPiece.Cone);
  } else if (pieceType == PieceTypes.Cube) {
    if (currentPiece == CurrentPiece.Cube) return setPiece(CurrentPiece.None);
    setPiece(CurrentPiece.Cube);
  } else {
    if (currentPiece == CurrentPiece.None) return setPiece(CurrentPiece.Cone);
    else if (currentPiece == CurrentPiece.Cone) return setPiece(CurrentPiece.Cube);
    setPiece(CurrentPiece.None);
  }
}

export default Node;
export { Color, PieceTypes };
