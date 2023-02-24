import React from "react";
import Node, { Color, PieceTypes } from "./Node";
import "./Community.css";

function Community() {
  return (
    <div className="Community">
      <Node color={Color.Red} pieceType={PieceTypes.Cone}></Node>
      <Node color={Color.Blue} pieceType={PieceTypes.Cube}></Node>
      <Node color={Color.Red} pieceType={PieceTypes.Cone}></Node>
      <Node color={Color.Background} pieceType={PieceTypes.Cone}></Node>
      <Node color={Color.Blue} pieceType={PieceTypes.Cube}></Node>
      <Node color={Color.Background} pieceType={PieceTypes.Cone}></Node>
      <Node color={Color.Red} pieceType={PieceTypes.Cone}></Node>
      <Node color={Color.Blue} pieceType={PieceTypes.Cube}></Node>
      <Node color={Color.Red} pieceType={PieceTypes.Cone}></Node>
      <Node color={Color.Red} pieceType={PieceTypes.Cone}></Node>
      <Node color={Color.Blue} pieceType={PieceTypes.Cube}></Node>
      <Node color={Color.Red} pieceType={PieceTypes.Cone}></Node>
      <Node color={Color.Background} pieceType={PieceTypes.Cone}></Node>
      <Node color={Color.Blue} pieceType={PieceTypes.Cube}></Node>
      <Node color={Color.Background} pieceType={PieceTypes.Cone}></Node>
      <Node color={Color.Red} pieceType={PieceTypes.Cone}></Node>
      <Node color={Color.Blue} pieceType={PieceTypes.Cube}></Node>
      <Node color={Color.Red} pieceType={PieceTypes.Cone}></Node>
      <Node color={Color.Red} pieceType={PieceTypes.Both}></Node>
      <Node color={Color.Blue} pieceType={PieceTypes.Both}></Node>
      <Node color={Color.Red} pieceType={PieceTypes.Both}></Node>
      <Node color={Color.Background} pieceType={PieceTypes.Both}></Node>
      <Node color={Color.Blue} pieceType={PieceTypes.Both}></Node>
      <Node color={Color.Background} pieceType={PieceTypes.Both}></Node>
      <Node color={Color.Red} pieceType={PieceTypes.Both}></Node>
      <Node color={Color.Blue} pieceType={PieceTypes.Both}></Node>
      <Node color={Color.Red} pieceType={PieceTypes.Both}></Node>
    </div>
  );
}

export default Community;
