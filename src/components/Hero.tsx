export const Hero = () => {
  return (
    <>
      <section className="container mx-auto h-screen flex justify-between items-center">
        <article>
          <p className="font-semibold text-5xl">
            Penetration Testing for <br />
          </p>
          <p className="font-semibold text-5xl mt-8">
            Fast-Growing SaaS Companies.
          </p>
          <a
            type="button"
            className="mt-10 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            href="https://www.softwaresecured.com/"
            target="_blank"
            rel="noreferrer"
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
          Integrating human-led hacking into agile SDLCs.
        </p>
        <br />
        <p className="mb-5 font-bold text-slate-900 text-4xl">
          Software Secured supporting security for fast-growing companies.
        </p>
      </section>
    </>
  );
};
