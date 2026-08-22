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
    <div className="min-h-screen bg-gray-50">
      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-6xl">

          {/* Breadcrumb */}
          <div className="mb-8 text-sm text-gray-500">
            <Link
              to="/"
              className="transition-colors hover:text-yellow-500"
            >
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">
              {productDetails.name}
            </span>
          </div>

          {/* Product */}
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
            <div className="grid lg:grid-cols-2">

              {/* Image */}
              <div className="flex items-center justify-center bg-gray-100 p-6 sm:p-10 lg:p-14">
                <div className="group relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-lg">
                  <img
                    src={productDetails.imageURL}
                    alt={productDetails.name}
                    className="aspect-[4/5] w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />

                  <span className="absolute left-4 top-4 rounded-full bg-yellow-400 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gray-900">
                    Book
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-col p-6 sm:p-10 lg:p-12">

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-500">
                  Featured Book
                </p>

                <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {productDetails.name}
                </h1>

                {/* Rating */}
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex text-yellow-400">
                    ★★★★★
                  </div>

                  <span className="text-sm text-gray-500">
                    4.8 (120 reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="mt-6">
                  <span className="text-3xl font-bold text-gray-900">
                    ₹{productDetails.price}
                  </span>
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-gray-200" />

                {/* Description */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    About this book
                  </h2>

                  <p className="mt-3 leading-7 text-gray-600">
                    Discover this amazing book and add it to your collection.
                    Whether you're looking for an inspiring read or your next
                    favorite story, this book is a great choice.
                  </p>
                </div>

                {/* Details */}
                <div className="mt-6 rounded-2xl bg-gray-50 p-5">
                  <div className="flex items-center justify-between border-b border-gray-200 py-3">
                    <span className="text-sm text-gray-500">
                      Category
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      Books
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-gray-200 py-3">
                    <span className="text-sm text-gray-500">
                      Availability
                    </span>
                    <span className="text-sm font-medium text-green-600">
                      In Stock
                    </span>
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <span className="text-sm text-gray-500">
                      Delivery
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      Available
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-auto pt-8">
                  <div className="flex gap-3">

                    <Link
                      to={`/checkout/${id}`}
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gray-900 px-6 py-3.5 font-semibold text-white transition-all hover:bg-yellow-400 hover:text-gray-900 active:scale-[0.98]"
                    >
                      <RiShoppingBag3Line className="text-xl" />
                      Buy Now
                    </Link>

                    <button
                      type="button"
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 transition-all hover:border-yellow-400 hover:bg-yellow-50 hover:text-yellow-500"
                    >
                      <RiHeartLine className="text-xl" />
                    </button>

                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Bottom Features */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <p className="font-semibold text-gray-900">
                🚚 Fast Delivery
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Get your book delivered quickly.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <p className="font-semibold text-gray-900">
                🔒 Secure Payment
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Your payment information is protected.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <p className="font-semibold text-gray-900">
                ↩️ Easy Returns
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Simple and hassle-free returns.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Bookpage;