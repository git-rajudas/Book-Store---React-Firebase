import { useState } from "react";
import { createListing } from "../services/product.services";
import { useAuth } from "../context/AuthContext";

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
        <div className="">
        <section className="text-gray-600 body-font h-full w-full absolute">
                <div className="justify-center flex flex-wrap items-center w-full h-[100%]">
                    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg py-10 px-15 flex flex-col  w-full mt-10 md:mt-0 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)];">
                        <h2 className="text-gray-900 text-2xl font-medium title-font mb-5">
                            Add Book
                        </h2>
                        <div className="relative mb-4">
                            <label htmlFor="bookName" className="leading-7 text-sm text-gray-600">
                                Enter Book Name
                            </label>
                            <input
                                type="text"
                                id="bookName"
                                name="bookName"
                                placeholder="Book Name"
                                className="w-full bg-white rounded-2xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                onChange={(e) => setName(e.target.value)}
                            ></input>
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="isbn" className="leading-7 text-sm text-gray-600">
                                Enter ISBN Number
                            </label>
                            <input
                                type="text"
                                id="isbn"
                                name="isbn"
                                placeholder="ISBN"
                                className="w-full bg-white rounded-2xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                onChange={(e) => setIsbn(e.target.value)}
                            ></input>
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="price" className="leading-7 text-sm text-gray-600">
                                Enter Book Price
                            </label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                placeholder="Price"
                                className="w-full bg-white rounded-2xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                onChange={(e) => setPrice(e.target.value)}
                            ></input>
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="coverpic" className="leading-7 text-sm text-gray-600">
                                Cover Pic
                            </label>
                            <input
                                type="file"
                                id="coverpic"
                                name="coverpic"
                                className="w-full bg-white rounded-2xl border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                onChange={(e) => setCoverpic(e.target.files[0])}
                            ></input>
                        </div>

                        <div className="flex flex-col gap-4">
                            <button
                                className="text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded-2xl text-lg cursor-pointer shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]"
                                onClick={handleSubmit}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default AddBook;
