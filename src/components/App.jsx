import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const headerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

function App() {
  return (
    <>
      <main className="max-w-4xl m-auto space-y-6">
        {/* name - role */}
        <section>
          <h2 className="text-3xl sm:text-4xl mb-2">Karya Lingga</h2>
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Frontend Web Developer
          </h2>
        </section>

        {/* section linked profile */}
        <section className="flex gap-4 sm:gap-6">
          <a
            className="hover:underline"
            href="https://github.com/karyaelb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl sm:text-4xl hover:text-slate-500" />
          </a>
          <a
            className="hover:underline"
            href="https://www.linkedin.com/in/karya-lingga-28bb5b2aa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl sm:text-4xl hover:text-slate-500" />
          </a>
          <a
            className="hover:underline"
            href="https://instagram.com/karyaelb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl sm:text-4xl hover:text-slate-500" />
          </a>
        </section>

        {/* biodata */}
        <section>
          <div className="space-y-4 text-sm sm:text-base">
            <h2 className="uppercase font-semibold text-base text-black dark:text-white">
              about me
            </h2>
            <p className="text-gray-800 dark:text-stone-200/[0.8]">
              I am graduated from smk with a multimedia major, which has a very
              high interest in technology and design for web development. I have
              been actively learning web development since in senior high
              school. I also join bootcamp at Devscale Indonesia. Within two
              months, i was able to apply my knowledge to real-world projects
              and gaining valuable hands-on experience.
            </p>
            <p className="text-gray-800 dark:text-stone-200/[0.8]">
              My current focus is on React and Next.js ecosystem where i have
              honed my skill in building frontend application. I strive to
              create beautiful websites and user-friendly web experiences in my
              work.
            </p>
            <p className="text-gray-800 dark:text-stone-200/[0.8]">
              I am committed to contionously learning, stay updated with
              industry standarts and latest technologies. My ultimate goal is to
              become a skilled and professional software engineer who can make a
              meaningful impact in the industry.
            </p>
          </div>
        </section>

        {/* section project */}
        <section>
          <div className="space-y-4">
            <h2 className="uppercase font-semibold text-base">project</h2>

            {/* project 1 */}
            <motion.div
              variants={headerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className=" rounded-lg bg-neutral-100 dark:bg-neutral-800/[0.3] hover:bg-neutral-200 dark:hover:bg-neutral-400/10 active:bg-neutral-300 dark:active:bg-neutral-900/10 border-b-2 border-transparent hover:border-slate-400 dark:hover:border-slate-600 transition duration-200">
                <Link to="/dynahunt">
                  <img
                    className="rounded-t-lg"
                    src="/dynahunt.webp"
                    alt="dynahunt.webp"
                  />
                </Link>

                <div className="p-5">
                  <Link to="/dynahunt">
                    <h5 className="mb-2 text-lg sm:text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      Dynahunt
                    </h5>
                  </Link>
                  <p className="mb-3 text-sm sm:text-base text-gray-700 dark:text-gray-400">
                    Platform untuk cari Influencer yang bisa di-hire untuk
                    sebuah advertising campaign.
                  </p>
                  <Link
                    to="/dynahunt"
                    className="inline-flex items-center px-4 py-2.5 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-900"
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
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* project 2 */}
            <motion.div
              variants={headerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="rounded-lg bg-neutral-100 dark:bg-neutral-800/[0.3] hover:bg-neutral-200 dark:hover:bg-neutral-400/10 active:bg-neutral-300 dark:active:bg-neutral-900/10 border-b-2 border-transparent hover:border-slate-400 dark:hover:border-slate-600 transition duration-200">
                <Link to="/Indiealuminium">
                  <img
                    className="rounded-t-lg"
                    src="/ia.png"
                    alt="Indie Aluminium"
                  />
                </Link>
                <div className="p-5">
                  <Link to="/Indiealuminium">
                    <h5 className="mb-2 text-lg sm:text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      Indie Aluminium Company Profile
                    </h5>
                  </Link>
                  <p className="mb-3 text-sm sm:text-base text-gray-700 dark:text-gray-400">
                    Company profile untuk membantu memudahkan dalam mengakses
                    kebutuhan pelanggan.
                  </p>
                  <Link
                    to="/Indiealuminium"
                    className="inline-flex items-center px-4 py-2.5 text-sm font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-900"
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
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* section interested */}
        <section>
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="p-6 rounded-lg bg-neutral-100 dark:bg-neutral-800/[0.3] gap-2 justify-between grid grid-cols-3 items-center">
              <h2 className="justify-start col-span-2 font-semibold sm:text-lg">
                Do you want to collaboration?
              </h2>

              <button
                className="inline-flex items-center p-2 text-center text-white bg-slate-700 rounded-lg row-span-2 justify-self-end 
                md:max-w-44 md:px-6 md:py-4 capitalize focus:ring focus:ring-slate-300 text-sm hover:bg-slate-900"
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

              <h2 className="col-span-2 sm:text-base">Mail me!</h2>
            </div>
          </motion.div>
        </section>

        {/* footer */}
        <footer className="mt-12">
          <hr className="border-slate-300 " />
          <div className="py-4 flex justify-between items-center text-xs sm:text-sm">
            <div className="text-left">© Karya Lingga 2024</div>
            <div className="flex gap-4">
              <a
                href="https://github.com/karyaelb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-xl sm:text-2xl hover:text-slate-500 transition" />
              </a>
              <a
                href="https://www.linkedin.com/in/karya-lingga-28bb5b2aa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-xl sm:text-2xl hover:text-slate-500 transition" />
              </a>
              <a
                href="https://instagram.com/karyaelb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-xl sm:text-2xl hover:text-slate-500 transition" />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
