import { useEffect, useMemo, useState } from "react";
import { getProducts } from "../services/product.services";
import Swal from "sweetalert2";
import Card  from "../components/Card"

function Shop() {

    const [products, setProducts] = useState([]); 
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [maxPrice, setMaxPrice] = useState(1000); 
    const [sort, setSort] = useState("default");

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;

    useEffect(()=>{
        try{
            const fetchProducts = async () => {
                const data = await getProducts();
                setProducts(data);      
            };

            fetchProducts();
        }catch(error){
            Swal.fire(
                {
                    title: "Failed to find products",
                    text: error.message,
                    confirmButtonColor: "#facc15"
                }
            )
        }

    },[]);


    const categories = useMemo(()=> {
        const uniqueCategories = [
            ...new Set(
                products.map((product)=> product.category).filter(Boolean)
            ),
        ];

        return ["All", ...uniqueCategories];
    },[products]);

    

    const highestPrice =  useMemo(()=> {
        if(!products.length) return 1000;
        return Math.ceil(
            Math.max(...products.map((product)=> Number(product.price) || 0 ))
        );
    },[products]);




    const filteredProducts = useMemo(()=>{
        let result = [...products];

        //search
        if(search.trim()){
            const searchTerm = search.toLowerCase();
            result = result.filter((product)=> product.name?.toLowerCase().includes(searchTerm));
        }
        // catagory
        if(category !== "All"){
            result = result.filter((product)=> product.category === category);
        }

        //price 
        result = result.filter((product)=> product && Number(product.price || 0) <= maxPrice);

        //sorting
        if(sort === "name"){
            result.sort((a,b)=>
                (a.name || "").localeCompare(b.name || "")
            );
        }

        if(sort === "low"){
            result.sort((a,b)=>
                Number(a.price || 0 ) - Number(b.price || 0)
            );
        }

        if(sort === "high"){
            result.sort((a,b)=>
                Number(b.price || 0 ) - Number(a.price || 0)
            );
        }

        return result;
    },[products,search,category,maxPrice,sort]);


    useEffect(()=>{
        setCurrentPage(1);
    },[search, category, maxPrice, sort])

    const totalPages = Math.ceil(
        filteredProducts.length / productsPerPage
    )

    const startIndex = 
        (currentPage - 1) * productsPerPage;

    const currentProducts = filteredProducts.slice(startIndex, startIndex+productsPerPage);

    // reset maxprice after product load form firebase
    useEffect(()=>{
        setMaxPrice(highestPrice);
    },[highestPrice])

    // clear all fillters

    const clearFilters = () => {
        setSearch("");
        setCategory("All");
        setMaxPrice(highestPrice);
        setSort("default");
        setCurrentPage(1);
    }


    return (
        <div className="min-h-screen w-full bg-gray-50">

            <section className="w-full">

                <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

                    {/* Page Header */}
                    <div className="mb-8">

                        <p className="text-sm font-semibold uppercase tracking-wider text-yellow-500">

                            Store
                        </p>
                        <h1 className="mt-1 text-3xl font-bold text-gray-900">

                            Browse All Books
                        </h1>
                        <p className="mt-2 text-gray-500">

                            Discover books you'll love and find your next great read.
                        </p>
                    </div>
                    {/* Main Shop Layout */}
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">

                        {/* ================= SIDEBAR ================= */}
                        <aside className="h-fit rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

                            {/* Filter Heading */}
                            <div className="mb-6 flex items-center justify-between">

                                <h2 className="text-lg font-bold text-gray-900">

                                    Filters
                                </h2>
                                <button
                                      onClick={clearFilters}
                                    className="text-sm font-medium text-yellow-600 transition hover:text-yellow-700"
                                >

                                    Clear
                                </button>
                            </div>
                            {/* Categories */}
                            <div className="border-b border-gray-200 pb-6">

                                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-700">

                                    Categories
                                </h3>
                                <div className="space-y-3">

                                    {categories.map((item) => (
                                        <button
                                            key={item}
                                            onClick={() => setCategory(item)}
                                            className={`flex w-full items-center justify-between rounded-lg px-6 py-3 text-left text-sm transition ${category === item ? "bg-yellow-50 font-semibold text-yellow-700" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}
                                        >

                                            <span>{item}</span>
                                            {category === item && (
                                                <span className="text-yellow-500"> ✓ </span>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            {/* Price Filter */}
                            <div className="pt-6">

                                <div className="mb-4 flex items-center justify-between">

                                    <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-700">

                                        Price
                                    </h3>
                                    <span className="text-sm font-semibold text-gray-900">

                                        ₹{maxPrice}
                                    </span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                      max={highestPrice}
                                      value={maxPrice}
                                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                                    className="w-full accent-yellow-500"
                                />
                                <div className="mt-2 flex justify-between text-xs text-gray-400">

                                    <span>₹0</span> <span>₹{highestPrice}</span>
                                </div>
                            </div>
                        </aside>
                        {/* ================= PRODUCTS ================= */}
                        <div className="lg:col-span-3">

                            {/* Search + Sort Bar */}
                            <div className="mb-6 flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">

                                {/* Search */}
                                <div className="relative w-full md:max-w-md">

                                    <input
                                        type="text"
                                        placeholder="Search books..."
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                                    />
                                </div>
                                {/* Sort */}
                                <div className="flex items-center gap-3">

                                    <label
                                        htmlFor="sort"
                                        className="whitespace-nowrap text-sm font-medium text-gray-600"
                                    >

                                        Sort by
                                    </label>
                                    <select
                                        id="sort"
                                        value={sort}
                                        onChange={(e) => setSort(e.target.value)}
                                        className="rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100"
                                    >

                                        <option value="default"> Featured </option>
                                        <option value="name"> Name </option>
                                        <option value="low"> Price: Low to High </option>
                                        <option value="high"> Price: High to Low </option>
                                    </select>
                                </div>
                            </div>
                            {/* Results Info */}
                            <div className="mb-5 flex items-center justify-between">

                                <p className="text-sm text-gray-500 flex gap-2">

                                    Showing
                                    <p className="font-semibold text-gray-800">

                                        {filteredProducts.length}
                                    </p>
                                    {filteredProducts.length === 1 ? "book" : "books"}
                                </p>
                                {filteredProducts.length > 0 && (
                                    <p className="hidden text-sm text-gray-400 sm:block">
                                        Page {currentPage} of {totalPages}
                                    </p>
                                )}
                            </div>
                            {/* Product Grid */}



                            {currentProducts.length > 0 ? (
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">

                                    {currentProducts.map((product) => (
                                        <Card key={product.id} product={product} />
                                    ))}
                                </div>
                            ) : (
                                <div className="flex min-h-[350px] items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white">

                                    <div className="px-5 text-center">

                                        <div className="mb-3 text-4xl"> 📚 </div>
                                        <h3 className="text-lg font-semibold text-gray-800">

                                            No books found
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">

                                            Try changing your search or filters.
                                        </p>
                                        <button
                                            onClick={clearFilters}
                                            className="mt-5 rounded-lg bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-yellow-500"
                                        >

                                            Clear Filters
                                        </button>
                                    </div>
                                </div>
                            )}



                            {/* ================= PAGINATION ================= */}
                            {totalPages > 1 && (
                                <div className="mt-10 flex items-center justify-center gap-2">

                                    {/* Previous */}
                                    <button
                                        onClick={() =>
                                            setCurrentPage((page) =>
                                                Math.max(page - 1, 1)
                                            )
                                        }
                                        disabled={currentPage === 1}
                                        className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
                                    >
                                        ← Previous
                                    </button>

                                    {/* Page Numbers */}
                                    <div className="flex items-center gap-1">
                                        {Array.from(
                                            { length: totalPages },
                                            (_, index) => index + 1
                                        ).map((page) => (
                                            <button
                                                key={page}
                                                onClick={() =>
                                                    setCurrentPage(page)
                                                }
                                                className={`h-10 w-10 rounded-lg text-sm font-medium transition ${currentPage === page
                                                        ? "bg-yellow-400 text-gray-900"
                                                        : "border border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
                                                    }`}
                                            >
                                                {page}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Next */}
                                    <button
                                        onClick={() =>
                                            setCurrentPage((page) =>
                                                Math.min(
                                                    page + 1,
                                                    totalPages
                                                )
                                            )
                                        }
                                        disabled={
                                            currentPage === totalPages
                                        }
                                        className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
                                    >
                                        Next →
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Shop;
