import { Link } from "react-router-dom";

function NoPageFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-900 mb-8">404</h1>
      <p className="text-xl font-medium text-gray-900 mb-4">
        Oops! Page not found
      </p>
      <p className="text-gray-600 mb-8">
        The page you are looking for might have been removed or is temporarily
        unavailable or you don't have authority to access.
      </p>
      <Link
        to="/classtimetable"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Back to Timetable
      </Link>
    </div>
  );
}

export default NoPageFound;
