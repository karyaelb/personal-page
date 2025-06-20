import { Link } from "react-router-dom"; // Hapus jika tidak pakai React Router
import { ArrowLeftIcon } from "@heroicons/react/16/solid";

function Quizapp() {
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
          <a href="https://quizz-app-five-iota.vercel.app/" target="_blank">
            <img
              className="w-auto h-auto object-cover "
              src="/sampulquizz.png"
              alt="sampulquizz.png"
            />
          </a>
        </div>
      </section>
      <div className="text-sm sm:text-base ">
        <a
          href="https://quizz-app-five-iota.vercel.app/"
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
          React Quiz App adalah aplikasi kuis edukatif berbasis web yang
          dibangun menggunakan ReactJS dan Vite sebagai bundler modern. Aplikasi
          ini memungkinkan pengguna untuk mengikuti kuis pilihan ganda,
          menyimpan progres secara lokal, dan menampilkan hasil akhir secara
          interaktif.
        </p>
      </section>

      {/* Features */}
      <section>
        <h2 className="text-xl sm:text-2xl font-semibold">Features</h2>
        <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
          <li>Halaman Login Sederhana</li>
          <li>Ambil Soal dari API (Dynamic Question Fetching)</li>
          <li>Tampilan Soal Satu per Satu</li>
          <li>Komponen Modular</li>
          <li>Timer Otomatis (Countdown)</li>
          <li>Simpan Progres ke LocalStorage</li>
          <li>Perhitungan Skor dan Halaman Hasil</li>
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
              alt="DaisyUI"
              className="max-h-full w-28 invert dark:invert-0"
            />
          </div>
          <div className="flex items-center justify-center h-20">
            <img src="/vite.png" alt="vite" className="max-h-full w-auto" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Quizapp;
