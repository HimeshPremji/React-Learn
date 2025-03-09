import React, { useContext } from "react";
import UserContext from "./UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div className="flex min-h-[90vh] w-screen items-center justify-center bg-gray-100 p-4 dark:bg-gray-900">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800">
        <div className="flex flex-col items-center">
          <img
            src={`https://ui-avatars.com/api/?name=${user.username}&background=random`}
            alt="User Avatar"
            className="mb-4 h-20 w-20 rounded-full border-4 border-gray-300 dark:border-gray-600"
          />

          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            {user.username || "Pappu"}
          </h2>

          <p className="mt-2 text-gray-600 dark:text-gray-300">
            🔒 Password:{" "}
            <span className="font-mono text-orange-600">
              {user.password || "••••••••"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
