import React from "react";
import { ResultView, ActionButton } from "../ui";

function ShowResult({ result, randomPick, goBack, emptyList }) {
  return (
    <ResultView result={result}>
      <ActionButton onClick={randomPick}>Pick again</ActionButton>
      <ActionButton onClick={emptyList}>Make a new list</ActionButton>
      <ActionButton secondary onClick={goBack}>
        Go back
      </ActionButton>
    </ResultView>
  );
}

export default ShowResult;
