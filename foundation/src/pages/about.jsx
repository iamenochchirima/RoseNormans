import Footer from "@/components/Footer";
import PagesNavbar from "@/components/PagesNavbar";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <PagesNavbar />
      <div className="flex justify-center mt-20">
        <div className="relative w-full h-[400px] ">
          <div className="absolute w-full h-full z-10 bg-black bg-opacity-30 flex flex-col justify-center">
            <h1 className="font-graphikSemiBold text-center text-white text-5xl p-5">
              ABOUT US
            </h1>
          </div>
          <Image
            src="/projects.jpg"
            className="absolute"
            style={{
              objectFit: "cover",
            }}
            fill
            sizes="100vw"
            alt="project cover image"
          />
        </div>
      </div>
      <div className="min-h-screen flex mt-5 mb-10 justify-center">
        <div className="w-3/4">
          <div className="">
            <h1 className="text-3xl font-graphikBold">Our vision</h1>
            <p className="text-lg my-5">
              Rose Normans foundation is a mental health organization that aims
              to address the growing mental health crisis in our society. The
              foundation has a multifaceted approach to achieving its
              objectives, including raising awareness and sensitization on
              mental health issues, providing mental health services to schools,
              workplaces, and communities, and advocating for policies that
              promote mental health and wellness. By offering mental health
              services, the foundation aims to reduce the stigma surrounding
              mental health and promote early detection and intervention of
              mental health conditions. Additionally, the foundation seeks to
              create safe and supportive environments that promote mental
              well-being and empower individuals to achieve their full
              potential. Through its efforts, the Rose Normans foundation is
              contributing to the larger conversation on mental health and
              helping to build a healthier and more resilient society.
            </p>
            <h1 className="text-3xl font-graphikBold">Our goal and services</h1>
            <div className="text-lg my-5">
              <h1 className="font-bold my-3">
                Sensitize communities about mental health:
              </h1>
              <p>
                The Rose Normans Foundation recognizes that mental health is a
                critical aspect of overall health and wellness, and that many
                people in our communities may not fully understand or appreciate
                the importance of mental health. To address this issue, the
                foundation has developed awareness campaigns and community
                outreach programs that aim to sensitize people about mental
                health issues. These campaigns help to break down stigma and
                promote open dialogue about mental health, which can lead to
                increased awareness, understanding, and support for those
                struggling with mental health issues.
              </p>
              <h1 className="font-bold my-3">
                Educate parents, schools, and workplaces about mental health:
              </h1>
              <p>
                Parents, schools, and workplaces are important stakeholders in
                mental health promotion and intervention. To support these
                groups, the foundation has developed educational programs and
                resources that aim to increase knowledge and awareness about
                mental health. By providing information about the signs and
                symptoms of mental health issues, as well as strategies for
                prevention and intervention, the foundation is helping to create
                a more informed and supportive environment for those struggling
                with mental health challenges.
              </p>
              <h1 className="font-bold my-3">
                Create jobs for psychiatrists, therapists, and psychologists:
              </h1>
              <p>
                Access to mental health services is a critical aspect of mental
                health care. To address this need, the foundation has created
                job opportunities for psychiatrists, therapists, and
                psychologists. By providing job opportunities in the mental
                health field, the foundation is not only creating much-needed
                employment opportunities, but also expanding the availability of
                mental health services in communities that may otherwise be
                underserved.
              </p>
              <h1 className="font-bold my-3">
                Offer readily available and affordable yet effective mental
                health services:
              </h1>
              <p>
                The foundation recognizes that access to mental health services
                can be a significant barrier for many individuals, particularly
                those in underserved communities. To address this need, the
                foundation has developed affordable yet effective mental health
                services that are available to those in need. These services
                include counseling, therapy, and other evidence-based treatments
                that are designed to meet the unique needs of each individual.
                By providing affordable and effective mental health services,
                the foundation is helping to ensure that all individuals have
                access to the care they need to achieve optimal mental health
                and wellness.
              </p>
            </div>
            <h1 className="text-2xl font-graphikBold mb-5">
              Rose Normans services are offered in two streams
            </h1>
            <h1 className="font-bold">
              1. The profitable stream (FREE SERVICES)
            </h1>
            <h1 className="font-bold">
              2. The non profitable stream (PAID SERVICES)
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
