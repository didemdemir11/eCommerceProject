import React from "react";
import PageContent from "../../components/layout/PageContent";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

const AboutPage = () => {
  return (
    <>
      <PageContent>
        <div>
          <h1 className="text-3xl font-bold text-[#252B42]">About Us</h1>
          <h4 className="text-[#737373]">
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </h4>
          <button></button>
          <img></img>
        </div>
        <div>
          <p className="text-[#E74040]"> Problems trying</p>
          <h3 className="text-[#252B42]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
          <p className="text-[#737373]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div>
          <div>
            <h1 className="text-3xl font-bold text-[#252B42]">15K</h1>
            <h5 className="text-[#737373]">Happy Customers</h5>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#252B42]">150K</h1>
            <h5 className="text-[#737373]">Monthly Visitors</h5>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#252B42]">15</h1>
            <h5 className="text-[#737373]">Countries Worldwide</h5>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-[#252B42]">100+</h1>
            <h5 className="text-[#737373]">Top Partners</h5>
          </div>
        </div>
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
              className="rounded-[20px] shadow-lg overflow-hidden"
            />
          </div>
        </div>
      </PageContent>
    </>
  );
};

export default AboutPage;
