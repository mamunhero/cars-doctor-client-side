import teamimgone from "../../../../src/assets/images/team/1.jpg"
import teamimgtwo from "../../../../src/assets/images/team/2.jpg"
import teamimgthree from "../../../../src/assets/images/team/3.jpg"
import { FaFacebook,FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
const Team = () => {
  return (
    <div className="mt-20">
      <div className="text-center space-y-5">
        <h2 className="text-2xl font-semibold text-orange-600">Team</h2>
       <h2 className="text-5xl font-semibold text-[#151515]">Meet Our Team</h2>
        <p className="text-base text-[#737373] font-normal">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which donot look even slightly believable.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 mb-5">
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={teamimgone} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p>Engine Expert</p>
            <span className="flex items-center gap-5 text-xl">
              <FaFacebook></FaFacebook>
              <FaTwitter></FaTwitter>
              <FaLinkedin></FaLinkedin>
              <FaInstagram></FaInstagram>
            </span>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={teamimgtwo} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p>Engine Expert</p>
            <span className="flex items-center gap-5 text-xl">
              <FaFacebook></FaFacebook>
              <FaTwitter></FaTwitter>
              <FaLinkedin></FaLinkedin>
              <FaInstagram></FaInstagram>
            </span>
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={teamimgthree} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p>Engine Expert</p>
            <span className="flex items-center gap-5 text-xl">
              <FaFacebook></FaFacebook>
              <FaTwitter></FaTwitter>
              <FaLinkedin></FaLinkedin>
              <FaInstagram></FaInstagram>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

