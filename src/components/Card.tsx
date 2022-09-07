export const Card = ({ user }: any) => {
  return (
    <div className="container mx-auto p-4 w-80 m-16 flex text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
        {user.name}
      </h5>
      <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
        Stay up to date and move work forward with Flowbite on iOS & Android.
        Download the app today.
      </p>
    </div>
  );
};
