import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUs = () => {
  return (
    <div className="flex mt-[5rem] mb-[6rem] flex-col h-[calc(100vh-6rem)] justify-around  p-4 md:h-[calc(100vh-3rem)] items-center ">
      <div className="mb-[4rem]">
        <h1 className="text-yellow font-font-base text-[64px] leading-[83.2px] tracking-[0.04em] capitalize">
          About Us
        </h1>
      </div>
      <div className="flex flex-row">
        <div className="w-1/2 flex ">
          <div className="flex gap-4">
            <img
              src="/About/about2.jpg"
              alt=""
              className="h-full w-[400px] object-cover rounded-md"
            />
            <div className="relative">
              <img
                src="/About/about3.jpg"
                alt=""
                className="h-[400px] w-[400px] object-cover rounded-md"
              />
              <img
                src="/About/about_dish1.png"
                alt=""
                className="h-[200px] w-[200px] object-cover rounded-md absolute
                            top-[20rem] right-16 hover:animate-spin
                            "
              />
              <img
                src="/About/leaf.png"
                alt=""
                className="h-[200px] w-[400px] object-cover rounded-md absolute
                            -top-[6rem] right-16
                            "
              />
            </div>
          </div>
        </div>
        <div className="w-1/2 flex p-8 flex-col gap-10">
          <h1 className="text-3xl font-bold font-font-base capitalize">
            Exquisite Eats Here
          </h1>
          <p className="text-gray-500 text-1xl font-semibold font-font-alt">
            We provide you with complete meal prep which includes the packaged
            necessary <br />
            ingredients for a divine dinner as well as an easy to follow the
            recipe. As with older post,
            <br />
            this will be continously updated with edits and comments linked in
            this post as I cook <br />
            more recipes, think of more topics to write about, and find more
            resources around the <br />
            internet. This post is currently limited to my own personal
            experiences as a meal.
            <div className="flex gap-8 mt-7">
              <div className="flex flex-col gap-7 ">
                <div className="flex items-center gap-2">
                  {/* <Image src="/Icons/img2.svg" alt="" width={32} height={32} /> */}
                  <svg
                    version="1.1"
                    id="Icons"
                    xmlns="http://www.w3.org/2000/svg"
                    // xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 32 32"
                    className="w-[36px] h-[36px] bg-yellow p-1 rounded-lg"
                    fill="#FFFFFF"
                    // style="enable-background:new 0 0 32 32;"
                    // xml:space="preserve"
                  >
                    <g>
                      <path d="M5.9,18l1.2,2.4C7.3,20.8,7.6,21,8,21h17c0.4,0,0.7-0.2,0.9-0.6l1.2-2.4H5.9z" />
                      <path
                        d="M4,17h1.4h22.2H29c0.6,0,1-0.4,1-1s-0.4-1-1-1h-1c-0.2-5.3-4.1-9.7-9.1-10.8C18.9,4,19,3.8,19,3.5C19,2.1,17.9,1,16.5,1
		                      S14,2.1,14,3.5c0,0.3,0.1,0.5,0.1,0.7C9.1,5.3,5.3,9.7,5,15H4c-0.6,0-1,0.4-1,1S3.4,17,4,17z"
                      />
                    </g>
                    <path
                      d="M24.6,22.3C24.5,22.1,24.2,22,24,22c-0.4,0-0.7,0-1.1,0.1l-1.1,1.5C20.7,25.1,18.9,26,17,26h0h-0.3H16h-1.3H14
	                    c-0.6,0-1-0.4-1-1s0.4-1,1-1h3.5c0.3-0.3,0.5-0.8,0.5-1.3c0,0,0-0.1,0-0.1c0-0.4-0.3-0.6-0.7-0.6h-4c-2.4,0-4.3,1.1-5.4,2.8
	                l-1.8,2.8c-0.1,0.2-0.1,0.5,0,0.7l2,3.3c0.1,0.2,0.2,0.3,0.4,0.3c0,0,0.1,0,0.1,0c0.1,0,0.3,0,0.4-0.1c2.5-1.7,5.5-2.6,8.5-2.6
	                        c2.2,0,4.2-1.2,5.2-3.1l1.8-3.2C24.7,22.8,24.7,22.5,24.6,22.3z"
                    />
                  </svg>
                  <p className="text-black font-font-alt">Fresh Food</p>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[36px] h-[36px] bg-yellow p-1 rounded-lg"
                    fill="#FFFFFF"
                    viewBox="0 0 64 64"
                  >
                    <g id="Layer_17" data-name="Layer 17">
                      <path d="M60,16.23H57.33l-1.74-3.68V8.35a1,1,0,0,0-1-1H50.65a1,1,0,0,0-.9.57l-1.83,3.87H32.16a1,1,0,0,0-.9.57l-1.83,3.87H26.76a1,1,0,0,0-1,1v4.44a1,1,0,0,0,1,1h2.36l.41,6.65c.17.17.33.32.49.5,5.29-.6,10.13,4.46,9.13,9.72h0c0,.29-.12.59-.2.89a5.48,5.48,0,0,1,3.32,7.77c2.44,6.06-2.4,7.78-7.18,4.6-1.61.31-3.43,0-4.2-1.49l.21,3.34H4a1,1,0,1,0,0,2h54.6a1,1,0,0,0,0-2h-3l2-32H60a1,1,0,0,0,1-1V17.23A1,1,0,0,0,60,16.23ZM51.29,9.35h2.3v2.44H50.13Zm-18.5,4.44H54l1.16,2.44H31.64ZM59,20.67H27.76V18.23H59Z" />
                      <path d="M20.82,47.1a3.28,3.28,0,0,0,4.29,0h0c3.76-3.08,7.23-11.48,3.7-15.65h0a7.52,7.52,0,0,0-11.68,0C13.59,35.63,17.06,44,20.82,47.1Z" />
                      <path d="M39.65,43a3.63,3.63,0,0,0-1.35-.7c-1.14,2.76-3.3,6-5.87,7.64,1.07,2.69,7.2-.94,7.89-2.34A3.42,3.42,0,0,0,39.65,43Z" />
                      <path d="M5.92,48.05c.87,1.14,6.5,4.53,7.58,1.91-2.58-1.64-4.73-4.88-5.87-7.64a3.51,3.51,0,0,0-2,5.28A3.31,3.31,0,0,0,5.92,48.05Z" />
                      <path d="M9.2,40.84C10.39,44.14,15,51.63,18.82,48,15,44,12.1,36.79,14.55,31.82A6.51,6.51,0,0,0,9.2,40.84Z" />
                      <path d="M8.14,51.94a12.55,12.55,0,0,1-3-1.87C4.51,52.56,5.84,52.77,8.14,51.94Z" />
                      <path d="M40.65,52.09c.28-.29.35-1,.12-2a12.55,12.55,0,0,1-3,1.87C39,52.42,40.24,52.53,40.65,52.09Z" />
                      <path d="M28.85,49c3.74.09,6.59-4.91,7.88-8.14a6.52,6.52,0,0,0-5.35-9c2.45,5-.4,12.2-4.26,16.22A3.13,3.13,0,0,0,28.85,49Z" />
                    </g>
                  </svg>
                  {/* <Image src="/Icons/img3.svg" alt="" width={32} height={32} /> */}
                  <p className="text-black font-font-alt">Quality Maintain</p>
                </div>
              </div>
              <div className="flex flex-col gap-7">
                <div className="flex items-center gap-2">
                  {/* <Image src="/Icons/img4.svg" alt="" width={32} height={32} /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[36px] h-[36px] bg-yellow p-1 rounded-lg"
                    fill="#FFFFFF"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.5 20C4.57 20 3 18.43 3 16.5S4.57 13 6.5 13s3.5 1.57 3.5 3.5S8.43 20 6.5 20zm0-5c-.827 0-1.5.673-1.5 1.5S5.673 18 6.5 18 8 17.327 8 16.5 7.327 15 6.5 15zM19.5 20c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm0-5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z" />
                    <path d="M8 16h9v2H8zM10 12H2V4h8v8zm-6-2h4V6H4v4zM5 12h2v3H5z" />
                    <path d="M15.333 14H13c-1.103 0-2-.897-2-2H8v-2h3c1.103 0 2 .897 2 2h1.667L18.4 9.2l1.2 1.6-4.267 3.2z" />
                    <path d="M18.97 14.235 17.4 8.54a1.956 1.956 0 0 1-.076-.54H16V6h3.326v2l1.572 5.704-1.928.531z" />
                    <path d="M19 9h2v2h-2z" />
                  </svg>
                  <p className="text-black font-font-alt">Fast Delivery</p>
                </div>
                <div className="flex items-center gap-2">
                  {/* <Image src="/Icons/img1.svg" alt="" width={32} height={32} /> */}
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-[36px] h-[36px] bg-yellow p-1 rounded-lg"
                    fill="#FFFFFF"
                  >
                    <path d="M20,8.5V2.12A2.12,2.12,0,0,0,17.88,0H6.12A2.12,2.12,0,0,0,4,2.12V21.88A2.12,2.12,0,0,0,6.12,24H17.88A2.12,2.12,0,0,0,20,21.88V20.5a6.5,6.5,0,0,0,0-12ZM10,2h4V3H10Zm8,19.88a.12.12,0,0,1-.12.12H6.12A.12.12,0,0,1,6,21.88V2.12A.12.12,0,0,1,6.12,2H8V3.31A1.69,1.69,0,0,0,9.69,5h4.62A1.69,1.69,0,0,0,16,3.31V2h1.88a.12.12,0,0,1,.12.12V8a4.19,4.19,0,0,0-.5,0,6.5,6.5,0,0,0,0,13,4.19,4.19,0,0,0,.5,0ZM17.5,19A4.5,4.5,0,1,1,22,14.5,4.51,4.51,0,0,1,17.5,19Z" />
                    <polygon points="17 14.59 15.71 13.29 14.29 14.71 17 17.41 20.71 13.71 19.29 12.29 17 14.59" />
                  </svg>
                  <p className="text-black font-font-alt">24/7 Service</p>
                </div>
              </div>
            </div>
            <div className="mt-12 ">
              <Link href="/menu">
                <button className=" py-4 px-4 bg-red-500 hover:bg-red bg-yellow font-font-alt text-white font-semibold rounded-md">
                  ORDER NOW
                </button>
              </Link>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
