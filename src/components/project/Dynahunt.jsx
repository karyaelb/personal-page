import { Link } from "react-router-dom"; // Hapus jika tidak pakai React Router
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
function Dynahunt() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      {/* Cover Section */}
      <section className="">
        <Link
          to="/"
          className=" flex items-center gap-2 py-2 text-sm font-medium text-black dark:text-white hover:text-slate-500 transition"
        >
          <ArrowLeftIcon className="w-4 h-4" /> Back
        </Link>
        <div className="rounded-lg overflow-hidden">
          <a href="https://www.youtube.com/watch?v=SPfd2VIqYsM" target="_blank">
            <img
              className="w-full h-auto object-cover"
              src="/dynahunt.webp"
              alt="dynahunt"
            />
          </a>
        </div>
      </section>
      <div className="text-sm sm:text-base ">
        <a
          href="https://www.youtube.com/watch?v=SPfd2VIqYsM"
          target="_blank"
          className="underline hover:no-underline hover "
        >
          Link Site
        </a>
      </div>

      {/* Description */}
      <section>
        <h2 className="text-xl sm:text-2xl font-semibold">Description</h2>
        <p className="text-sm sm:text-base leading-relaxed">
          Dynahunt adalah sebuah platform web yang dirancang untuk memudahkan
          brand, agensi, atau individu dalam menemukan dan merekrut influencer
          yang sesuai untuk kebutuhan kampanye pemasaran mereka. Pengguna dapat
          menelusuri profil influencer berdasarkan kategori, jumlah pengikut dan
          engagement rate yang relevan.
          <br />
          Dynahunt menawarkan antarmuka yang intuitif dan fitur manajemen
          kampanye yang efisien, mulai dari pembuatan campaign, pengelolaan
          daftar influencer.
        </p>
      </section>

      {/* Features */}
      <section>
        <h2 className="text-xl sm:text-2xl font-semibold">Features</h2>
        <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
          <li>Login & Sign up</li>
          <li>Dashboard</li>
          <li>CRUD campaign dan profil influencer</li>
          <li>Influencer discovery berdasarkan popularitas & followers</li>
          <li>Responsive design (mobile & desktop friendly)</li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section>
        <h2 className="text-xl sm:text-2xl font-semibold ">Tech Stack</h2>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center sm:justify-items-start">
          <div className="flex items-center justify-center h-20">
            <img
              src="/nextjs-icon.png"
              alt="Next.js"
              className="max-h-full w-auto dark:invert"
            />
          </div>
          <div className="flex items-center justify-center h-20">
            <img
              src="/vercel-logo.svg"
              alt="Vercel"
              className="max-h-full w-auto dark:invert"
            />
          </div>
          <div className="flex items-center justify-center h-20">
            <img
              src="/daisyui.png"
              alt="DaisyUI"
              className="max-h-full w-28 invert dark:invert-0"
            />
          </div>
          <div className="flex items-center justify-center h-20">
            <img
              src="/prisma-logo.png"
              alt="Prisma"
              className="max-h-full w-auto"
            />
          </div>
          <div className="flex items-center justify-center h-20">
            <img
              src="/postgres.svg"
              alt="PostgreSQL"
              className="max-h-full w-auto"
            />
          </div>
          <div className="flex items-center justify-center h-20">
            <img src="/neon.png" alt="Neon" className="max-h-full w-auto" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Dynahunt;
