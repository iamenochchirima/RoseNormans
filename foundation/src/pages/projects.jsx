import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "@/constants";
import Image from "next/image";
import Footer from "@/components/Footer";
import PagesNavbar from "@/components/PagesNavbar";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(`${API_URL}/projects`);
        setProjects(response.data);
        setIsSuccess(true);
      } catch (error) {
        console.log(error);
      }

      setIsLoading(false);
    };

    fetchProjects();
  }, []);

  return (
    <div className="font-graphik">
      <PagesNavbar/>
      <div className="min-h-screen ">
        <div className="relative w-full h-[400px]">
          <div className="absolute w-full h-full z-10  flex flex-col justify-center">
            <h1 className="font-graphikSemiBold text-center text-white text-5xl p-5">
              OUR PROJECTS
            </h1>
          </div>
          <Image
            src="/projects-header.jpg"
            className="absolute"
            style={{
              objectFit: "cover",
            }}
            fill
            sizes="100vw"
            alt="project cover image"
          />
        </div>
        {!isLoading && isSuccess && (
          <div className="my-10 mx-5 md:mx-10 grid grid-cols-1 gap-10">
            {projects.map((project) => (
              <div className="col-span-1 flex justify-center"  key={project.id}>
                <div className="mid:w-3/4  bg-slate-100 shadow-md">
                  <div className="relative w-full h-[300px]">
                    <Image
                      src={project.cover_image}
                      className="absolute"
                      style={{
                        objectFit: "cover",
                      }}
                      fill
                      sizes="100vw"
                      alt="project cover image"
                    />
                  </div>
                 <div className="mt-3">
                 <h1 className="font-bold my-5 font-graphikBold ">{project.project_title}</h1>
                  <p>{project.body}</p>
                 </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="my-10">
          {isLoading && <p className="text-center">Loading...</p>}
          {!isLoading && !isSuccess && (
            <p className="text-center">Failed to fetch projects.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
