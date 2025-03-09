import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <div className="relative flex min-h-[90vh] w-screen flex-col items-center justify-center bg-white p-6 text-center dark:bg-[#121212]">
      <img
        src={data?.avatar_url || ""}
        alt="Profile"
        className="mb-4 h-32 w-32 rounded-full shadow-lg"
      />

      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
        {data?.name || "No Name"}
      </h1>

      <a
        href={data?.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 text-lg font-medium text-blue-600 hover:underline dark:text-blue-400"
      >
        @{data?.login}
      </a>

      {data?.bio && (
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          {data?.bio}
        </p>
      )}

      <div className="mt-4 flex space-x-6 text-lg">
        <p className="font-semibold text-gray-800 dark:text-gray-200">
          🔥 Followers:{" "}
          <span className="text-orange-600 dark:text-orange-400">
            {data?.followers}
          </span>
        </p>
        <p className="font-semibold text-gray-800 dark:text-gray-200">
          🌟 Repos:{" "}
          <span className="text-orange-600 dark:text-orange-400">
            {data?.public_repos}
          </span>
        </p>
        <p className="font-semibold text-gray-800 dark:text-gray-200">
          🏠 Location:{" "}
          <span className="text-orange-600 dark:text-orange-400">
            {data?.location || "Unknown"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const result = await fetch("https://api.github.com/users/HimeshPremji");
  return result.json();
};
