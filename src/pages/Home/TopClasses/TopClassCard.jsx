import { Fade } from "react-awesome-reveal";

const TopClassCard = ({ item }) => {
  const { classImg, instructorName, className, instructorEmail, seats, totalEnrolledStudents, price } = item;
  return (
  <Fade direction="left">

<div className="max-w-sm rounded overflow-hidden shadow-lg bg-white ">
      <div className="relative">
        <img
          className="w-full h-56 object-cover transition duration-500 ease-in-out transform hover:scale-110"
          src={classImg}
          alt="Card"
        />
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-500 ease-in-out"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {className}
          </button>
        </div>
      </div>
      <div className="px-6 py-8">
        <div className="font-bold text-xl mb-2">{className}</div>
        <p className=""><span className="font-bold">Instructor Name :</span> {instructorName}</p>
        <p className="my-1"><span className="font-bold">Instructor Email :</span> {instructorEmail}</p>
        <p className=""><span className="font-bold">Enrolled Students :</span> {totalEnrolledStudents}</p>
        <p className=" my-1"><span className="font-bold">Available Seats :</span> {seats}</p>
        <p className=""><span className="font-bold">Price :</span> ${price}</p>

      </div>

    </div>
  </Fade>
    
  );
};

export default TopClassCard;