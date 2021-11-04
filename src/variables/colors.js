const base = {
  black: "#000000",
  white: "#fff",
  buttercupYellow: "#f39c12",
  jaffaOrange: "#f27935",
  teal: "#26a69a",
  jungleGreen: "#26c281",
  azraqBlue: "#4a69bd",
  dodgerBlue: "#0079C5",
  ceSoirPurple: "#a96dad",
  chestnutRose: "#d24d57",
  fieryFuchsia: "#B33771",
  fieryFuchsiaLighter: "#cc4182",
  magentaPurple: "#6D214F",
  magentaPurpleLighter: "#813964",
};

export default {
  ...base,
  primaryColor: base.black,
  primaryColorLighter: base.fieryFuchsiaLighter,
  secondaryColor: base.dodgerBlue,
  secondaryColorLighter: base.magentaPurpleLighter,
  itemColors: [
    base.azraqBlue,
    base.black,
  ],
};
