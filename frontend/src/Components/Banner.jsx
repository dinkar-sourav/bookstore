import Book from '../assets/Book.jpg';
function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl conatiner mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className="md:w-1/2 w-full md:mt-32 mt-12 order-2 md:order-1 ">
          <div className="space-y-12 ">
            <h1 className="text-4xl font-bold">
              Hello, welcome here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>

            <p className="text-xl ">
              Discover, buy, and exchange books effortlessly on our platform
              designed for book lovers. From timeless classics to trending
              bestsellers, find your next great read with ease.
            </p>
            {/* search bar */}

            <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>

         
          </div>
          <button className="btn btn-primary mt-6">Primary</button>
        </div>
        <div className="order-1 md:w-1/2 w-full flex justify-center items-center">
            <img className="w-94 h-96 mx-auto" src={Book} alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
