import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBookDetails();
  }, [id]);

  const fetchBookDetails = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`http://localhost:3000/book/${id}`);
      setBook(response.data);
    } catch (error) {
      console.error('Error fetching book details:', error);
      setError('Failed to fetch book details');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!book) {
    return <div>No book found for ID {id}</div>;
  }

  return (
    <>
      <div className="max-w-md mx-auto mt-8 p-7 p border space-x-5 border-gray-200 rounded-lg shadow-md bg-gray-50">
        <h2 className="text-xl font-bold mb-4">{book.title}</h2>
        <img src={book.imageUrl} alt={book.title} className="w-full mb-4 rounded-lg" />
        <p className="text-gray-700">{book.description}</p>
      </div>
      <div className="mt-8">
        {/* Additional content below the book details */}
      </div>
    </>
  );
};

export default BookDetails;
