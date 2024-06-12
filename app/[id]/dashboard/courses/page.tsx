export default function Courses(){
    return (
<section className="bg-white dark:bg-gray-900">
<nav className="bg-white border-gray-200 px-4 lg:px-6 py-5 dark:bg-gray-800">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
      
      <a
        className="flex items-center"
      >
       
        <span className="text-leftalign self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Computer Engineering
        </span>
      </a>
      <div className="flex items-center lg:order-2">
        <button
          aria-controls="mobile-menu-2"
          aria-expanded="false"
          className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          data-collapse-toggle="mobile-menu-2"
          type="button"
        >
          <span className="sr-only">
            Open main menu
          </span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              fillRule="evenodd"
            />
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div
        className="text-rightalign hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
        id="mobile-menu-2"
      >
        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
            <a
              className="text-xl block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 "
              href="home"
            >
              Home
            </a>
          </li>
          <li>
            <a
            aria-current="page"
              className=" text-xl block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
              href=""
            >
              Courses
            </a>
          </li>
          <li>
            <a
              className="text-xl block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              href="accountInfo"
            >
              Account Info
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center lg:order-2">
        <a
          className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-2xl rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
          href="/"
        >
          Log out
        </a>
       
        <button
          aria-controls="mobile-menu-2"
          aria-expanded="false"
          className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          data-collapse-toggle="mobile-menu-2"
          type="button"
        >
          <span className="sr-only">
            Open main menu
          </span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              fillRule="evenodd"
            />
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  </nav>
  <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
    <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        Register Courses
      </h2>
      <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
        </p>
    </div>
    <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div className="text-center text-gray-500 dark:text-gray-400">
        <img
          alt="Bonnie Avatar"
          className="mx-auto mb-4 w-36 h-36 rounded-full"
          src="https://img.freepik.com/free-vector/computer-service-pattern_1284-33514.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1717977600&semt=ais_user"
        />
        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">
            Computer Systems Design
          </a>
        </h3>
        <p>
          CPEN 202
        </p>
        <a
          className="mt-32 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
          href="#"
        >
          Register course
        </a>
      </div>
      <div className="text-center text-gray-500 dark:text-gray-400">
        <img
          alt="Helene Avatar"
          className="mx-auto mb-4 w-36 h-36 rounded-full"
          src="https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29mdHdhcmUlMjBlbmdpbmVlcmluZ3xlbnwwfHwwfHx8MA%3D%3D"
        />
        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">
            Software
          </a>
        </h3>
        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">
            Engineering
          </a>
        </h3>
        <p>
          CPEN 208
        </p>
        <a
          className="mt-32 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
          href="#"
        >
          Register course
        </a>
      </div>
      <div className="text-center text-gray-500 dark:text-gray-400">
        <img
          alt="Jese Avatar"
          className="mx-auto mb-4 w-36 h-36 rounded-full"
          src="https://miro.medium.com/v2/resize:fit:1400/1*4ZcW5tSdizlbtDQyVpRTuA.jpeg"
        />
        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">
            Data Structures and Algorithms
          </a>
        </h3>
        <p>
        CPEN 204
        </p>
        <a
          className="mt-32 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
          href="#"
        >
          Register course
        </a>
      </div>
      <div className="text-center text-gray-500 dark:text-gray-400">
        <img
          alt="Joseph Avatar"
          className="mx-auto mb-4 w-36 h-36 rounded-full"
          src="https://e7.pngegg.com/pngimages/765/775/png-clipart-reflective-writing-academic-writing-journal-essay-student-text-reading-thumbnail.png"
        />
        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">
            Academic
          </a>
        </h3>
        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">
            Writing 2
          </a>
        </h3>
        <p>
        CBAS 210
        </p>
        <a
          className="mt-32 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
          href="#"
        >
          Register course
        </a>
      </div>
      <div className="text-center text-gray-500 dark:text-gray-400">
        <img
          alt="Sofia Avatar"
          className="mx-auto mb-4 w-36 h-36 rounded-full"
          src="https://resources.altium.com/sites/default/files/blogs/DC%20Analysis%20of%20Linear%20and%20Nonlinear%20Circuits%20in%20Schematic%20Design-33226.jpg"
        />
        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">
            Linear
          </a>
        </h3>
        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">
            Circuits
          </a>
        </h3>
        <p>
          CPEN 206
        </p>
        <a
          className="mt-32 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
          href="#"
        >
          Register course
        </a>
      </div>
      <div className="text-center text-gray-500 dark:text-gray-400">
        <img
          alt="Leslie Avatar"
          className="mx-auto mb-4 w-36 h-36 rounded-full"
          src="https://hasonss.com/blogs/wp-content/uploads/2024/03/25001339_7030492.webp"
        />
        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">
            Data 
          </a>
        </h3>
        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">
            Communication
          </a>
        </h3>
        <p>
          CPEN 212
        </p>
        <a
          className="mt-32 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
          href="#"
        >
          Register course
        </a>
      </div>
      <div className="text-center text-gray-500 dark:text-gray-400">
        <img
          alt="Michael Avatar"
          className="mx-auto mb-4 w-36 h-36 rounded-full"
          src="https://www.shutterstock.com/image-illustration/graphic-abstraction-differential-equations-integrals-600nw-1872003328.jpg"
        />
        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">
            Differential
          </a>
        </h3>
        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">
            Equations
          </a>
        </h3>
        <p>
         SENG 202
        </p>
        <a
          className="mt-32 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
          href="#"
        >
          Register course
        </a>
      </div>
      <div className="text-center text-gray-500 dark:text-gray-400">
        <img
          alt="Neil Avatar"
          className="mx-auto mb-4 w-36 h-36 rounded-full"
          src="https://global.luskin.ucla.edu/wp-content/uploads/sites/20/2014/10/Africa.png"
        />
        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">
            African 
          </a>
        </h3>
        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">
            Studies 
          </a>
        </h3>
        <p>
          UGRC
        </p>
        <a
          className="mt-32 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
          href="#"
        >
          Register course
        </a>
      </div>
    </div>
  </div>
</section>



    )}