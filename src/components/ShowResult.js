import React from "react";
import { LoadingView, ResultView, ActionButton } from "../ui";

function ShowResult({ result, randomize, goBack, clearList }) {
  if (result) {
    return (
      <ResultView result={result}>
        <ActionButton onClick={randomize}>Randomize again</ActionButton>
        <ActionButton onClick={clearList}>New list</ActionButton>
        <ActionButton secondary onClick={goBack}>
          Go back
        </ActionButton>
      </ResultView>
    );
  } else {
    return <LoadingView />;
  }
}

export default ShowResult;
