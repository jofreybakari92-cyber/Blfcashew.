import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/main")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});
