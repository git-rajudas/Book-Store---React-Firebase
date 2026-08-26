
import { useState } from 'react';
import { NavLink } from 'react-router'
import Swal from 'sweetalert2';
import { sendUserPasswordResetEmail } from '../services/user.services';
import { auth } from '../firebase/config';


function ForgetPassword() {

    const [email, setEmail] = useState("");

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        if(!email){
            Swal.fire({
                icon: "warning",
                title: "Email required",
                text: "Please enter your email address.",
                confirmButtonColor: "#facc15",
            });
            return;
        }
        const result = await sendUserPasswordResetEmail(auth, email.trim());
        if (result.success) {
        Swal.fire({
            icon: "success",
            title: "Check your email",
            text: "We've sent you a password reset link.",
            confirmButtonColor: "#facc15",
        });
    } else {
        if(result.error.code === "auth/user-not-found"){
            Swal.fire({
                icon: "error",
                title: "Reset failed",
                text: "No account was found with this email address.",
                confirmButtonColor: "#facc15",
            });
        }
        if(result.error.code === "auth/invalid-email"){
            Swal.fire({
                icon: "error",
                title: "Reset failed",
                text: "Please enter a valid email address.",
                confirmButtonColor: "#facc15",
            });
        }
        if(result.error.code === "auth/too-many-requests"){
            Swal.fire({
                icon: "error",
                title: "Reset failed",
                text: "Too many attempts. Please try again later.",
                confirmButtonColor: "#facc15",
            });
        }
    }
  
    } 




  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 font-sans text-gray-900">
  <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center justify-center">

    <div className="w-full max-w-md">

      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

        {/* HEADER */}
        <div className="mb-8 text-center">

          {/* Logo */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-50">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-lg font-bold text-gray-900 shadow-sm">
              B
            </div>
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-500">
            Reset Password
          </p>

          <h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Forgot your password?
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Enter the email address associated with your account and we'll
            send you a link to reset your password.
          </p>

        </div>

        {/* FORM */}
        <form onSubmit={handleForgotPassword} className="space-y-5">

          {/* EMAIL */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-xs font-semibold text-gray-700"
            >
              Email address
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
              className="
                h-12 w-full rounded-xl
                border border-gray-200
                bg-white px-4
                text-sm text-gray-900
                outline-none
                transition
                placeholder:text-gray-400
                focus:border-yellow-400
                focus:ring-4
                focus:ring-yellow-400/10
              "
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="
              flex h-12 w-full
              items-center justify-center
              rounded-xl
              bg-yellow-400
              px-6
              text-sm font-semibold
              text-gray-900
              shadow-sm
              transition
              hover:bg-yellow-500
              hover:shadow-md
              active:scale-[0.98]
            "
          >
            Send Reset Link
          </button>

        </form>

        {/* BACK TO LOGIN */}
        <div className="mt-7 border-t border-gray-100 pt-6 text-center">

          <NavLink
            to="/login"
            className="
              inline-flex items-center gap-2
              text-sm font-semibold
              text-gray-600
              transition
              hover:text-gray-900
            "
          >
            <span>←</span>
            Back to Sign In
          </NavLink>

        </div>

      </div>

      {/* FOOTER */}
      <p className="mt-6 text-center text-xs text-gray-400">
        By continuing, you agree to our terms and privacy policy.
      </p>

    </div>
  </div>
</div>
  )
}

export default ForgetPassword
