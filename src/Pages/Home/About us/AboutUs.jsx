import person from "../../../../src/assets/images/about_us/person.jpg"
import parts from "../../../../src/assets/images/about_us/parts.jpg"
const AboutUs = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="lg:w-1/2 relative">
      <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
      <img src={parts} className="w-2/4 absolute right-5 top-2/4 rounded-lg shadow-2xl border-8 border-red-500" />
    </div>
    <div className="lg:w-1/2  space-y-4">
      <h1 className="text-3xl text-[#FF3811]">About Us</h1>
      <h1 className="text-4xl font-bold text-[#151515]">We are qualified <br /> & of experience <br /> in this field</h1>
      <p className="text-gray-500 mt-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <button className="btn btn-primary ">Get More Info</button>
    </div>
  </div>
</div>
  );
};

export default AboutUs;