import React from "react";
import PageContent from "../../components/layout/PageContent";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import TeamMemberCard from "../../components/Shared/teamMemberCard";
import teamMembers from "../../data/teamMembers";
import LogoSection from "../../components/ShopPage/LogoSection";

const AboutPage = () => {
  return (
    <PageContent>
      {/* About Us Section */}
      <div className="about-us-section flex flex-col md:flex-row items-center md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-6">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left md:justify-center">
          <h1 className="text-3xl font-bold text-[#252B42]">About Us</h1>
          <h4 className="text-[#737373] mt-4">
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </h4>
          <button className="mt-6 bg-[#23A6F0] text-white py-2 px-4 rounded">
            Get Quote Now
          </button>
        </div>
        <div className="flex-1">
          <img
            src="/images/aboutpicture1.png"
            className="w-full h-auto md:h-[500px] object-cover"
            alt="About us"
          />
        </div>
      </div>

      {/* Problem Trying Section */}
      <div className="mt-10 text-center md:text-left md:flex md:items-start  md:space-x-6">
        <div className="flex-1">
          <p className="text-[#E74040]">Problems trying</p>
          <h3 className="text-[#252B42] text-2xl font-bold mt-2">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
        </div>
        <p className="text-[#737373] mt-2 md:mt-0 md:flex-1 md:self-center">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Statistics Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-y-6 gap-x-10 text-center md:py-12">
        {[
          { label: "Happy Customers", value: "15K" },
          { label: "Monthly Visitors", value: "150K" },
          { label: "Countries Worldwide", value: "15" },
          { label: "Top Partners", value: "100+" },
        ].map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#252B42]">
              {stat.value}
            </h1>
            <h5 className="text-sm md:text-base text-[#737373]">
              {stat.label}
            </h5>
          </div>
        ))}
      </div>

      {/* Video Section */}
      <div className="video-section my-8">
        <div className="flex justify-center">
          <Plyr
            source={{
              type: "video",
              sources: [
                {
                  src: "https://www.youtube.com/watch?v=NpQbEadBq_w",
                  provider: "youtube",
                },
              ],
            }}
            className="rounded-[20px] shadow-lg overflow-hidden w-full md:w-3/4"
          />
        </div>
      </div>

      {/* Team Member Section */}
      <div className="teamMember-section my-8">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
        <TeamMemberCard teamMembers={teamMembers.slice(0, 3)} />
      </div>

      <LogoSection />
    </PageContent>
  );
};

export default AboutPage;
