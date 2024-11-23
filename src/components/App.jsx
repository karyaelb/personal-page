import { motion } from "framer-motion";

const headerVariants = {
  hidden: { opacity: 0, y: -50 }, // Mulai dari atas dan tidak terlihat
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }, // Fade-in ke posisi akhir
};

function App() {
  return (
    <>
      <main className="max-w-4xl m-auto space-y-6 ">
        <section>
          <h2 className="text-3xl sm:text-4xl mb-2">Karya Lingga</h2>
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Fullstack Web Developer
          </h2>
        </section>

        <section className="flex capitalize gap-4 items-center text-sm sm:text-base">
          <a
            className="underline hover:no-underline"
            href="https://github.com/karyaelb"
            target="_blank"
          >
            github
          </a>
          <a
            className="underline hover:no-underline"
            href="https://www.linkedin.com/in/karya-lingga-28bb5b2aa/"
            target="_blank"
          >
            linkedIn
          </a>
          <a
            className="underline hover:no-underline"
            href="https://instagram.com/karyaelb"
            target="_blank"
          >
            instagram
          </a>
          <a
            className="underline hover:no-underline"
            href="https://twitter.com/karyaelb"
            target="_blank"
          >
            x
          </a>
        </section>

        <section>
          <div className="space-y-4 text-sm sm:text-base">
            <h2 className="uppercase font-semibold text-base">about me</h2>
            <p className="text-stone-200/[0.8] ">
              I am graduated from smk with a multimedia major, which has a very
              high interest in technology and design for web development. I have
              been actively learning web development since in senior high
              school. I also join bootcamp at Devscale Indonesia. Within two
              months, i was able to apply my knowledge to real-world projects
              and gaining valuable hands-on experience.
            </p>

            <p className="text-stone-200/[0.8] ">
              My current focus is on React and Next.js ecosystem where i have
              honed my skill in building frontend application. I strive to
              create beautiful websites and user-friendly web experiences in my
              work.
            </p>
            <p className="text-stone-200/[0.8] ">
              I am committed to contionously learning, stay updated with
              industry standarts and latest technologies. My ultimate goal is to
              become a skilled and professional software engineer who can make a
              meaningful impact in the industry.
            </p>
          </div>
        </section>

        <section>
          <div className="space-y-4">
            <h2 className="uppercase font-semibold text-base">project</h2>

            <div className="cursor-pointer rounded-lg bg-neutral-800/[0.3] hover:bg-neutral-400/10 active:bg-neutral-900/10 border-b-2 border-transparent hover:border-emerald-900 transition duration-200">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="https://tecdn.b-cdn.net/img/new/slides/041.jpg"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-lg sm:text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 text-sm sm:text-base text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  target="_blank"
                  className="inline-flex items-center px-4 py-2.5 text-sm font-medium text-center text-white bg-emerald-800 rounded-lg
                   hover:bg-emerald-900"
                >
                  Read more
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
              </div>
            </div>

            <motion.div
              variants={headerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} // Hanya jalankan sekali saat 20% elemen terlihat
            >
              <div className="cursor-pointer rounded-lg bg-neutral-800/[0.3] hover:bg-neutral-400/10 active:bg-neutral-900/10 border-b-2 border-transparent hover:border-emerald-900 transition duration-200">
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src="https://tecdn.b-cdn.net/img/new/slides/041.jpg"
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-lg sm:text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p className="mb-3 text-sm sm:text-base text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <a
                    href="#"
                    target="_blank"
                    className="inline-flex items-center px-4 py-2.5 text-sm font-medium text-center text-white bg-emerald-800 rounded-lg
                   hover:bg-emerald-900"
                  >
                    Read more
                    <svg
                      className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={headerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} // Hanya jalankan sekali saat 20% elemen terlihat
            >
              <div className="cursor-pointer rounded-lg bg-neutral-800/[0.3] hover:bg-neutral-400/10 active:bg-neutral-900/10 border-b-2 border-transparent hover:border-emerald-900 transition duration-200">
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src="https://tecdn.b-cdn.net/img/new/slides/041.jpg"
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-lg sm:text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                  <p className="mb-3 text-sm sm:text-base text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <a
                    href="#"
                    target="_blank"
                    className="inline-flex items-center px-4 py-2.5 text-sm font-medium text-center text-white bg-emerald-800 rounded-lg
                   hover:bg-emerald-900"
                  >
                    Read more
                    <svg
                      className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section>
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Hanya jalankan sekali saat 20% elemen terlihat
          >
            <div className="p-6 rounded-lg bg-neutral-800/[0.3] gap-2 justify-between grid grid-cols-3 items-center">
              <h2 className="justify-start col-span-2 font-semibold sm:text-lg ">
                Do you want to collaboration?
              </h2>

              <button
                className="inline-flex items-center p-2 text-center text-white bg-emerald-800 rounded-lg row-span-2 justify-self-end 
           md:max-w-44 md:px-6 md:py-4 capitalize focus:ring focus:ring-emerald-300 text-sm sm:text-base hover:bg-emerald-900"
              >
                <a
                  href="mailto:an.karyalingga@gmail.com"
                  className="flex items-center"
                >
                  text here
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180 hidden sm:block"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
              </button>

              <h2 className="col-span-2 sm:text-base">Let`s work together!</h2>
            </div>
          </motion.div>
        </section>

        <footer>
          <hr />
          <div className="gap-4 py-4 sm:grid grid-cols-2 text-xs sm:text-sm">
            <div className="justify-center flex gap-6 capitalize sm:justify-end">
              <a href="https://github.com/karyaelb" target="_blank">
                github
              </a>
              <a
                href="https://www.linkedin.com/in/karya-lingga-28bb5b2aa/"
                target="_blank"
              >
                linkedIn
              </a>
              <a href="https://instagram.com/karyaelb" target="_blank">
                instagram
              </a>
              <a href="https://twitter.com/karyaelb" target="_blank">
                x
              </a>
            </div>
            <div className="text-center mt-2 sm:mt-0 sm:text-start sm:order-first">
              © Karya Lingga 2024
            </div>
          </div>
        </footer>
      </main>

      {/* <section>
          <div className="space-y-4">
            <h2 className="uppercase font-semibold">project</h2>
            <div className="p-8 cursor-pointer bg-neutral-800/[0.08] hover:bg-neutral-700/10 active:bg-neutral-900/10 border-b-2 flex flex-col justify-between min-h-48 border-transparent hover:border-emerald-900 transition duration-200">
              <h2 className="text-lg ">My Project</h2>
              <p className="tracking-tighter text-sm font-medium text-neutral-600">
                21 November 2024
              </p>
            </div>
            <div className="p-8 cursor-pointer bg-neutral-800/[0.08] hover:bg-neutral-700/10 active:bg-neutral-900/10 border-b-2 flex flex-col justify-between min-h-48 border-transparent hover:border-emerald-900 transition duration-200">
              <h2 className="text-lg ">My Project</h2>
              <p className="tracking-tighter text-sm font-medium text-neutral-600">
                21 November 2024
              </p>
            </div>
          </div>
        </section> */}

      {/* <div className=" animate-fadeInDown">
            <h2 className="text-3xl sm:text-4xl mb-2 ">Karya Lingga</h2>
            <h2 className="text-3xl sm:text-4xl font-semibold ">
              Fullstack Web Developer
            </h2>
          </div> */}
    </>
  );
}

export default App;
