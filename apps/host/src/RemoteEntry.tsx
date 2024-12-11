import { Suspense } from "react";
import { RemoteEntry } from "settings/RemoteEntry";
import { ErrorBoundary } from "react-error-boundary";

export const App = () => {
  return (
    <div className="p-1">
      <h1 className="text-5xl">Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <div className="border border-blue-500 p-2 rounded-lg">
        <h2 className="text-2xl">Remote Application</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <ErrorBoundary
            fallback={<div>Unable to load the Settings Remote</div>}
          >
            <RemoteEntry />
          </ErrorBoundary>
        </Suspense>
      </div>
    </div>
  );
};
