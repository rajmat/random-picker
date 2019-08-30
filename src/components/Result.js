import React from "react";
import { ResultView, ContainedButton, OutlinedButton } from "../ui";

function ShowResult({ result, randomPick, goBack, emptyList }) {
  return (
    <ResultView result={result}>
      <ContainedButton small color="primary" onClick={randomPick}>
        Pick again
      </ContainedButton>
      <ContainedButton small color="secondary" onClick={emptyList}>
        Make a new list
      </ContainedButton>
      <OutlinedButton small color="secondary" onClick={goBack}>
        Go back
      </OutlinedButton>
    </ResultView>
  );
}

export default ShowResult;
