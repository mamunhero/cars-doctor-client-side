import iconone from "../../../../src/assets/icons/001-timetable.svg"
import icontwo from "../../../../src/assets/icons/Group 34.svg"
import iconthree from "../../../../src/assets/icons/Group 35.svg"
const Support = () => {
  return (
    <div className="bg-[#151515] h-[250px] flex items-center mt-20 ">
      <div className="flex items-start">
       <div className="ml-12 mr-10">
        <img src={iconone} alt="" />
       </div>
        <div className="">
          <p className="text-sm text-white">We are open monday-friday</p>
          <p className="text-2xl font-bold text-white">7:00 am - 9:00 pm</p>
        </div>
      </div>
      <div className="flex items-start">
       <div className="ml-12 mr-10">
        <img src={icontwo} alt="" />
       </div>
        <div className="">
          <p className="text-sm text-white">Have a question?</p>
          <p className="text-2xl font-bold text-white">+2546 251 2658</p>
        </div>
      </div>
      <div className="flex items-start">
       <div className="ml-12 mr-10">
        <img src={iconthree} alt="" />
       </div>
        <div className="">
          <p className="text-sm text-white">Need a repair? our address</p>
          <p className="text-2xl font-bold text-white">Liza Street, New York</p>
        </div>
      </div>
    </div>
  );
};

export default Support;