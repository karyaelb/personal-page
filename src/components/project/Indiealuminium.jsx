import { Link } from "react-router-dom"; // Hapus jika tidak pakai React Router
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
function Indiealuminium() {
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
          <a href="https://indiealuminium.vercel.app/" target="_blank">
            <img
              className="w-full h-auto object-cover"
              src="/ia.png"
              alt="indiealuminium.png"
            />
          </a>
        </div>
      </section>
      <div className="text-sm sm:text-base ">
        <a
          href="https://indiealuminium.vercel.app"
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
          Indie Aluminium adalah sebuah website company profile yang dirancang
          untuk memperkenalkan layanan dan produk dari perusahaan aluminium
          kepada publik. Website ini membantu calon pelanggan untuk mendapatkan
          informasi secara cepat dan mudah melalui desain yang bersih, navigasi
          yang intuitif, dan tampilan yang responsif.
          <br />
        </p>
      </section>

      {/* Features */}
      <section>
        <h2 className="text-xl sm:text-2xl font-semibold">Features</h2>
        <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
          <li>Landing page informatif profil perusahaan</li>
          <li>Responsive design </li>
          <li>Section layanan dan produk yang ditawarkan</li>
          <li>Integrasi tombol WhatsApp </li>
          <li>Struktur halaman SEO-friendly</li>
        </ul>
      </section>

      {/* Tech Stack */}
      <section>
        <h2 className="text-xl sm:text-2xl font-semibold ">Tech Stack</h2>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center sm:justify-items-start">
          <div className="flex items-center justify-center h-20">
            <img
              src="/reactlogo.png"
              alt="react"
              className="max-h-full w-auto "
            />
          </div>
          <div className="flex items-center justify-center h-20">
            <img
              src="/tailwindlogo.png"
              alt="tailwind"
              className="max-h-full w-auto "
            />
          </div>
          <div className="flex items-center justify-center h-20">
            <img src="/npmlogo.png" alt="npmlogo" className="max-h-full w-32" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Indiealuminium;
