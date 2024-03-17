import { FaHome } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="w-[5rem]">
        
      <div
        className="relative flex flex-col bg-clipRule rounded-sm
       bg-gray-800 text-red-500 h-[100%] max-w-[5rem] p-4 shadow-xl"
      >
        <div className="mb-2">
          <h5 className="font-extrabold text-2xl uppercase mb-4">EDL</h5>
        </div>
        <nav className="flex flex-col gap-1 p-2 font-sans text-base font-normal text-gray-700 justify-center">
          <div role="button" className="text-xl text-gray-100 mb-8">
            <FaHome />
          </div>
          <div role="button" className="text-xl text-gray-100 mb-8">
            <FaMagnifyingGlass />
          </div>
          <div role="button" className="text-lg text-gray-100 mb-8">
            <FaWallet />
          </div>

          {/* <div role="button" className="text-xl text-gray-100 mb-6">
            <IoMdAddCircle />
          </div>
          <div role="button" className="text-xl text-gray-100 mb-6">
            <FaGamepad />
          </div> */}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
