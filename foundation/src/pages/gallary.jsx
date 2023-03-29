import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "@/constants";
import Image from "next/image";
import PagesNavbar from "@/components/PagesNavbar";

const Gallary = () => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(`${API_URL}/gallary/`);
        setPhotos(response.data);
        setIsSuccess(true);
      } catch (error) {
        console.log(error);
      }

      setIsLoading(false);
    };

    fetchProjects();
  }, []);

  return (
    <>
     <PagesNavbar/>
      {!isLoading && isSuccess && (
        <div className="grid grid-cols-2 mt-20 gap-5 mx-5">
          {photos.map((photo) => (
            <div className="col-span-2 mid:col-span-1" key={photo.id}>
              <div className="relative w-full h-[400px]">
                <Image
                  src={photo.image}
                  className="absolute rounded-t-xl rounded-br-xl"
                  style={{
                    objectFit: "cover",
                  }}
                  fill
                  sizes="100vw"
                  alt="image"
                />
              </div>
              <p className="font-bold">{photo.caption}</p>
            </div>
          ))}
        </div>
      )}

      <div className="my-20">
        {isLoading && <p className="text-center">Loading...</p>}
        {!isLoading && !isSuccess && (
          <p className="text-center">Failed to fetch photos.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Gallary;
