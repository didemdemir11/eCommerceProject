import React from "react";
import PageContent from "../components/layout/PageContent";
import TeamMemberCard from "../components/Shared/teamMemberCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const TeamPage = () => {
  return (
    <>
      <PageContent>
        {/* Başlık ve Alt Başlık */}
        <div className="text-center my-4">
          <h5 className="text-[#737373] text-sm font-bold">WHAT WE DO</h5>
          <h1 className="text-[#252B42] text-4xl md:text-5xl font-bold mt-2">
            Innovation tailored for you
          </h1>
        </div>

        {/* Breadcrumb */}
        <div className="mt-6 md:mt-4 flex flex-col items-center">
          <Breadcrumb
            className="mt-2 md:mt-0"
            separator={<BreadcrumbSeparator />}
          >
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="font-bold text-[#252B42]">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/team"
                  className="font-bold text-[#737373]"
                >
                  Team
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </PageContent>

      {/* Picture Collage */}
      <div className="picture-collage grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-6">
        <img
          src="/images/teamPage1.jpg"
          className="w-full h-full object-cover"
          alt="Team 1"
        />
        <div className="grid grid-cols-2 grid-rows-2 gap-2">
          <img
            src="/images/teamPage2.jpg"
            className="w-full h-full object-cover"
            alt="Team 2"
          />
          <img
            src="/images/teamPage3.jpg"
            className="w-full h-full object-cover"
            alt="Team 3"
          />
          <img
            src="/images/teamPage4.jpg"
            className="w-full h-full object-cover"
            alt="Team 4"
          />
          <img
            src="/images/teamPage5.jpg"
            className="w-full h-full object-cover"
            alt="Team 5"
          />
        </div>
      </div>

      {/* Meet Our Team */}
      <div className="teamMember-section my-8">
        <h2 className="text-4xl font-bold text-center mb-8 text-[#252B42]">
          Meet Our Team
        </h2>
        <TeamMemberCard />
      </div>

      {/* Start Free Trial Section */}
      <PageContent>
        <div className="text-center my-8">
          <h2 className="text-[#252B42] text-2xl font-bold">
            Start your 14 days free trial
          </h2>
          <p className="text-[#737373] text-base mt-4">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent.
          </p>
          <button className="mt-6 bg-[#23A6F0] text-white py-2 px-6 rounded">
            Try it free now
          </button>

          {/* Sosyal Medya İkonları */}
          <div className="flex justify-center space-x-4 mt-6">
            <FontAwesomeIcon icon={faFacebook} color="#23A6F0" />
            <FontAwesomeIcon icon={faInstagram} color="#23A6F0" />
            <FontAwesomeIcon icon={faTwitter} color="#23A6F0" />
            <FontAwesomeIcon icon={faLinkedin} color="#23A6F0" />
          </div>
        </div>
      </PageContent>
    </>
  );
};

export default TeamPage;
