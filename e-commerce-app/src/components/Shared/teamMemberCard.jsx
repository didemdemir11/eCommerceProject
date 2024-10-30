import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import teamMembers from "../../data/teamMembers";

const TeamMemberCard = ({ teamMembers: membersToShow }) => {
  const displayMembers = membersToShow || teamMembers;
  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
          {displayMembers.map((member) => (
            <div
              key={member.id}
              className="w-[300px] h-[375px] bg-white  flex flex-col items-center p-4"
            >
              {/* Görsel */}
              <div className="w-full h-[200px] overflow-hidden mb-4">
                <img
                  src={member.imageSrc}
                  alt={`${member.userName}'s profile`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Kullanıcı İsmi ve Meslek */}
              <h3 className="text-lg font-semibold text-center">
                {member.userName}
              </h3>
              <p className="text-gray-500 text-center">{member.profession}</p>

              {/* Sosyal Medya İkonları */}
              <div className="flex space-x-4 mt-3">
                <FontAwesomeIcon icon={faFacebook} color="#23A6F0" />
                <FontAwesomeIcon icon={faInstagram} color="#23A6F0" />
                <FontAwesomeIcon icon={faTwitter} color="#23A6F0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TeamMemberCard;
