import { CommunityRow, CommunityState } from "../types/matchTypes.ts";

function getRowPieceCount(communityRow: CommunityRow): number {
  return communityRow.filter((item) => item !== "None").length;
}

function calculateGamePieceCount(communityState: CommunityState): number {
  return (
    getRowPieceCount(communityState.B) +
    getRowPieceCount(communityState.M) +
    getRowPieceCount(communityState.T)
  );
}

/**
 * Bottom Middle Top
 */
const autoMultiplier = [3, 4, 6];
const teleopMultiplier = [2, 3, 5];
type multiplier = typeof autoMultiplier | typeof teleopMultiplier;

function calculateGamePiecePoints(communityState: CommunityState, multiplier: multiplier): number {
  return (
    getRowPieceCount(communityState.B) * multiplier[0] +
    getRowPieceCount(communityState.M) * multiplier[1] +
    getRowPieceCount(communityState.T) * multiplier[2]
  );
}

export {
  getRowPieceCount,
  calculateGamePieceCount,
  calculateGamePiecePoints,
  autoMultiplier,
  teleopMultiplier,
};
