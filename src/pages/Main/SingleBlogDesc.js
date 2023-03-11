import { Avatar, Typography } from "@material-tailwind/react";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillLinkedin, AiFillPlusCircle } from "react-icons/ai";
import Newsletter from "../../components/Newsletter";
import MostLikeBlog from "./Home/MostLikeBlog";

const SingleBlogDesc = () => {
  const { id } = useParams();
  const blogs = useSelector((state) => state.blogs.blogs);
  const blog = blogs.find((bl) => bl._id === id);

  return (
    <div className="p-5">
      <div className="lg:w-[70%] md:w-[85%] w-full space-y-5 py-5">
        <Typography variant="h1" color="black">
          {blog.title}
        </Typography>
        <Typography
          variant="paragraph"
          color="blue-gray"
          className="text-xl font-normal"
        >
          {blog.desc}
        </Typography>
        <div className="flex flex-wrap gap-2  pb-2 ">
          {blog.tags?.map((tag, index) => (
            <p
              key={index}
              className="text-gray-900 bg-gray-100 hover:bg-gray-200 duration-300 cursor-pointer border border-gray-200 px-3 py-1 rounded-full shadow-sm text-sm transform hover:-translate-y-1  ease-in-out"
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
      <hr />
      <div className="py-5 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Avatar
            src="https://i.ibb.co/XYNS2pF/player-5.png"
            size="lg"
            alt="avatar"
            variant="circular"
            className="ring-4 ring-white"
          />
          <div>
            <h1 className="text-black font-semibold text-[15px] group-hover:text-light-blue-900 duration-300">
              By Ahmed Ajmi
            </h1>
            <p className="text-gray-700  text-[14px] font-thin">
              September 16, 2022 ∙ 3 min read
            </p>
          </div>
        </div>
        <ul class="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">
          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              class="text-[#3b5998] transition hover:opacity-75"
            >
              <span class="sr-only">Facebook</span>

              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              class="text-[#d62976] transition hover:opacity-75"
            >
              <span class="sr-only">Instagram</span>

              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              class="text-[#00acee] transition hover:opacity-75"
            >
              <span class="sr-only">Twitter</span>

              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div className="py-5">
        <div>
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full  rounded-xl shadow"
          />
          <p className="text-xs font-thin mt-1">
            Photo by Dillon Wanner / Unsplash
          </p>
        </div>
      </div>
      <div className="flex flex-wrap text-start gap-10 p-3">
        <div className="basis-[700px] flex-grow space-y-5">
          <p className="text-[20px] font-thin">
            Praesent imperdiet pulvinar gravida. Mauris feugiat sapien est, non
            mattis tellus tempus nec. Nunc in mi sodales, finibus massa sed,
            dictum justo. Curabitur lacinia arcu eu lacus mollis, eget commodo
            felis maximus. Praesent vel auctor arcu. Phasellus pulvinar viverra
            mauris nec consectetur.
          </p>
          <p className="text-[20px] font-thin">
            Donec mattis metus vitae nulla pretium tempor. Nulla pellentesque
            commodo dapibus. Fusce at cursus nibh. Aenean placerat leo ac odio
            placerat, quis bibendum lectus porta. Class aptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos.
            Pellentesque aliquam sem vel sagittis iaculis. Mauris sed
            consectetur risus. Morbi mi ipsum, molestie at tortor at, aliquam
            vulputate purus. Etiam dignissim tortor id quam placerat auctor.
            Cras lectus eros, mollis varius euismod et, accumsan vitae ipsum.
            Sed tempor condimentum tellus at facilisis. Suspendisse tortor nisi,
            auctor eget orci eu, iaculis facilisis felis. Ut gravida luctus
            lorem sed posuere. Pellentesque ut ornare ante. Integer sodales urna
            ac tincidunt bibendum. Fusce faucibus felis et semper tempor.
            Phasellus egestas gravida bibendum. Maecenas at nisl ante. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
          <h3 className="text-center font-semibold text-4xl py-8 border-l-4 border-light-blue-500">
            Nullam auctor nisi non tortor <br /> porta, id dapibus lectus
            rhoncus. Vivamus lobortis posuere enim finibus sodales.
          </h3>
          <p className="text-[20px] font-thin">
            Phasellus quis tellus scelerisque, sagittis tortor et, maximus
            metus. Sed rhoncus odio in egestas porttitor. Duis consectetur est
            vel nulla hendrerit iaculis. Etiam laoreet mauris nunc, sed
            consequat neque finibus sed. Nulla sodales nisi efficitur lacus
            porta condimentum. Aenean non aliquam lacus. Quisque hendrerit, arcu
            et pretium condimentum, arcu sapien pellentesque sem, pharetra
            accumsan ex leo in tellus. Fusce nunc magna, sollicitudin vehicula
            ante accumsan, lobortis vehicula lacus. Donec tincidunt magna ac
            nisi vestibulum, at congue leo suscipit. Nullam vehicula aliquam
            tellus ut venenatis. Curabitur sodales pharetra nisi vel
            scelerisque. Sed viverra purus et enim elementum dapibus. Nullam
            iaculis bibendum est, ac semper nisl lacinia eget. Sed nec est sed
            turpis finibus blandit.
          </p>
          <div>
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full  rounded-xl shadow"
            />
            <p className="text-xs font-thin mt-1">
              Photo by Dillon Wanner / Unsplash
            </p>
          </div>
          <p className="text-[20px] font-thin">
            Pellentesque a risus quis metus ultricies imperdiet non a diam.
            Fusce volutpat, erat ut rhoncus interdum, purus orci porta nunc, sit
            amet pellentesque odio augue non diam. Aenean luctus convallis nibh,
            nec dictum sapien gravida at. Nunc tempor magna a ultrices
            tincidunt. Cras porttitor accumsan neque quis elementum. Vestibulum
            dignissim, purus sit amet viverra cursus, nunc felis aliquet erat,
            sed fringilla nibh metus gravida lacus. Donec a nibh nec sem
            fermentum maximus a a orci.
          </p>
          <h3 className="text-start font-semibold text-4xl pl-5 py-3 border-l-4 border-light-blue-500">
            Nullam auctor nisi non tortor <br /> porta, id dapibus lectus
            rhoncus. Vivamus lobortis posuere enim finibus sodales.
          </h3>
          <p className="text-[20px] font-thin">
            Pellentesque a risus quis metus ultricies imperdiet non a diam.
            Fusce volutpat, erat ut rhoncus interdum, purus orci porta nunc, sit
            amet pellentesque odio augue non diam. Aenean luctus convallis nibh,
            nec dictum sapien gravida at. Nunc tempor magna a ultrices
            tincidunt. Cras porttitor accumsan neque quis elementum. Vestibulum
            dignissim, purus sit amet viverra cursus, nunc felis aliquet erat,
            sed fringilla nibh metus gravida lacus. Donec a nibh nec sem
            fermentum maximus a a orci.
          </p>
          <p className="text-[20px] font-thin">
            Pellentesque a risus quis metus ultricies imperdiet non a diam.
            Fusce volutpat, erat ut rhoncus interdum, purus orci porta nunc, sit
            amet pellentesque odio augue non diam. Aenean luctus convallis nibh,
            nec dictum sapien gravida at. Nunc tempor magna a ultrices
            tincidunt. Cras porttitor accumsan neque quis elementum. Vestibulum
            dignissim, purus sit amet viverra cursus, nunc felis aliquet erat,
            sed fringilla nibh metus gravida lacus. Donec a nibh nec sem
            fermentum maximus a a orci.
          </p>

          <div className="w-full flex items-center shadow rounded-lg">
            <div className="bg-gray-50 hover:bg-gray-100  w-full py-5 flex justify-center items-center">
              <TiSocialTwitter className="text-3xl text-gray-900 cursor-pointer " />
            </div>
            <div className="bg-gray-50 hover:bg-gray-100  w-full py-5 flex justify-center items-center">
              <FaFacebookSquare className="text-3xl text-gray-900 cursor-pointer" />
            </div>
            <div className="bg-gray-50 hover:bg-gray-100 w-full py-5 flex justify-center items-center">
              {" "}
              <AiFillLinkedin className="text-3xl text-gray-900 cursor-pointer" />
            </div>
            <div className="bg-gray-50 hover:bg-gray-100 w-full py-5 flex justify-center items-center">
              {" "}
              <AiFillPlusCircle className="text-3xl text-gray-900 cursor-pointer " />
            </div>
          </div>
        </div>
        <div className="basis-[200px] flex-grow space-y-7">
          <div className="space-y-3">
            <h1 className="font-thin border-b">WRITTEN BY</h1>
            <div className="flex items-center gap-4">
              <Avatar
                src="https://i.ibb.co/XYNS2pF/player-5.png"
                size="lg"
                alt="avatar"
                variant="circular"
                className="ring-4 ring-white"
              />
              <div>
                <h1 className="text-black font-semibold text-[15px] group-hover:text-light-blue-900 duration-300">
                  By Ahmed Ajmi
                </h1>
                <p className="text-gray-700  text-[14px] font-thin">
                  Nec vero pietas adversus deos nec quanta iis gratia debeatur
                  sine explicatione naturae intellegi
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="font-thin border-b">EDITOR’S CHOICE</h1>
            {blogs?.slice(0, 4)?.map((blog, index) => (
              <div key={index} className="flex justify-start items-start gap-4">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-[80px] rounded-xl"
                />
                <h2 className="text-lg text-black ">{blog.title}</h2>
              </div>
            ))}
          </div>
          <Newsletter />
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h1 className="font-thin ">Latest Blog</h1>
          <h1 className="font-thin ">Older Blog</h1>
        </div>
        <hr />
        <div className="flex justify-between items-center flex-wrap gap-2">
          <div className="flex justify-start items-start gap-4 lg:w-[40%]">
            <img
              src="https://i.ibb.co/Ykk32Sp/pxfuel-com-2.jpg"
              alt=""
              className="w-[120px] h-[80px] rounded-xl"
            />
            <h2 className="text-2xl text-black ">
              There are still many questions left to answer
            </h2>
          </div>
          <div className="flex justify-start items-start gap-4 lg:w-[40%]">
            <h2 className="text-2xl text-black ">
              Every day, in every city and town across the country
            </h2>
            <img
              src="https://i.ibb.co/fFWgpHN/pxfuel-com-1.jpg"
              alt=""
              className="w-[120px] h-[80px] rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="py-5">
        <MostLikeBlog />
      </div>
    </div>
  );
};

export default SingleBlogDesc;
