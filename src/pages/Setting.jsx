import { Settings } from "lucide-react";

function Setting() {
  return (
    <div className="w-full max-w-4xl space-y-8">
  {/* Header */}
  <div>
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400">
        <Settings size={20} className="text-gray-900" />
      </div>

      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
          Settings
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Manage your account and store settings.
        </p>
      </div>
    </div>
  </div>

  {/* General Settings */}
  <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
    {/* Section Header */}
    <div className="border-b border-gray-100 bg-gray-50/50 px-6 py-5">
      <h2 className="text-base font-semibold text-gray-900">
        General
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        Update your basic store information.
      </p>
    </div>

    {/* Form */}
    <div className="space-y-6 p-6">
      {/* Store Name */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Store name
        </label>

        <input
          type="text"
          placeholder="My Store"
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 hover:border-gray-300 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10"
        />
      </div>

      {/* Email */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Email address
        </label>

        <input
          type="email"
          placeholder="admin@example.com"
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 hover:border-gray-300 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10"
        />

        <p className="mt-2 text-xs text-gray-400">
          This email will be used for store notifications.
        </p>
      </div>

      {/* Description */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label className="block text-sm font-medium text-gray-700">
            Store description
          </label>

          <span className="text-xs text-gray-400">
            Optional
          </span>
        </div>

        <textarea
          rows={4}
          placeholder="Tell customers about your store..."
          className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 hover:border-gray-300 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10"
        />

        <p className="mt-2 text-xs text-gray-400">
          A short description helps customers understand your store.
        </p>
      </div>
    </div>

    {/* Footer */}
    <div className="flex items-center justify-between border-t border-gray-100 bg-gray-50/50 px-6 py-4">
      <p className="hidden text-xs text-gray-400 sm:block">
        Changes are saved to your store profile.
      </p>

      <button
        className="rounded-xl bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm transition-all hover:bg-yellow-500 hover:shadow-md active:scale-[0.98]"
      >
        Save changes
      </button>
    </div>
  </section>

  {/* Notifications */}
  <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
    {/* Header */}
    <div className="border-b border-gray-100 bg-gray-50/50 px-6 py-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-base font-semibold text-gray-900">
            Notifications
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Choose which notifications you want to receive.
          </p>
        </div>

        <div className="hidden rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-500 sm:block">
          2 enabled
        </div>
      </div>
    </div>

    {/* Notification Options */}
    <div className="divide-y divide-gray-100">
      {/* Order Notifications */}
      <div className="flex items-center justify-between gap-6 px-6 py-5 transition-colors hover:bg-gray-50/70">
        <div className="min-w-0">
          <p className="text-sm font-medium text-gray-900">
            Order notifications
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Receive notifications when a new order is placed.
          </p>
        </div>

        <label className="relative inline-flex shrink-0 cursor-pointer items-center">
          <input
            type="checkbox"
            defaultChecked
            className="peer sr-only"
          />

          <div className="h-6 w-11 rounded-full bg-gray-200 transition-colors peer-checked:bg-yellow-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-400/20" />

          <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-transform peer-checked:translate-x-5" />
        </label>
      </div>

      {/* Payment Notifications */}
      <div className="flex items-center justify-between gap-6 px-6 py-5 transition-colors hover:bg-gray-50/70">
        <div className="min-w-0">
          <p className="text-sm font-medium text-gray-900">
            Payment notifications
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Receive notifications about payment activity.
          </p>
        </div>

        <label className="relative inline-flex shrink-0 cursor-pointer items-center">
          <input
            type="checkbox"
            defaultChecked
            className="peer sr-only"
          />

          <div className="h-6 w-11 rounded-full bg-gray-200 transition-colors peer-checked:bg-yellow-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-400/20" />

          <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-transform peer-checked:translate-x-5" />
        </label>
      </div>
    </div>
  </section>

  {/* Security */}
  <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
    <div className="border-b border-gray-100 bg-gray-50/50 px-6 py-5">
      <h2 className="text-base font-semibold text-gray-900">
        Security
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        Manage your account security and password.
      </p>
    </div>

    <div className="flex items-center justify-between gap-6 px-6 py-5">
      <div>
        <p className="text-sm font-medium text-gray-900">
          Password
        </p>

        <p className="mt-1 text-sm text-gray-500">
          Change your account password regularly to keep your account secure.
        </p>
      </div>

      <button className="shrink-0 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:border-gray-300">
        Change password
      </button>
    </div>
  </section>

  {/* Danger Zone */}
  <section className="overflow-hidden rounded-2xl border border-red-200 bg-white">
    <div className="border-b border-red-100 bg-red-50/50 px-6 py-5">
      <h2 className="text-base font-semibold text-red-700">
        Danger zone
      </h2>

      <p className="mt-1 text-sm text-red-500">
        Actions here can permanently affect your store.
      </p>
    </div>

    <div className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm font-medium text-gray-900">
          Delete store
        </p>

        <p className="mt-1 text-sm text-gray-500">
          Permanently delete your store and all associated data.
        </p>
      </div>

      <button className="shrink-0 rounded-xl border border-red-200 bg-white px-4 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-50">
        Delete store
      </button>
    </div>
  </section>
</div>
  );
}

export default Setting;