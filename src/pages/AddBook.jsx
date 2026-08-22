import { useState } from "react";
import { createListing } from "../services/product.services";
import { useAuth } from "../context/AuthContext";
import { ArrowLeft, ChevronDown, ImagePlus } from 'lucide-react'
function AddBook() {
    const {user } = useAuth();

    const [name, setName] = useState("");
    const [isbn, setIsbn] = useState("");
    const [price, setPrice] = useState("");
    const [coverpic, setCoverpic] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createListing(user,{name,isbn,price,coverpic});
    }

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

      <div className="min-h-screen bg-[#f5f5f5] px-4 py-6 font-sans text-[#171717] sm:px-8 lg:px-[7%]">

      {/* HEADER */}
      <div className="mb-7 flex items-center justify-between">

        <div className="flex items-center gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-200">
            <ArrowLeft size={20} />
          </button>

          <h1 className="text-[24px] font-semibold">
            Add product
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <button className="h-10 rounded-full border border-gray-200 bg-white px-5 text-sm hover:bg-gray-50 cursor-pointer">
            Cancel
          </button>

          <button className="h-10 rounded-full bg-[#FFD22F] px-6 text-sm font-medium text-gray-600 hover:bg-yellow-400 cursor-pointer">
            Save product
          </button>
        </div>
      </div>

      {/* MAIN */}
      <div className="grid grid-cols-1 items-start gap-4 xl:grid-cols-[minmax(0,1fr)_300px]">

        {/* ================================================= */}
        {/* LEFT */}
        {/* ================================================= */}
        <main className="flex flex-col gap-4">

          {/* PRODUCT INFORMATION */}
          <section className="rounded-[17px] border border-gray-100 bg-white p-5">

            <h2 className="mb-5 text-sm font-semibold">
              Product information
            </h2>

            {/* TITLE */}
            <div>
              <label className="mb-2 block text-xs font-medium">
                Book title
              </label>

              <input
                type="text"
                placeholder="Enter book title"
                className="h-11 w-full rounded-[10px] border border-gray-200 px-3 text-sm outline-none transition focus:border-blue-400"
              />
            </div>

            {/* DESCRIPTION */}
            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between">
                <label className="text-xs font-medium">
                  Description
                </label>

                <span className="text-[11px] text-gray-400">
                  0 / 5000
                </span>
              </div>

              <textarea
                rows={7}
                placeholder="Write a description for your book..."
                className="w-full resize-none rounded-[10px] border border-gray-200 p-3 text-sm outline-none focus:border-blue-400"
              />
            </div>
          </section>

          {/* MEDIA */}
          <section className="rounded-[17px] border border-gray-100 bg-white p-5">

            <h2 className="mb-1 text-sm font-semibold">
              Book cover
            </h2>

            <p className="mb-4 text-xs text-gray-400">
              Upload the main cover image of your book.
            </p>

            <div className="flex h-[220px] cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100">

              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                <ImagePlus
                  size={22}
                  className="text-gray-500"
                />
              </div>

              <p className="text-sm font-medium">
                Upload book cover
              </p>

              <p className="mt-1 text-xs text-gray-400">
                PNG, JPG or WEBP · Max 5MB
              </p>
            </div>
          </section>

          {/* BOOK DETAILS */}
          <section className="rounded-[17px] border border-gray-100 bg-white p-5">

            <h2 className="mb-5 text-sm font-semibold">
              Book details
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

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
                label="Publication date"
                type="date"
              />

              <Input
                label="Number of pages"
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

          {/* PRICING */}
          <section className="rounded-[17px] border border-gray-100 bg-white p-5">

            <h2 className="mb-5 text-sm font-semibold">
              Pricing
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

              <Input
                label="Price"
                placeholder="₹0.00"
                type="number"
              />

              <Input
                label="Compare-at price"
                placeholder="₹0.00"
                type="number"
              />
            </div>
          </section>

          {/* INVENTORY */}
          <section className="rounded-[17px] border border-gray-100 bg-white p-5">

            <h2 className="mb-5 text-sm font-semibold">
              Inventory
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

              <Input
                label="SKU"
                placeholder="BOOK-001"
              />

              <Input
                label="Stock quantity"
                placeholder="0"
                type="number"
              />
            </div>

            <label className="mt-5 flex items-center gap-2 text-xs text-gray-600">
              <input
                type="checkbox"
                className="h-4 w-4 rounded"
              />
              Track inventory for this product
            </label>
          </section>
        </main>

        {/* ================================================= */}
        {/* RIGHT */}
        {/* ================================================= */}
        <aside className="flex flex-col gap-4">

          {/* STATUS */}
          <section className="rounded-[17px] border border-gray-100 bg-white p-5">

            <h2 className="mb-4 text-sm font-semibold">
              Product status
            </h2>

            <div className="relative">

              <select
                value={status}
                // onChange={(e) => setStatus(e.target.value)}
                className="h-11 w-full appearance-none rounded-[10px] border border-gray-200 bg-white px-3 text-xs outline-none focus:border-blue-400"
              >
                <option>Published</option>
                <option>Draft</option>
                <option>Archived</option>
              </select>

              <ChevronDown
                size={16}
                className="pointer-events-none absolute right-3 top-3 text-gray-400"
              />
            </div>
          </section>

          {/* ORGANIZATION */}
          <section className="rounded-[17px] border border-gray-100 bg-white p-5">

            <h2 className="mb-5 text-sm font-semibold">
              Organization
            </h2>

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

            <div className="mt-4">
              <Input
                label="Author"
                placeholder="Search author..."
              />
            </div>

            <div className="mt-4">
              <label className="mb-2 block text-xs font-medium">
                Tags
              </label>

              <div className="flex min-h-[44px] flex-wrap items-center gap-2 rounded-[10px] border border-gray-200 p-2">

                {/* {tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1.5 rounded-full bg-gray-100 px-2.5 py-1.5 text-xs"
                  >
                    {tag}

                    <button
                      onClick={() => removeTag(tag)}
                    >
                      <X size={13} />
                    </button>
                  </span>
                ))} */}

                <input
                  placeholder="Add tag..."
                  className="min-w-[80px] flex-1 bg-transparent px-1 text-xs outline-none"
                />
              </div>
            </div>
          </section>

          {/* PUBLISHING */}
          <section className="rounded-[17px] border border-gray-100 bg-white p-5">

            <h2 className="mb-4 text-sm font-semibold">
              Publishing
            </h2>

            <div className="space-y-4">

              <div>
                <p className="text-xs font-medium">
                  Online store
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  Product will be visible in your store.
                </p>
              </div>

              <label className="flex items-center justify-between">
                <span className="text-xs">
                  Available for sale
                </span>

                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4"
                />
              </label>

            </div>
          </section>
        </aside>
      </div>

      {/* MOBILE SAVE */}
      <div className="mt-4 flex justify-end xl:hidden">
        <button className="h-11 w-full rounded-full bg-[#347ff0] text-sm font-medium text-white">
          Save product
        </button>
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
