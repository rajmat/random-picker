import { colors } from "../variables";

export function assignColorToListItem(list) {
  const palette = colors.itemColors;
  if (!list.length) return palette[0];
  const previousItemColor = list[0].color;
  const previousColorIndex = palette.findIndex(color => color === previousItemColor);
  if (previousColorIndex === palette.length - 1) return palette[0];
  const colorToAssign = palette[previousColorIndex +1];
  return colorToAssign;
}