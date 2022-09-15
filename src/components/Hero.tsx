export const Hero = () => {
  return (
    <>
      <section className="container mx-auto h-screen flex justify-between items-center">
        <article>
          <p className="font-semibold text-5xl">
            Your Edge in Business Management
            <br />
          </p>
          <p className="font-semibold text-5xl mt-8">
            3R Telecom - EPoS and Merchant Solutions
          </p>
          <a
            type="button"
            className="mt-10 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            href="#"
          >
            BOOK A DEMO
          </a>
        </article>
        <img
          className="h-80 w-1/3 -mt-20"
          src="https://i.ibb.co/WH49LGJ/ni.png"
        />
      </section>
      <section className="w-full flex flex-col justify-center items-center">
        <p className="mt-5 font-semibold text-slate-600 text-md">
          Fast Integration.
        </p>
        <br />
        <p className="mb-5 font-bold text-slate-900 text-4xl">
          Your Edge in Business Management{" "}
        </p>
      </section>
    </>
  );
};
