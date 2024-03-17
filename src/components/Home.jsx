import { gamelists } from "../constants";
import Search from "./Search";

export default function Home() {
  return (
    <>
      <div className="bg-gray-900 w-full">        
        <div className="mx-auto container py-8">

          <p className="mb-4 text-2xl font-semibold text-gray-200">Discover new games</p>
            <Search />
          <div className="flex flex-wrap items-center lg:justify-between justify-center mb-8 ">
            {/* Card 1 */}

            {gamelists.map((item) => (
              <div key={item.label} className="mx-2 w-72 mb-8 bg-gray-800 rounded-xl">
                <div>
                  <img
                    src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png"
                    className="w-full h-44 rounded-xl"
                  />
                </div>
                <div className="bg-gray-800 rounded-xl">
                  <div className="flex items-center justify-between px-4 pt-4">
                    <div></div>
                    <div className="bg-red-500 py-1.5 px-6 rounded-full">
                      <p className="text-xs text-gray-200">Featured</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center">
                      <h2 className="text-lg font-semibold uppercase font-sans text-gray-200">
                        {item.label}
                      </h2>
                      <p className="text-xs text-gray-200 pl-5">123 players</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      {item.desc}
                    </p>
                    <div className="flex items-center justify-between py-4">
                      <h2 className="text-red-500 text-xs font-semibold">
                        Remote, Anywhere
                      </h2>
                      <h3 className="text-red-500 text-xl font-semibold">
                        $350
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Card 1 Ends */}
          </div>
        </div>
      </div>
    </>
  );
}
