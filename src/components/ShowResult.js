import React, { useState, useEffect } from "react";
import { LoadingView, ResultView } from "../ui";

function ShowResult({ result, randomize, goBack, clearList }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  });

  if (isLoading) {
    return <LoadingView />;
  } else {
    return <ResultView result={result} randomize={randomize} goBack={goBack} clearList={clearList} />;
  }
}

export default ShowResult;
