import { RiCloseLine } from '@remixicon/react';

function Popup({
  isOpen,
  onClose,
  children,
  btnText = "Confirm",
  onSubmit,
}) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-900"
          aria-label="Close popup"
        >
          <RiCloseLine size={22} />
        </button>

        {/* Content */}
        <div className="pr-6">
          {children}
        </div>

        {/* Actions */}
        <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-600 transition-all hover:bg-gray-50 hover:text-gray-900 active:scale-95"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onSubmit}
            className="rounded-xl bg-yellow-400 px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm transition-all hover:bg-yellow-500 hover:shadow-md active:scale-95"
          >
            {btnText}
          </button>

        </div>
      </div>
    </div>
  );
}

export default Popup;