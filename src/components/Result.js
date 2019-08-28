import React from "react";
import { ResultView, ContainedButton } from "../ui";

function ShowResult({ result, randomPick, goBack, emptyList }) {
  return (
    <ResultView result={result}>
      <ContainedButton onClick={randomPick}>Pick again</ContainedButton>
      <ContainedButton onClick={emptyList}>Make a new list</ContainedButton>
      <ContainedButton secondary onClick={goBack}>
        Go back
      </ContainedButton>
    </ResultView>
  );
}

export default ShowResult;
