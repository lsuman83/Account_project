export const ResourceInfo = ({ resourceInfo }) => {
  return (
    <div className="flex flex-cols my-5 mx-5 items-center justify-left">
      <a
        className="rounded-sm w-full grid grid-cols-12 bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform"
        href={resourceInfo.link}
      >
        <div className="col-span-12 md:col-span-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#2563eb"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
            />
          </svg>
        </div>

        <div className="col-span-11 xl:-ml-5">
          <p className="text-blue-600 font-semibold">{resourceInfo.title} </p>
        </div>

        <div className="md:col-start-2 col-span-11 xl:-ml-5">
          <p className="text-sm text-gray-800 font-light">
            {resourceInfo.publisher}
          </p>
        </div>
      </a>
    </div>
  );
};
