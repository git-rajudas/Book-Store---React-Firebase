import { useState } from "react";
import { createListing } from "../services/product.services";
import { useAuth } from "../context/AuthContext";
import { ArrowLeft, ChevronDown, ImagePlus } from 'lucide-react'
function AddBook() {
  const { user } = useAuth();

  const [name, setName] = useState("");
  const [isbn, setIsbn] = useState("");
  const [price, setPrice] = useState("");
  const [coverpic, setCoverpic] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createListing(user, { name, isbn, price, coverpic });
  }

  const Select = ({
    label,
    options = [],
  }) => {
    return (
      <div>
        <label className="mb-2 block text-xs font-semibold text-gray-700">
          {label}
        </label>

        <div className="relative">
          <select
            className="h-12 w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 pr-10 text-sm text-gray-700 outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10"
          >
            <option value="">
              Select {label.toLowerCase()}
            </option>

            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <ChevronDown
            size={17}
            className="pointer-events-none absolute right-4 top-3.5 text-gray-400"
          />
        </div>
      </div>
    );
  };

  return (
    // <div className="">
    // <section className="text-gray-600 body-font h-full w-full absolute">
    //         <div className="justify-center flex flex-wrap items-center w-full h-[100%]">
    //             <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg py-10 px-15 flex flex-col  w-full mt-10 md:mt-0 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)];">
    //                 <h2 className="text-gray-900 text-2xl font-medium title-font mb-5">
    //                     Add Book
    //                 </h2>
    //                 <div className="relative mb-4">
    //                     <label htmlFor="bookName" className="leading-7 text-sm text-gray-600">
    //                         Enter Book Name
    //                     </label>
    //                     <input
    //                         type="text"
    //                         id="bookName"
    //                         name="bookName"
    //                         placeholder="Book Name"
    //                         className="w-full bg-white rounded-2xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //                         onChange={(e) => setName(e.target.value)}
    //                     ></input>
    //                 </div>
    //                 <div className="relative mb-4">
    //                     <label htmlFor="isbn" className="leading-7 text-sm text-gray-600">
    //                         Enter ISBN Number
    //                     </label>
    //                     <input
    //                         type="text"
    //                         id="isbn"
    //                         name="isbn"
    //                         placeholder="ISBN"
    //                         className="w-full bg-white rounded-2xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //                         onChange={(e) => setIsbn(e.target.value)}
    //                     ></input>
    //                 </div>
    //                 <div className="relative mb-4">
    //                     <label htmlFor="price" className="leading-7 text-sm text-gray-600">
    //                         Enter Book Price
    //                     </label>
    //                     <input
    //                         type="number"
    //                         id="price"
    //                         name="price"
    //                         placeholder="Price"
    //                         className="w-full bg-white rounded-2xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //                         onChange={(e) => setPrice(e.target.value)}
    //                     ></input>
    //                 </div>
    //                 <div className="relative mb-4">
    //                     <label htmlFor="coverpic" className="leading-7 text-sm text-gray-600">
    //                         Cover Pic
    //                     </label>
    //                     <input
    //                         type="file"
    //                         id="coverpic"
    //                         name="coverpic"
    //                         className="w-full bg-white rounded-2xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //                         onChange={(e) => setCoverpic(e.target.files[0])}
    //                     ></input>
    //                 </div>

    //                 <div className="flex flex-col gap-4">
    //                     <button
    //                         className="text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded-2xl text-lg cursor-pointer shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]"
    //                         onClick={handleSubmit}
    //                     >
    //                         Add
    //                     </button>
    //                 </div>
    //             </div>
    //         </div>
    //     </section>
    // </div>

    <div className="min-h-screen bg-gray-50 px-4 py-8 font-sans text-gray-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          {/* LEFT */}
          <div className="flex items-center gap-3">

            <button
              type="button"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 shadow-sm transition hover:bg-gray-50 hover:text-gray-900 active:scale-95"
            >
              <ArrowLeft size={19} />
            </button>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-500">
                Catalog
              </p>

              <h1 className="mt-1 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Add Product
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                Create a new book listing for your store.
              </p>
            </div>

          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-2">

            <button
              type="button"
              className="h-11 rounded-xl border border-gray-200 bg-white px-5 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 active:scale-[0.98]"
            >
              Cancel
            </button>

            <button
              type="button"
              className="h-11 rounded-xl bg-yellow-400 px-6 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-yellow-500 hover:shadow-md active:scale-[0.98]"
            >
              Save Product
            </button>

          </div>
        </div>

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}
        <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">

          {/* ===================================================
              LEFT
          =================================================== */}
          <main className="flex flex-col gap-6">

            {/* =================================================
                PRODUCT INFORMATION
            ================================================= */}
            <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-7">

              <div className="mb-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-500">
                  Product
                </p>

                <h2 className="mt-1 text-xl font-bold text-gray-900">
                  Product Information
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Add the basic information customers will see about this book.
                </p>
              </div>

              {/* TITLE */}
              <div>
                <label className="mb-2 block text-xs font-semibold text-gray-700">
                  Book Title
                </label>

                <input
                  type="text"
                  placeholder="Enter book title"
                  className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10"
                />
              </div>

              {/* DESCRIPTION */}
              <div className="mt-6">

                <div className="mb-2 flex items-center justify-between">
                  <label className="text-xs font-semibold text-gray-700">
                    Description
                  </label>

                  <span className="text-[11px] font-medium text-gray-400">
                    0 / 5000
                  </span>
                </div>

                <textarea
                  rows={7}
                  placeholder="Write a description for your book..."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-white p-4 text-sm leading-6 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10"
                />

              </div>

            </section>

            {/* =================================================
                MEDIA
            ================================================= */}
            <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-7">

              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-500">
                  Media
                </p>

                <h2 className="mt-1 text-xl font-bold text-gray-900">
                  Book Cover
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Upload the main cover image of your book.
                </p>
              </div>

              {/* UPLOAD */}
              <div className="group flex min-h-[240px] cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 text-center transition hover:border-yellow-400 hover:bg-yellow-50/40">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition group-hover:scale-105">
                  <ImagePlus
                    size={27}
                    className="text-gray-500 transition group-hover:text-gray-700"
                  />
                </div>

                <p className="mt-4 text-sm font-semibold text-gray-900">
                  Upload book cover
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  PNG, JPG or WEBP · Maximum 5MB
                </p>

                <span className="mt-4 rounded-full bg-white px-4 py-2 text-xs font-semibold text-gray-600 shadow-sm ring-1 ring-gray-200">
                  Choose Image
                </span>

              </div>

            </section>

            {/* =================================================
                BOOK DETAILS
            ================================================= */}
            <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-7">

              <div className="mb-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-500">
                  Information
                </p>

                <h2 className="mt-1 text-xl font-bold text-gray-900">
                  Book Details
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Provide additional information about the book.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <Input
                  label="ISBN"
                  placeholder="978-0-0000-0000-0"
                />

                <Input
                  label="Publisher"
                  placeholder="Publisher name"
                />

                <Input
                  label="Author"
                  placeholder="Author name"
                />

                <Input
                  label="Publication Date"
                  type="date"
                />

                <Input
                  label="Number of Pages"
                  placeholder="320"
                  type="number"
                />

                <Select
                  label="Language"
                  options={[
                    "English",
                    "Indonesian",
                    "Spanish",
                    "French",
                  ]}
                />

                <Select
                  label="Format"
                  options={[
                    "Paperback",
                    "Hardcover",
                    "eBook",
                    "Audiobook",
                  ]}
                />

                <Input
                  label="Edition"
                  placeholder="First edition"
                />

              </div>

            </section>

            {/* =================================================
                PRICING
            ================================================= */}
            <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-7">

              <div className="mb-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-500">
                  Pricing
                </p>

                <h2 className="mt-1 text-xl font-bold text-gray-900">
                  Product Pricing
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Set the selling price and compare-at price for this product.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <Input
                  label="Price"
                  placeholder="₹0.00"
                  type="number"
                />

                <Input
                  label="Compare-at Price"
                  placeholder="₹0.00"
                  type="number"
                />

              </div>

            </section>

            {/* =================================================
                INVENTORY
            ================================================= */}
            <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-7">

              <div className="mb-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-500">
                  Inventory
                </p>

                <h2 className="mt-1 text-xl font-bold text-gray-900">
                  Stock Management
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Manage stock levels and inventory tracking.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <Input
                  label="SKU"
                  placeholder="BOOK-001"
                />

                <Input
                  label="Stock Quantity"
                  placeholder="0"
                  type="number"
                />

              </div>

              <label className="mt-6 flex cursor-pointer items-center gap-3 rounded-xl bg-gray-50 p-4 transition hover:bg-gray-100">

                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 accent-yellow-400"
                />

                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Track inventory
                  </p>

                  <p className="mt-0.5 text-xs text-gray-500">
                    Automatically keep track of available stock.
                  </p>
                </div>

              </label>

            </section>

          </main>

          {/* ===================================================
              RIGHT SIDEBAR
          =================================================== */}
          <aside className="flex flex-col gap-6 xl:sticky xl:top-6">

            {/* =================================================
                STATUS
            ================================================= */}
            <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-500">
                  Visibility
                </p>

                <h2 className="mt-1 text-xl font-bold text-gray-900">
                  Product Status
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Choose how this product appears in your store.
                </p>
              </div>

              <div className="relative">

                <select
                  value={status}
                  // onChange={(e) => setStatus(e.target.value)}
                  className="h-12 w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 pr-10 text-sm font-medium text-gray-700 outline-none transition focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10"
                >
                  <option>Published</option>
                  <option>Draft</option>
                  <option>Archived</option>
                </select>

                <ChevronDown
                  size={17}
                  className="pointer-events-none absolute right-4 top-3.5 text-gray-400"
                />

              </div>

            </section>

            {/* =================================================
                ORGANIZATION
            ================================================= */}
            <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-500">
                  Organization
                </p>

                <h2 className="mt-1 text-xl font-bold text-gray-900">
                  Product Organization
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Organize your book for easier discovery.
                </p>
              </div>

              {/* CATEGORY */}
              <Select
                label="Category"
                options={[
                  "Books",
                  "Fiction",
                  "Non-fiction",
                  "Education",
                  "Biography",
                ]}
              />

              {/* AUTHOR */}
              <div className="mt-5">

                <Input
                  label="Author"
                  placeholder="Search author..."
                />

              </div>

              {/* TAGS */}
              <div className="mt-5">

                <label className="mb-2 block text-xs font-semibold text-gray-700">
                  Tags
                </label>

                <div className="flex min-h-[48px] flex-wrap items-center gap-2 rounded-xl border border-gray-200 bg-white p-2 transition focus-within:border-yellow-400 focus-within:ring-4 focus-within:ring-yellow-400/10">

                  {/* Example tags */}

                  {/* 
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700"
                    >
                      {tag}

                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="text-gray-400 hover:text-gray-900"
                      >
                        <X size={13} />
                      </button>
                    </span>
                  ))}
                  */}

                  <input
                    placeholder="Add tag..."
                    className="min-w-[80px] flex-1 bg-transparent px-2 text-xs text-gray-900 outline-none placeholder:text-gray-400"
                  />

                </div>

              </div>

            </section>

            {/* =================================================
                PUBLISHING
            ================================================= */}
            <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-500">
                  Publishing
                </p>

                <h2 className="mt-1 text-xl font-bold text-gray-900">
                  Store Availability
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Control where this product is available.
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4">

                <div className="flex items-start gap-3">

                  <div className="mt-1 h-2 w-2 rounded-full bg-green-500" />

                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      Online Store
                    </p>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Product will be visible in your online store.
                    </p>
                  </div>

                </div>

              </div>

              <div className="my-5 border-t border-gray-100" />

              <label className="flex cursor-pointer items-center justify-between gap-4">

                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Available for sale
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    Customers can purchase this product.
                  </p>
                </div>

                <input
                  type="checkbox"
                  defaultChecked
                  className="h-5 w-5 shrink-0 rounded border-gray-300 accent-yellow-400"
                />

              </label>

            </section>

          </aside>
        </div>

        {/* =====================================================
            MOBILE SAVE
        ===================================================== */}
        <div className="mt-6 xl:hidden">

          <button
            type="button"
            className="h-12 w-full rounded-xl bg-yellow-400 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-yellow-500 hover:shadow-md active:scale-[0.98]"
          >
            Save Product
          </button>

        </div>

      </div>
    </div>
  );
}


/* ============================================================
   REUSABLE INPUT
============================================================ */

function Input({
  label,
  placeholder,
  type = "text",
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="h-11 w-full rounded-[10px] border border-gray-200 px-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-400"
      />
    </div>
  );
}


/* ============================================================
   REUSABLE SELECT
============================================================ */

function Select({
  label,
  options,
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium">
        {label}
      </label>

      <div className="relative">
        <select className="h-11 w-full appearance-none rounded-[10px] border border-gray-200 bg-white px-3 text-sm outline-none focus:border-blue-400">
          {options.map((option) => (
            <option key={option}>
              {option}
            </option>
          ))}
        </select>

        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-3 top-3 text-gray-400"
        />
      </div>
    </div>

  );
}

export default AddBook;
