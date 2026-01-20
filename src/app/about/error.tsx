"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function AboutPageError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
  }, []);
  return (
    <div>
      <h1>Something went wrong:please try again later</h1>
      <Button onClick={() => reset()}>Retry</Button>
    </div>
  );
}
