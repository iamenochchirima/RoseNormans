import Footer from "@/components/Footer";
import PagesNavbar from "@/components/PagesNavbar";
import { useRouter } from "next/router";
import axios from "axios";
import { API_URL } from "@/constants";
import { useState, useEffect } from "react";
import Image from "next/image";
import TimeAgo from "react-timeago";

const ArticleDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_URL}/articles/${slug}`);
        setArticle(response.data);
        setSuccess(true);
      } catch (error) {
        setError("Oops! Something went wrong while fetching the article.");
      }
      setLoading(false);
    };
    if (slug) {
      fetchArticle();
    }
  }, [slug]);

  return (
    <div>
      <PagesNavbar />
      <div className="mt-24 mx-5 md:mx-10 mb-10 min-h-screen">
        {loading && <p>Loading...</p>}
        {success && (
          <div className="flex justify-center">
            <div className="w-full md:w-3/4">
              <div className="grid grid-cols-2 gap-5 mb-10">
                <div className="hidden col-span-2 mid:col-span-1 mid:flex flex-col justify-center">
                  <div className="">
                    <h1 className="text-5xl font-graphikBold">
                      {article.title}
                    </h1>
                    <h1 className="text-gray-800 mt-6 mb-4">
                      BY{" "}
                      <span className="font-bold">
                        {article.author.toUpperCase()}
                      </span>
                    </h1>
                    <span className="text-black text-sm">
                      <TimeAgo date={article.created_at} />
                    </span>
                  </div>
                </div>
                <div className="col-span-2 mid:col-span-1">
                  <div className="relative w-full h-[400px]">
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
                </div>
                <div className="mid:hidden col-span-2 mid:col-span-1 flex flex-col justify-center">
                  <div className="">
                    <h1 className="text-5xl font-graphikBold">
                      {article.title}
                    </h1>
                    <h1 className="text-gray-800 mt-6 mb-4">
                      BY{" "}
                      <span className="font-bold">
                        {article.author.toUpperCase()}
                      </span>
                    </h1>
                    <span className="text-black text-sm">
                      <TimeAgo date={article.created_at} />
                    </span>
                  </div>
                </div>
              </div>
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>
          </div>
        )}
        {!loading && error && <p>{error}</p>}
      </div>
      <Footer />
    </div>
  );
};

export default ArticleDetail;
