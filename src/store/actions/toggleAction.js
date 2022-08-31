export const TOGGLE_LIKE = "TOGGLE_FAVORITE";

export function toggleAction(value) {
  return {
    type: TOGGLE_LIKE,
    value
  }
}