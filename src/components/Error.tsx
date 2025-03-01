export const Error = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col items-center space-y-4 rounded-lg border border-blue-600 p-6 shadow-lg">
        <h2 className="text-xl font-semibold text-blue-600">
          Oops, something went wrong 😞
        </h2>
        <p className="text-sm opacity-80">
          Try refreshing the page or check your connection.
        </p>
        <button
          className="rounded-md border border-blue-600 px-4 py-2 font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white"
          onClick={() => window.location.assign(window.location.origin)}
        >
          Refresh
        </button>
      </div>
    </div>
  );
};
