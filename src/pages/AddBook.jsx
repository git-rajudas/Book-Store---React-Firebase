import { useEffect, useRef, useState } from "react";
import { createListing } from "../services/product.services";
import { useAuth } from "../context/AuthContext";
import { ArrowLeft, ChevronDown, ImagePlus, X } from 'lucide-react'
import Swal from "sweetalert2";
import Input from "../components/Input";
import Select from "../components/Select";

function AddBook() {
  const { user } = useAuth();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isbn, setIsbn] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [publicationDate,  setPublicationDate] = useState("");
  const [numberOfPage, setNumberOfPage ] = useState("");
  const [edition, setEdition] = useState("");
  const [language, setLanguage ] = useState("");
  const [format, setFormat ] = useState("");
  const [price, setPrice] = useState("");
  const [marketprice, setMarketPrice] = useState("");
  const [sku, setSku ] = useState("");
  const [quantity, setQuantity ] = useState("");
  const [trackInventory, setTrackInventory ] = useState(false);
  const [category, setCategory ] = useState(false);
  const [visibleOnStore, setVisibleOnStore ] = useState(true);
  const [coverpic, setCoverpic] = useState(null);
  const [preview, setPreview] = useState(null);
  const [status,setStatus] = useState("")

  const fileInputRef = useRef(null);


  const resetForm = () => {
  setName("");
  setDescription("");
  setCoverpic("");
  setIsbn("");
  setPublisher("");
  setAuthor("");
  setPublicationDate("");
  setNumberOfPage("");
  setLanguage("English");
  setFormat("");
  setEdition("");
  setPrice("");
  setMarketPrice("");
  setSku("");
  setQuantity("");
  setTrackInventory(false);
  setCategory("");
  setVisibleOnStore(true);
  setStatus("");
};

  // create preview
  

  const handleFileChanges = (e)=>{
    const file = e.target.files?.[0];
    if(!file) return;
    const allowedTypes = ["image/png", "image/jpeg", "image/webp"];
    if(!allowedTypes.includes(file.type)){
      Swal.fire({
        title: "Image upload failed",
        text: 'Please upload a PNG, JPG, or WEBP image.',
        confirmButtonColor: "#facc15",
      });
      return;
    }

    if(file.size > 5*1024*1024){
      Swal.fire({
        title: "File Too Large",
        text: "Please upload a file smaller than 5 MB",
        confirmButtonColor: "#facc15",
      })
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
    setCoverpic(file);
  }

  useEffect(()=>{
    return () =>{
      if(preview){
        URL.revokeObjectURL(preview);
      }
    }
  },[preview]);

  const removeImage = (e) => {
    e.stopPropagation();
    if(preview){
      URL.revokeObjectURL(preview);
    }
    setPreview(null);
    if(fileInputRef.current){
      fileInputRef.current.value = "";
    }
  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await createListing(user, { name,description,coverpic,isbn,publisher,author,publicationDate,numberOfPage,language,format,edition,price, marketprice,sku,quantity,trackInventory,category,visibleOnStore,status });
      await Swal.fire({
                  icon: 'success',
                  title: 'New Book Added',
                  confirmButtonColor: '#FFD22F'
              })
      resetForm();
    }catch(error){
      Swal.fire({
                  icon: 'error',
                  title: error.message,
                  text: "Failed to add book",
              })
    }
  }





  return (
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
              className="h-11 rounded-xl border border-gray-200 bg-white px-5 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 active:scale-[0.98] cursor-pointer"
              onClick={()=> resetForm()}
            >
              Cancel
            </button>


            <button
              type="button"
              onClick={handleSubmit}
              className="h-11 rounded-xl bg-yellow-400 px-6 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-yellow-500 hover:shadow-md active:scale-[0.98] cursor-pointer"
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
                  value={name}
                  className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/10"
                  onChange={(e) => setName(e.target.value)}
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
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
              <div
              onClick={()=> fileInputRef.current?.click()}
              className="group flex min-h-[240px] cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 text-center transition hover:border-yellow-400 hover:bg-yellow-50/40">
                <input ref={fileInputRef}  type="file" accept="image/png,image/jpeg, image/webp" onChange={handleFileChanges} className="hidden"  />
                {preview ? (
                  <>
                  <div className="relative h-48 w-32 overflow-hidden rounded-lg shadow-md">
                  <img src={preview} alt="Book cover preview" fill className="object-cover" />
                  </div>
                  <p className="mt-3 text-xs font-medium text-gray-600">Click to replace image</p>
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-600 shadow-md transition hover:bg-red-50 hover:text-red-500"
                  >
                    <X size={16} />
                  </button>
                  </>
                  
                ): (
                  <>

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
                  </>
                )}

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
                  value={isbn}
                  onChange={(e)=> setIsbn(e.target.value)}
                />

                <Input
                  label="Publisher"
                  placeholder="Publisher name"
                  value={publisher}
                  onChange={(e)=> setPublisher(e.target.value)}
                />

                <Input
                  label="Author"
                  placeholder="Author name"
                  value={author}
                  onChange={(e)=> setAuthor(e.target.value)}
                />

                <Input
                  label="Publication Date"
                  type="date"
                  value={publicationDate}
                  onChange={(e)=> setPublicationDate(e.target.value)}
                />

                <Input
                  label="Number of Pages"
                  placeholder="320"
                  type="number"
                  value={numberOfPage}
                  onChange={(e)=> setNumberOfPage(e.target.value)}
                />

                <Select
                  label="Language"
                  options={[
                    "English",
                    "Bengali",
                    "Spanish",
                    "French",
                  ]}
                  value={language}
                  onChange={(e)=> setLanguage(e.target.value)}
                />

                <Select
                  label="Format"
                  options={[
                    "Paperback",
                    "Hardcover",
                    "eBook",
                    "Audiobook",
                  ]}
                  value={format}
                  onChange={(e)=> setFormat(e.target.value)}
                />

                <Input
                  label="Edition"
                  placeholder="First edition"
                  value={edition}
                  onChange={(e)=> setEdition(e.target.value)}
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
                  label="Sale Price"
                  placeholder="₹0.00"
                  type="number"
                  value={price}
                  onChange={(e)=> setPrice(e.target.value)}
                />

                <Input
                  label="Market Price"
                  placeholder="₹0.00"
                  type="number"
                  value={marketprice}
                  onChange={(e)=> setMarketPrice(e.target.value)}
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
                  value={sku}
                  onChange={(e)=> setSku(e.target.value)}
                />

                <Input
                  label="Stock Quantity"
                  placeholder="0"
                  type="number"
                  value={quantity}
                  onChange={(e)=> setQuantity(e.target.value)}
                />

              </div>

              <label className="mt-6 flex cursor-pointer items-center gap-3 rounded-xl bg-gray-50 p-4 transition hover:bg-gray-100">

                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 accent-yellow-400"
                  value={trackInventory}
                  onChange={()=> setTrackInventory(!trackInventory)}
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
                  onChange={(e) => setStatus(e.target.value)}
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
                value={category}
                onChange={(e)=> setCategory(e.target.value)}
              />

              {/* AUTHOR */}
              {/* <div className="mt-5">

                <Input
                  label="Author"
                  placeholder="Search author..."
                />

              </div> */}

              {/* TAGS */}
              {/* <div className="mt-5">

                <label className="mb-2 block text-xs font-semibold text-gray-700">
                  Tags
                </label>

                <div className="flex min-h-[48px] flex-wrap items-center gap-2 rounded-xl border border-gray-200 bg-white p-2 transition focus-within:border-yellow-400 focus-within:ring-4 focus-within:ring-yellow-400/10">



                  
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
                 

                  <input
                    placeholder="Add tag..."
                    className="min-w-[80px] flex-1 bg-transparent px-2 text-xs text-gray-900 outline-none placeholder:text-gray-400"
                  />

                </div>

              </div> */}

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
                  value={visibleOnStore}
                  onChange={(e)=> setVisibleOnStore(e.target.value)}
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

export default AddBook;
