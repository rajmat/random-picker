const base = {
  white: "#fff",
  buttercupYellow: "#f39c12",
  jaffaOrange: "#f27935",
  teal: "#26a69a",
  jungleGreen: "#26c281",
  azraqBlue: "#4a69bd",
  dodgerBlue: "#22a7f0",
  ceSoirPurple: "#a96dad",
  chestnutRose: "#d24d57",
  fieryFuchsia: "#B33771",
  fieryFuchsiaLighter: "#cc4182",
  magentaPurple: "#6D214F",
  magentaPurpleLighter: "#813964",
};

export default {
  ...base,
  primaryColor: base.fieryFuchsia,
  primaryColorLighter: base.fieryFuchsiaLighter,
  secondaryColor: base.magentaPurple,
  secondaryColorLighter: base.magentaPurpleLighter,
  itemColors: [
    base.azraqBlue,
    base.chestnutRose,
    base.teal, 
    base.buttercupYellow,
    base.dodgerBlue,
    base.jaffaOrange, 
    base.jungleGreen,
    base.ceSoirPurple,
  ],
};
