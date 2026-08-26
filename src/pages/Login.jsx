import { useState } from 'react';
import { RiGoogleFill } from '@remixicon/react'
import { Link, NavLink } from 'react-router';
import { signIn, signInWithGoogle } from '../services/auth.services'

function Login() {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault();
        await signIn(email, password);
    }



    return (
      <div className="min-h-screen bg-gray-50 px-4 py-8 font-sans text-gray-900">
        <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center justify-center">

          {/* =====================================================
        LOGIN CARD
    ===================================================== */}
          <div className="w-full max-w-md">

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

              {/* =================================================
            HEADER
        ================================================= */}
              <div className="mb-8 text-center">

                {/* Logo / Icon */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-50">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-lg font-bold text-gray-900 shadow-sm">
                    B
                  </div>
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-500">
                  Welcome Back
                </p>

                <h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  Sign in to your account
                </h1>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Welcome back. Please enter your details to continue.
                </p>

              </div>

              {/* =================================================
            FORM
        ================================================= */}
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-semibold text-gray-700"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* PASSWORD */}
                <div>
                  <div className="mb-2 flex items-center justify-between">

                    <label
                      htmlFor="password"
                      className="text-xs font-semibold text-gray-700"
                    >
                      Password
                    </label>

                    {/* Add your forgot password route here if needed */}
                    <Link
                      to="/forgetpassword"
                      className="text-xs font-medium text-gray-500 transition hover:text-gray-900"
                    >
                      Forgot password?
                    </Link>

                  </div>

                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {/* =================================================
              SIGN IN
          ================================================= */}
                <button
                  type="submit"
                  className="flex h-12 w-full items-center justify-center rounded-xl bg-yellow-400 px-6 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-yellow-500 hover:shadow-md active:scale-[0.98]"
                >
                  Sign In
                </button>

                {/* =================================================
              DIVIDER
          ================================================= */}
                <div className="relative py-2">

                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-100" />
                  </div>

                  <div className="relative flex justify-center">
                    <span className="bg-white px-4 text-xs text-gray-400">
                      OR
                    </span>
                  </div>

                </div>

                {/* =================================================
              GOOGLE
          ================================================= */}
                <button
                  type="button"
                  className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white px-6 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50 hover:shadow-md active:scale-[0.98]"
                  onClick={() => signInWithGoogle()}
                >
                  <RiGoogleFill
                    size={19}
                    className="text-gray-700"
                  />

                  <span>
                    Continue with Google
                  </span>
                </button>

              </form>

              {/* =================================================
            SIGN UP
        ================================================= */}
              <div className="mt-7 border-t border-gray-100 pt-6 text-center">

                <p className="text-sm text-gray-500">
                  Don't have an account?{" "}

                  <NavLink
                    to="/signup"
                    className="font-semibold text-yellow-500 transition hover:text-yellow-600"
                  >
                    Sign Up
                  </NavLink>
                </p>

              </div>

            </div>

            {/* =====================================================
          FOOTER
      ===================================================== */}
            <p className="mt-6 text-center text-xs text-gray-400">
              By continuing, you agree to our terms and privacy policy.
            </p>

          </div>

        </div>
      </div>
    )
}

export default Login
