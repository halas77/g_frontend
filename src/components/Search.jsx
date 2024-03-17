import { FaMagnifyingGlass } from "react-icons/fa6";

const Search = () => {
  return (
    <div className="text-gray-600 flex items-center">
      <div className="flex items-center">
        <input
          type="search"
          name="search"
          placeholder="Search"
          className="bg-gray-800 mb-10 h-12 px-5 rounded-full text-sm w-96"
        />
        <button
          type="submit"
          className="mt-[-35px] ml-2 py-2 px-5 bg-red-500 rounded-xl text-white font-bold"
        >
          Play
        </button>
      </div>
    </div>
  );
};

export default Search;
