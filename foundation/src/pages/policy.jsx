import Footer from "@/components/Footer";
import PagesNavbar from "@/components/PagesNavbar";
import Link from "next/link";
import React from "react";

const Policy = () => {
  return (
    <>
      <PagesNavbar />
      <div className="flex justify-center mt-24 mb-10">
        <div className="sm:w-3/4 mx-5">
          <h1 className="text-center text-4xl font-graphikBold text-gray-800 my-5">
            PRIVACY POLICY
          </h1>
          <div className="">
            <p>
              Thank you for choosing to use our website, Rose Normans
              Foundation. We respect your privacy and are committed to
              protecting your personal information. This document explains how
              we use, and protect your personal information when you visit our
              website.
            </p>
            <h1 className="text-lg font-graphikSemiBold my-3">
              Information we collect
            </h1>
            <p>
              We only use Google Analytics as a tracking service to monitor and
              analyze traffic to our website. We do not collect any personally
              identifiable information from our visitors. Google Analytics
              collects information such as your IP address, browser type, and
              referral source. This information is used to help us improve our
              website and provide you with a better user experience.
            </p>
            {/* <h1 className="text-lg font-graphikSemiBold my-3">Use of cookies</h1>
            <p>
              We use cookies to personalize your experience on our website.
              Cookies are small files that are placed on your device when you
              visit our website. We use cookies to remember your preferences and
              settings, to provide you with personalized content, and to analyze
              how our website is used.
            </p> */}
            <h1 className="text-lg font-graphikSemiBold my-3">
              Third-party links:
            </h1>
            <p>
              Our website may contain links to third-party websites. We do not
              control the content or privacy practices of these websites and are
              not responsible for their practices. We encourage you to review
              the privacy policies of these websites before providing them with
              any personal information.
            </p>
            <h1 className="text-lg font-graphikSemiBold my-3">
              Changes to our privacy policy
            </h1>
            <p>
              We reserve the right to update our privacy policy at any time. We
              will notify you of any changes by posting the new privacy policy
              on our website here.
            </p>
            <h1 className="text-lg font-graphikSemiBold my-3">Contact us</h1>
            <p>
              If you have any questions or concerns about our privacy policy,
              please contact us <Link className="underline" href="/contact">here</Link>. By using
              our website, you agree to the terms of our privacy policy.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Policy;
