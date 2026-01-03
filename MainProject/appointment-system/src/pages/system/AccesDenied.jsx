export default function AccessDenied() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center">
      <div>
        <h1 className="text-3xl font-bold text-red-600">Access Denied</h1>
        <p className="text-gray-500 mt-2">
          You do not have permission to access this page.
        </p>
      </div>
    </div>
  );
}