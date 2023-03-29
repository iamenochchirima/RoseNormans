import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "@/components/Footer";
import PagesNavbar from "@/components/PagesNavbar";
import { API_URL } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import TimeAgo from "react-timeago";

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${API_URL}/articles?page=${page}&page_size=${pageSize}`
        );
        setArticles(response.data.results);
        setCount(response.data.count);
        setSuccess(true);
      } catch (error) {
        setError("Oops! Something went wrong while fetching the articles.");
      }
      setLoading(false);
    };
    fetchArticles();
  }, [page, pageSize]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevious = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const totalPages = Math.ceil(count / pageSize);

  console.log(articles);

  return (
    <div className="">
      <PagesNavbar />
      <div className="mx-5 md:mx-10 min-h-[400px]">
        {!loading && success && (
          <>
            <ul className="grid grid-cols-6 mt-24 gap-5">
              {articles.map((article) => (
                <li
                  className="col-span-6 ss:col-span-3 md:col-span-2 bg-dimWhite"
                  key={article.id}
                >
                  <Link
                    className="relative"
                    href={`/articles/${encodeURIComponent(article.slug)}/`}
                  >
                    <div className="relative w-full h-[250px] hover:scale-105 duration-300">
                      <Image
                        src={article.cover_image}
                        className="absolute"
                        style={{
                          objectFit: "cover",
                        }}
                        fill
                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                        alt="article cover image"
                      />
                    </div>
                    <div className="mt-3">
                      <h1 className="font-bold mb-2 hover:underline">
                        {article.title}
                      </h1>
                      <h1 className="text-gray-700 text-sm">
                        BY{" "}
                        <span className="font-bold">
                          {article.author.toUpperCase()}
                        </span>
                      </h1>
                      <div className="">
                        <span className="text-black text-sm">
                          <TimeAgo date={article.created_at} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex justify-center gap-5 mt-8">
              {page > 1 && (
                <button
                  onClick={handlePrevious}
                  className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
                >
                  Previous
                </button>
              )}
              {page < totalPages && (
                <button
                  onClick={handleLoadMore}
                  className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
                >
                  Next
                </button>
              )}
            </div>
            <div className="my-4 text-center">
                <p>
                  Page <span>{page}</span> of <span>{totalPages}</span>
                </p>
              </div>
          </>
        )}
        <div className="my-20">
          {loading && <p className="text-center">Loading...</p>}
          {!loading && !success && (
            <p className="text-center">Failed to fetch articles.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
