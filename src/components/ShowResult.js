import React, { useState, useEffect } from "react";
import { LoadingView, ResultView, ActionButton } from "../ui";

function ShowResult({ result, randomize, goBack, clearList }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  });

  if (isLoading) {
    return <LoadingView />;
  } else {
    return (
      <ResultView result={result}>
        <ActionButton onClick={randomize}>Randomize again</ActionButton>
        <ActionButton onClick={clearList}>New list</ActionButton>
        <ActionButton secondary onClick={goBack}>
          Go back
        </ActionButton>
      </ResultView>
    );
  }
}

export default ShowResult;
