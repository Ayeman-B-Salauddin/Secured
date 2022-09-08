export const Hero = () => {
  return (
    <>
      <section className="container mx-auto h-screen flex justify-between items-center">
        <article>
          <p className="font-semibold text-5xl">
            Incredible Design & Performance
            <br />
          </p>
          <p className="font-semibold text-3xl mt-8">
            Our machines are designed for excellent performance and high
            quality. You can experience the power and precise controls at the
            same time.
          </p>
          <a
            type="button"
            className="mt-10 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            href="https://www.canaweld.com/"
            target="_blank"
            rel="noreferrer"
          >
            BOOK A DEMO
          </a>
        </article>
        <img
          className="h-80 w-1/3 -mt-20 rounded-full"
          src="https://i.ibb.co/tbwPhZ8/pexels-movidagrafica-barcelona-1474993-1.jpg"
        />
      </section>
      <section className="container mx-auto w-full flex flex-col justify-center items-center">
        <p className="mt-5 font-semibold text-slate-600 text-md">
          The Right Choice
        </p>
        <br />
        <p className="mb-5 font-bold text-slate-900 text-4xl">
          Canaweld manufactures portable, powerful and low energy consumption
          machines, which are an excellent choice for all applications.
        </p>
      </section>
    </>
  );
};
