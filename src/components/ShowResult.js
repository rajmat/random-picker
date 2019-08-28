import React from "react";
import { ResultView, ActionButton } from "../ui";

function ShowResult({ result, randomize, goBack, emptyList }) {
  return (
    <ResultView result={result}>
      <ActionButton onClick={randomize}>Randomize again</ActionButton>
      <ActionButton onClick={emptyList}>New list</ActionButton>
      <ActionButton secondary onClick={goBack}>
        Go back
      </ActionButton>
    </ResultView>
  );
}

export default ShowResult;
