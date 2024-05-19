import React, { useState } from 'react';
import axios from 'axios';
import eee from '../assets/banner-books/book2.png';
import backgroundVideo from '../assets/banner-background/vedio.mp4';

const SellYourBookPage = () => {
    const [formData, setFormData] = useState({
        bookTitle: '',
        bookSubtitle: '',
        bookDescription: '',
        bookImage: '',
    });

    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('bookTitle', formData.bookTitle);
        data.append('bookSubtitle', formData.bookSubtitle);
        data.append('bookDescription', formData.bookDescription);
        if (file) {
            data.append('bookImage', file);
        } else {
            data.append('bookImage', formData.bookImage);
        }

        try {
            await axios.post('http://localhost:3000/submit-book', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Book submitted successfully');
        } catch (error) {
            console.error('Error submitting book:', error);
        }
    };

    return (
        <div className="relative flex h-screen w-full items-center justify-center bg-gray-100">
            <video
                autoPlay
                loop
                muted
                className="absolute inset-0 h-full w-full object-cover"
                src={backgroundVideo}
            />
            <div className="relative w-full max-w-3xl overflow-hidden rounded-lg bg-white bg-opacity-90 shadow-lg sm:flex">
                <div className="m-2 w-full rounded-2xl bg-gray-400 bg-cover bg-center text-white sm:w-2/5" style={{ backgroundImage: `url(${preview || eee})` }}></div>
                <div className="w-full sm:w-3/5">
                    <div className="p-8">
                        <h1 className="text-3xl font-black text-slate-700">Sell Your Book</h1>
                        <p className="mt-2 mb-5 text-base leading-tight text-gray-600">Add your book details below</p>
                        <form className="mt-8" onSubmit={handleSubmit}>
                            <div className="relative mt-2 w-full">
                                <input
                                    type="text"
                                    id="bookTitle"
                                    name="bookTitle"
                                    value={formData.bookTitle}
                                    onChange={handleChange}
                                    className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                                    placeholder=" "
                                />
                                <label htmlFor="bookTitle" className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600">
                                    Book Title
                                </label>
                            </div>
                            <div className="relative mt-2 w-full">
                                <input
                                    type="text"
                                    id="bookSubtitle"
                                    name="bookSubtitle"
                                    value={formData.bookSubtitle}
                                    onChange={handleChange}
                                    className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                                    placeholder=" "
                                />
                                <label htmlFor="bookSubtitle" className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600">
                                    Author
                                </label>
                            </div>
                            <div className="relative mt-2 w-full">
                                <textarea
                                    id="bookDescription"
                                    name="bookDescription"
                                    value={formData.bookDescription}
                                    onChange={handleChange}
                                    className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 h-32 overflow-y-auto resize-none"
                                    placeholder=" "
                                ></textarea>
                                <label htmlFor="bookDescription" className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600">
                                    Book Description
                                </label>
                            </div>
                            <div className="relative mt-2 w-full">
                                <input
                                    type="text"
                                    id="bookImage"
                                    name="bookImage"
                                    value={formData.bookImage}
                                    onChange={handleChange}
                                    className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                                    placeholder=" "
                                />
                                <label htmlFor="bookImage" className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600">
                                    Book Image URL
                                </label>
                            </div>
                            <div className="relative mt-2 w-full">
                                <input
                                    type="file"
                                    id="bookFile"
                                    name="bookFile"
                                    onChange={handleFileChange}
                                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                                />
                                <label htmlFor="bookFile" className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600">
                                    Upload Book Image
                                </label>
                            </div>
                            <button type="submit" className="mt-4 w-full cursor-pointer rounded-lg bg-blue-600 pt-3 pb-3 text-white shadow-lg hover:bg-blue-400">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellYourBookPage;
