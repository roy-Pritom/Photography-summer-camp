
const TopClassCard = ({item}) => {
    const {classImg,instructorName,className,instructorEmail}=item;
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img
          className="w-full h-56 object-cover"
          src={classImg}
          alt="Card"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Card Title</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur.
          </p>
        </div>
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            Tag 1
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            Tag 2
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            Tag 3
          </span>
        </div>
      </div>
    );
};

export default TopClassCard;