import React from "react";
import { ResultView, ContainedButton, OutlinedButton } from "../ui";

function ShowResult({ result, randomPick, goBack, emptyList }) {
  return (
    <ResultView result={"🍺 " + result.text + " 🍺"} color={result.color}>
      <ContainedButton small color="primary" onClick={randomPick}>
        Újra
      </ContainedButton>
      <ContainedButton small color="secondary" onClick={emptyList}>
        Új lista
      </ContainedButton>
      <OutlinedButton small color="secondary" onClick={goBack}>
        Vissza
      </OutlinedButton>
    </ResultView>
  );
}

export default ShowResult;
