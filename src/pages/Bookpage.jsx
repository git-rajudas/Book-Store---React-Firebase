import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { RiShoppingBag3Line, RiHeartLine } from '@remixicon/react';

import { getProduct } from "../services/product.services";

function Bookpage() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const data = await getProduct(id);
      setProductDetails(data);
    };

    fetchProductDetails();
  }, [id]);

  if (!productDetails) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-yellow-400" />
          <p className="text-sm text-gray-500">Loading book...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f8f6]">
  <section className="px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
    <div className="mx-auto max-w-7xl">

      {/* =====================================================
          BREADCRUMB
      ====================================================== */}
      <div className="mb-6 flex items-center gap-2 text-sm">
        <Link
          to="/"
          className="font-medium text-slate-500 transition-colors hover:text-yellow-600"
        >
          Home
        </Link>

        <span className="text-slate-300">/</span>

        <span className="max-w-[250px] truncate font-medium text-slate-900">
          {productDetails.name}
        </span>
      </div>

      {/* =====================================================
          HERO PRODUCT
      ====================================================== */}
      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">

        <div className="grid lg:grid-cols-[0.85fr_1.15fr]">

          {/* ================= COVER AREA ================= */}
          <div className="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-[#f1f0ec] px-8 py-12 sm:px-14 lg:px-16">

            {/* Decorative shapes */}
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-yellow-200/40 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-slate-300/30 blur-3xl" />

            {/* Category */}
            <div className="absolute left-6 top-6 z-10">
              <span className="inline-flex rounded-full bg-yellow-400 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-slate-950 shadow-sm">
                {productDetails.category || "Book"}
              </span>
            </div>

            {/* Book Cover */}
            <div className="relative z-10 w-full max-w-[360px]">

              <div className="absolute inset-x-5 bottom-[-18px] h-10 rounded-[50%] bg-slate-900/20 blur-xl" />

              <div className="group relative overflow-hidden rounded-xl bg-white shadow-[0_30px_70px_rgba(0,0,0,0.20)]">
                <img
                  src={productDetails.coverpic || productDetails.imageURL}
                  alt={productDetails.name}
                  className="aspect-[4/5] w-full object-cover object-center transition duration-700 group-hover:scale-[1.025]"
                />

                {/* Image overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10" />
              </div>
            </div>
          </div>

          {/* ================= PRODUCT CONTENT ================= */}
          <div className="flex flex-col p-6 sm:p-10 lg:p-14">

            {/* Small heading */}
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-yellow-400" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">
                Book Details
              </span>
            </div>

            {/* Title */}
            <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-[46px]">
              {productDetails.name}
            </h1>

            {/* Author */}
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
              {productDetails.author && (
                <>
                  <span className="text-sm text-slate-500">
                    Written by
                  </span>

                  <span className="font-semibold text-slate-900">
                    {productDetails.author}
                  </span>
                </>
              )}

              {productDetails.publisher && (
                <>
                  <span className="hidden text-slate-300 sm:inline">
                    •
                  </span>

                  <span className="text-sm text-slate-500">
                    {productDetails.publisher}
                  </span>
                </>
              )}
            </div>

            {/* Rating */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-0.5 text-lg text-yellow-400">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>

              <span className="text-sm font-medium text-slate-700">
                4.8
              </span>

              <span className="text-sm text-slate-400">
                (120 reviews)
              </span>
            </div>

            {/* Divider */}
            <div className="my-7 h-px bg-slate-100" />

            {/* Price */}
            <div>
              <div className="flex flex-wrap items-end gap-3">

                <span className="text-4xl font-bold tracking-tight text-slate-950">
                  ₹{productDetails.price || "0"}
                </span>

                {productDetails.marketprice &&
                  Number(productDetails.marketprice) >
                    Number(productDetails.price) && (
                    <>
                      <span className="mb-1 text-lg text-slate-400 line-through">
                        ₹{productDetails.marketprice}
                      </span>

                      <span className="mb-1 rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                        {Math.round(
                          ((Number(productDetails.marketprice) -
                            Number(productDetails.price)) /
                            Number(productDetails.marketprice)) *
                            100
                        )}
                        % OFF
                      </span>
                    </>
                  )}
              </div>

              <p className="mt-2 text-xs text-slate-400">
                Inclusive of all applicable taxes
              </p>
            </div>

            {/* Description */}
            <div className="mt-7">
              <h2 className="text-lg font-bold text-slate-950">
                About this book
              </h2>

              <p className="mt-3 max-w-2xl text-[15px] leading-7 text-slate-600">
                {productDetails.description ||
                  "Discover this amazing book and add it to your collection. Whether you're looking for an inspiring read or your next favorite story, this book is a great choice."}
              </p>
            </div>

            {/* Stock */}
            <div className="mt-7 flex items-center gap-3 rounded-2xl border border-green-100 bg-green-50 px-4 py-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100">
                <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
              </div>

              <div>
                <p className="text-sm font-bold text-green-800">
                  In Stock
                </p>

                <p className="text-xs text-green-700">
                  {productDetails.quantity
                    ? `${productDetails.quantity} copies available`
                    : "Available for purchase"}
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">

              <Link
                to={`/checkout/${id}`}
                className="flex h-14 flex-1 items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 font-semibold text-white shadow-sm transition-all duration-200 hover:bg-yellow-400 hover:text-slate-950 active:scale-[0.98]"
              >
                <RiShoppingBag3Line className="text-xl" />
                Buy Now
              </Link>

              <button
                type="button"
                className="flex h-14 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 font-semibold text-slate-700 transition-all hover:border-yellow-400 hover:bg-yellow-50 hover:text-yellow-700"
              >
                <RiHeartLine className="text-xl" />
                <span className="sm:hidden">
                  Add to Wishlist
                </span>
              </button>
            </div>

            {/* SKU */}
            {productDetails.sku && (
              <div className="mt-5 text-xs text-slate-400">
                Product SKU:
                <span className="ml-1 font-semibold text-slate-600">
                  {productDetails.sku}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* =====================================================
          INFORMATION GRID
      ====================================================== */}
      <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">

        {/* ================= BOOK SPECIFICATIONS ================= */}
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">

          <div className="mb-8">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-yellow-400" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">
                Specifications
              </span>
            </div>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
              Book Information
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Everything you need to know about this edition.
            </p>
          </div>

          <div className="grid overflow-hidden rounded-2xl border border-slate-100 sm:grid-cols-2">

            {/* ISBN */}
            <div className="border-b border-slate-100 p-5 sm:border-r">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                ISBN
              </p>
              <p className="mt-2 font-semibold text-slate-900">
                {productDetails.isbn || "—"}
              </p>
            </div>

            {/* Publisher */}
            <div className="border-b border-slate-100 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Publisher
              </p>
              <p className="mt-2 font-semibold text-slate-900">
                {productDetails.publisher || "—"}
              </p>
            </div>

            {/* Author */}
            <div className="border-b border-slate-100 p-5 sm:border-r">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Author
              </p>
              <p className="mt-2 font-semibold text-slate-900">
                {productDetails.author || "—"}
              </p>
            </div>

            {/* Publication Date */}
            <div className="border-b border-slate-100 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Publication Date
              </p>
              <p className="mt-2 font-semibold text-slate-900">
                {productDetails.publicationDate || "—"}
              </p>
            </div>

            {/* Pages */}
            <div className="border-b border-slate-100 p-5 sm:border-r">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Number of Pages
              </p>
              <p className="mt-2 font-semibold text-slate-900">
                {productDetails.numberOfPage || "—"}
              </p>
            </div>

            {/* Language */}
            <div className="border-b border-slate-100 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Language
              </p>
              <p className="mt-2 font-semibold text-slate-900">
                {productDetails.language || "—"}
              </p>
            </div>

            {/* Format */}
            <div className="border-b border-slate-100 p-5 sm:border-r">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Format
              </p>
              <p className="mt-2 font-semibold text-slate-900">
                {productDetails.format || "—"}
              </p>
            </div>

            {/* Edition */}
            <div className="border-b border-slate-100 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Edition
              </p>
              <p className="mt-2 font-semibold text-slate-900">
                {productDetails.edition || "—"}
              </p>
            </div>

            {/* Category */}
            <div className="p-5 sm:border-r">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Category
              </p>
              <p className="mt-2 font-semibold text-slate-900">
                {productDetails.category || "—"}
              </p>
            </div>

            {/* SKU */}
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                SKU
              </p>
              <p className="mt-2 font-semibold text-slate-900">
                {productDetails.sku || "—"}
              </p>
            </div>
          </div>
        </div>

        {/* ================= PRICE & INVENTORY ================= */}
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">

          <div className="mb-8">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-yellow-400" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">
                Store
              </span>
            </div>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
              Pricing & Stock
            </h2>
          </div>

          <div className="space-y-0">

            {/* Selling Price */}
            <div className="flex items-center justify-between border-b border-slate-100 py-5">
              <span className="text-sm text-slate-500">
                Selling Price
              </span>

              <span className="text-xl font-bold text-slate-950">
                ₹{productDetails.price || "0"}
              </span>
            </div>

            {/* Market Price */}
            <div className="flex items-center justify-between border-b border-slate-100 py-5">
              <span className="text-sm text-slate-500">
                Market Price
              </span>

              <span className="font-medium text-slate-500 line-through">
                ₹{productDetails.marketprice || "0"}
              </span>
            </div>

            {/* Quantity */}
            <div className="flex items-center justify-between border-b border-slate-100 py-5">
              <span className="text-sm text-slate-500">
                Available Quantity
              </span>

              <span className="font-bold text-slate-900">
                {productDetails.quantity ?? "—"}
              </span>
            </div>

            {/* SKU */}
            <div className="flex items-center justify-between py-5">
              <span className="text-sm text-slate-500">
                SKU
              </span>

              <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700">
                {productDetails.sku || "—"}
              </span>
            </div>
          </div>

          {/* Availability Card */}
          <div className="mt-6 rounded-2xl bg-slate-950 p-5 text-white">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-lg">
                ✓
              </div>

              <div>
                <p className="font-bold">
                  Ready to order
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-300">
                  This book is currently available and can be purchased
                  online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          PRODUCT HIGHLIGHTS
      ====================================================== */}
      <div className="mt-8">

        <div className="mb-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-yellow-400" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">
              Benefits
            </span>
          </div>

          <h2 className="mt-2 text-2xl font-bold text-slate-950">
            Shop with confidence
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {/* Delivery */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-100 text-xl transition-colors group-hover:bg-yellow-400">
              🚚
            </div>

            <h3 className="mt-5 font-bold text-slate-900">
              Fast Delivery
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Get your book delivered quickly and safely.
            </p>
          </div>

          {/* Payment */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-xl transition-colors group-hover:bg-green-400">
              🔒
            </div>

            <h3 className="mt-5 font-bold text-slate-900">
              Secure Payment
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Your payment information is protected and secure.
            </p>
          </div>

          {/* Returns */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-xl transition-colors group-hover:bg-blue-400">
              ↩️
            </div>

            <h3 className="mt-5 font-bold text-slate-900">
              Easy Returns
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Simple and hassle-free return experience.
            </p>
          </div>

          {/* Quality */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-xl transition-colors group-hover:bg-purple-400">
              📚
            </div>

            <h3 className="mt-5 font-bold text-slate-900">
              Quality Books
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Carefully selected books for every reader.
            </p>
          </div>

        </div>
      </div>

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}
      <div className="mt-8 overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-10 sm:px-10 lg:px-12">

        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400">
              Add it to your collection
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Ready to start reading?
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
              Order {productDetails.name} today and enjoy a great reading
              experience.
            </p>
          </div>

          <Link
            to={`/checkout/${id}`}
            className="flex shrink-0 items-center gap-2 rounded-xl bg-yellow-400 px-7 py-4 font-bold text-slate-950 transition-all hover:bg-yellow-300 active:scale-[0.98]"
          >
            <RiShoppingBag3Line className="text-xl" />
            Buy Now
          </Link>

        </div>
      </div>

    </div>
  </section>
</div>
  );
}

export default Bookpage;