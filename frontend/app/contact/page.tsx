import React from "react";

const page = () => {
  return (
    <div className="font-[sans-serif]">
      <div className="bg-gradient-to-r from-blue-700 to-blue-300 w-full h-60">
        <img
          src="/contact-bg.jpg"
          alt="Banner Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="-mt-28 mb-6 px-4">
        <div className="mx-auto max-w-6xl shadow-lg py-8 px-6 relative bg-white rounded">
          <h2 className="text-xl font-font-base text-yellow font-bold">
            Dining Experience Feedback
          </h2>
          <form className="mt-8 grid sm:grid-cols-2 gap-6">
            <div>
              <label className="font-semibold font-font-alt text-sm">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full rounded py-2.5 px-4 mt-2 border-2 border-golden text-sm outline-yellow"
              />
            </div>
            <div>
              <label className="font-semibold text-sm">Your Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded py-2.5 px-4 border-2 border-golden mt-2 text-sm outline-yellow"
              />
            </div>
            <div>
              <label className="font-semibold text-sm">Your Number</label>
              <input
                type="email"
                placeholder="Phone No."
                className="w-full rounded py-2.5 px-4 border-2 border-golden mt-2 text-sm outline-yellow"
              />
            </div>
            <div>
              <label className="font-semibold text-sm">Website</label>
              <input
                type="text"
                placeholder="Website"
                className="w-full rounded py-2.5 px-4 border-2 border-golden mt-2 text-sm outline-yellow"
              />
            </div>
            <div>
              <label className="font-semibold text-sm">Company</label>
              <input
                type="text"
                placeholder="Company"
                className="w-full rounded py-2.5 px-4 border-2 border-golden mt-2 text-sm outline-yellow"
              />
            </div>
            <div>
              <label className="font-semibold text-sm">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded py-2.5 px-4 border-2 border-golden mt-2 text-sm outline-yellow"
              />
            </div>
            <div className="col-span-full">
              <label className="font-semibold text-sm">Message</label>
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full rounded px-4 border-2 mt-2 border-golden text-sm pt-3 outline-yellow"
              ></textarea>
            </div>
            <div className="flex items-center col-span-full">
              <input id="checkbox1" type="checkbox" className="w-4 h-4 mr-3" />
              <label htmlFor="checkbox1" className="text-sm text-gray-400">
                I agree to the{" "}
                <a href="javascript:void(0);" className="underline">
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a href="javascript:void(0);" className="underline">
                  Privacy Policy
                </a>
              </label>
            </div>
            <button
              type="button"
              className="text-white w-max bg-[#007bff] hover:bg-blue-600 font-semibold rounded text-sm px-6 py-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="#fff"
                className="mr-2 inline"
                viewBox="0 0 548.244 548.244"
              >
                <path
                  fill-rule="evenodd"
                  d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                  clip-rule="evenodd"
                  data-original="#000000"
                />
              </svg>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
