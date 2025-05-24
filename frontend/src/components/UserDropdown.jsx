import { useState } from "react";

export default function UserDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
          type="button"
          className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          onClick={() => setOpen(!open)}
      >
        <span className="sr-only">Open user menu</span>
        <img
            className="w-8 h-8 rounded-full"
            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="user photo"
          />
      </button>
        {open && (
        <div className="absolute right-0 mt-2 w-48 z-[100] bg-white divide-y divide-gray-100 rounded-md shadow-lg dark:bg-gray-700 dark:divide-gray-600">
          <div className="px-4 py-3" role="none">
            <p className="text-sm text-gray-900 dark:text-white">Admin</p>
            <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">
              Admin@test.com
            </p>
          </div>
          <ul className="py-1" role="none">
            <li>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-300 dark:hover:text-white">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-300 dark:hover:text-white">
                Settings
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-300 dark:hover:text-white">
                Earnings
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-300 dark:hover:text-white">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
