
import { useState } from 'react';
import { signUp, signInWithGoogle } from '../services/auth.services'
import { addUser, updateUserProfile } from '../services/user.services';

import { RiGoogleFill } from '@remixicon/react'
import { NavLink } from 'react-router';

function SignUp() {

    const [name, setName ] = useState(null);
    const [Number, setPhoneNumber ] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await signUp(email, password);
        await addUser({
            uid: user.uid,
            displayName: name || "",
            photoURL: user.photoURL || "",
            email: user.email,
            Number,
        })
        await updateUserProfile(user, name, Number);
    }

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-8 font-sans text-gray-900">
  <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center justify-center">

    {/* =====================================================
        SIGN UP CARD
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
            Get Started
          </p>

          <h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Create Your Account
          </h1>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Create an account to start shopping and manage your orders.
          </p>

        </div>

        {/* =================================================
            FORM
        ================================================= */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* FULL NAME */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-xs font-semibold text-gray-700"
            >
              Full Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your full name"
              autoComplete="name"
              className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* PHONE */}
          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-xs font-semibold text-gray-700"
            >
              Phone Number
            </label>

            <input
              type="tel"
              id="phone"
              name="phone"
              required
              pattern="[0-9]{10}"
              placeholder="Enter your phone number"
              autoComplete="tel"
              className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <p className="mt-1.5 text-[11px] text-gray-400">
              Example: 9748425100
            </p>
          </div>

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
              required
              placeholder="you@example.com"
              autoComplete="email"
              className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-xs font-semibold text-gray-700"
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Create a password"
              autoComplete="new-password"
              className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10"
              onChange={(e) => setPassword(e.target.value)}
            />

            <p className="mt-1.5 text-[11px] text-gray-400">
              Choose a secure password for your account.
            </p>
          </div>

          {/* =================================================
              SIGN UP
          ================================================= */}
          <button
            type="submit"
            className="flex h-12 w-full items-center justify-center rounded-xl bg-yellow-400 px-6 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-yellow-500 hover:shadow-md active:scale-[0.98]"
          >
            Create Account
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
            LOGIN LINK
        ================================================= */}
        <div className="mt-7 border-t border-gray-100 pt-6 text-center">

          <p className="text-sm text-gray-500">
            Already have an account?{" "}

            <NavLink
              to="/login"
              className="font-semibold text-yellow-500 transition hover:text-yellow-600"
            >
              Sign In
            </NavLink>
          </p>

        </div>

      </div>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <p className="mt-6 text-center text-xs leading-5 text-gray-400">
        By creating an account, you agree to our terms and privacy policy.
      </p>

    </div>

  </div>
</div>
    )
}

export default SignUp
