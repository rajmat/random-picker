import React from "react";
import { ResultView, ContainedButton, OutlinedButton } from "../ui";

function ShowResult({ result, randomPick, goBack, emptyList }) {
  return (
    <ResultView result={result}>
      <ContainedButton small onClick={randomPick}>
        Pick again
      </ContainedButton>
      <ContainedButton small secondary onClick={emptyList}>
        Make a new list
      </ContainedButton>
      <OutlinedButton small secondary onClick={goBack}>
        Go back
      </OutlinedButton>
    </ResultView>
  );
}

export default ShowResult;
