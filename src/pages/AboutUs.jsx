import { Link } from "react-router";
import {
  RiBookOpenLine,
  RiHeart3Line,
  RiTeamLine,
  RiShieldCheckLine,
  RiArrowRightLine,
} from '@remixicon/react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#f8f8f6]">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-slate-50">
  {/* Decorative background */}
  <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full  blur-3xl" />
  <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
    <div className="max-w-3xl">

      {/* Label */}
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-yellow-400" />

        <span className="text-xs font-bold uppercase tracking-[0.25em] text-yellow-600">
          About Us
        </span>
      </div>

      {/* Heading */}
      <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
        Stories worth reading.
        <span className="block text-yellow-500">
          Books worth keeping.
        </span>
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
        We believe a great book can change the way you think, inspire
        your imagination, and stay with you for a lifetime. Our mission
        is to make discovering your next great read simple, enjoyable,
        and accessible.
      </p>

      {/* Button */}
      <div className="mt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 font-bold text-white transition-all hover:bg-yellow-400 hover:text-slate-950 active:scale-[0.98]"
        >
          Explore Our Books
          <RiArrowRightLine className="text-lg" />
        </Link>
      </div>

    </div>
  </div>
</section>

      {/* =====================================================
          INTRO
      ====================================================== */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* Visual */}
            <div className="relative">

              <div className="absolute -left-5 -top-5 h-32 w-32 rounded-3xl bg-yellow-200/60" />

              <div className="relative overflow-hidden rounded-[2rem] bg-slate-200">
                <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-yellow-100 via-white to-slate-100">

                  <div className="relative">
                    <div className="absolute -left-8 top-8 h-48 w-32 -rotate-6 rounded-lg bg-slate-800 shadow-2xl" />

                    <div className="relative flex h-64 w-44 rotate-3 items-center justify-center rounded-lg bg-yellow-400 p-6 shadow-2xl">
                      <div className="text-center">
                        <RiBookOpenLine className="mx-auto text-5xl text-slate-950" />

                        <p className="mt-5 text-lg font-black uppercase tracking-widest text-slate-950">
                          Your
                        </p>

                        <p className="text-lg font-black uppercase tracking-widest text-slate-950">
                          Next Story
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-yellow-400" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">
                  Who We Are
                </span>
              </div>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                More than a bookstore.
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                We are a community of readers, dreamers, learners, and
                storytellers who believe that books have the power to bring
                people together.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                From timeless classics to modern bestsellers, our collection
                is carefully curated to give every reader something worth
                discovering.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Whether you are searching for your next adventure, learning
                something new, or simply looking for a quiet escape, we are
                here to help you find the right book.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ====================================================== */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <span className="h-px w-8 bg-yellow-400" />
            </div>

            <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">
              What We Believe
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Built around readers
            </h2>

            <p className="mt-4 leading-7 text-slate-500">
              Everything we do starts with one simple idea: make reading more
              enjoyable.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-slate-200 bg-[#f8f8f6] p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100">
                <RiBookOpenLine className="text-2xl text-yellow-700" />
              </div>

              <h3 className="mt-5 font-bold text-slate-900">
                Great Books
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                A carefully selected collection for every kind of reader.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#f8f8f6] p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100">
                <RiHeart3Line className="text-2xl text-pink-600" />
              </div>

              <h3 className="mt-5 font-bold text-slate-900">
                Reader First
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Every decision we make is focused on creating a better reader
                experience.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#f8f8f6] p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                <RiTeamLine className="text-2xl text-blue-600" />
              </div>

              <h3 className="mt-5 font-bold text-slate-900">
                Our Community
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Connecting people through stories, ideas, and imagination.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#f8f8f6] p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                <RiShieldCheckLine className="text-2xl text-green-600" />
              </div>

              <h3 className="mt-5 font-bold text-slate-900">
                Trusted Service
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Reliable service, secure payments, and books delivered with
                care.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ====================================================== */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="overflow-hidden rounded-[2rem] bg-slate-950">
            <div className="grid divide-y divide-slate-800 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">

              <div className="p-8 text-center">
                <p className="text-4xl font-bold text-yellow-400">
                  10K+
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  Books Available
                </p>
              </div>

              <div className="p-8 text-center">
                <p className="text-4xl font-bold text-yellow-400">
                  5K+
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  Happy Readers
                </p>
              </div>

              <div className="p-8 text-center">
                <p className="text-4xl font-bold text-yellow-400">
                  50+
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  Categories
                </p>
              </div>

              <div className="p-8 text-center">
                <p className="text-4xl font-bold text-yellow-400">
                  4.8★
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  Average Rating
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">
            Your next favorite book is waiting.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-500">
            Explore our collection and discover stories that stay with you
            long after you've turned the final page.
          </p>

          <Link
            to="/"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-7 py-4 font-bold text-white transition-all hover:bg-yellow-400 hover:text-slate-950"
          >
            Browse Books
            <RiArrowRightLine />
          </Link>

        </div>
      </section>

    </div>
  );
};

export default AboutUs;