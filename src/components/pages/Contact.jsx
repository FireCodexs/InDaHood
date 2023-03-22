import "./contact.css";
import Footer from "../footer/Footer";
import { AiOutlineHome, AiOutlineMail, AiFillInfoCircle } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
export default function Contact() {
  return (
    <>
      <div className="contact-weapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19848.491955748883!2d-0.25366256782700874!3d51.54877138413455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487610502d108adb%3A0x851309df29ae01c7!2sWillesden%2C%20London!5e0!3m2!1sen!2suk!4v1679511712311!5m2!1sen!2suk"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div>
                      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Button
                      </button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in touch with us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineHome className="fs-5" />
                        <address className="mb-0">
                          {" "}
                          30 High road, NW10 2QD, London
                        </address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiPhoneCall className="fs-5" />
                        <a href="tel: +44 79436-45287">+44 79436-45287</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineMail className="fs-5" />
                        <a href="mailto:indahood@gmail.com">
                          indahood@gmail.com
                        </a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiFillInfoCircle className="fs-5" />
                        <p className="mb-0">Monday-Friday 10AM-8PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
{
  /*<div className="h-screen w-full bg-cover bg-gradient-to-r from-violet-500 to-fuchsia-500">*/
}
{
  /*<div className="h-screen w-full bg-cover bg-gradient-to-r from-violet-500 to-fuchsia-500">*/
}
// <div className="my-40 mx-w-sm p-6 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 ">

// //   {/* <!-- Section: Design Block --> */}

// //   <section className="mt-32 mb-32 text-center text-gray-800">
// //     <div className="max-w-[700px] mx-auto px-3 lg:px-6">
// //       <h2 className="text-4xl font-light mb-12">Contact us</h2>
// //       <form>
// //         <div className="form-group mb-6">
// //           <input type="text" className="form-control block
// //             w-full
// //             px-3
// //             py-1.5
// //             text-base
// //             font-normal
// //             text-gray-700
// //             bg-white bg-clip-padding
// //             border border-solid border-gray-300
// //             rounded
// //             transition
// //             ease-in-out
// //             m-0
// //             focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
// //             placeholder="Name"/>
// //         </div>
// //         <div className="form-group mb-6">
// //           <input type="email" className="form-control block
// //             w-full
// //             px-3
// //             py-1.5
// //             text-base
// //             font-normal
// //             text-gray-700
// //             bg-white bg-clip-padding
// //             border border-solid border-gray-300
// //             rounded
// //             transition
// //             ease-in-out
// //             m-0
// //             focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
// //             placeholder="Email address"/>
// //         </div>
// //         <div className="form-group mb-6">
// //           <textarea className="
// //             form-control
// //             block
// //             w-full
// //             px-3
// //             py-1.5
// //             text-base
// //             font-normal
// //             text-gray-700
// //             bg-white bg-clip-padding
// //             border border-solid border-gray-300
// //             rounded
// //             transition
// //             ease-in-out
// //             m-0
// //             focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
// //           " id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
// //         </div>

// //         <button type="submit" className="
// //           w-full
// //           px-6
// //           py-2.5
// //           bg-blue-600
// //           text-white
// //           font-medium
// //           text-xs
// //           leading-tight
// //           uppercase
// //           rounded
// //           shadow-md
// //           hover:bg-blue-700 hover:shadow-lg
// //           focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
// //           active:bg-blue-800 active:shadow-lg
// //           transition
// //           duration-150
// //           ease-in-out">Send</button>

// //       </form>

// //     </div>
// //     </section>

// // </div>
