import React from 'react'

import { RxCross2 } from "react-icons/rx";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa"


export const Cart = () => {
  return (
    <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>
        <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8 max-w-screen">
          <div class="mx-auto w-full flex-none lg:w-[70%] xl:w-[70%]">
            <div class="space-y-6">

              <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6 relative">
                <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                  <a href="#" class="shrink-0 md:order-1">
                    <img class="h-20 w-20 dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="imac image" />
                    <img class="hidden h-20 w-20 dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="imac image" />
                  </a>

                  <div class="flex items-center justify-between md:order-3 md:justify-end">
                    <div class="text-end md:order-4 md:w-32">
                      <p class="text-base font-bold text-gray-900 dark:text-white">$1,499</p>
                    </div>
                  </div>

                  <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                    <a href="#" class="text-base font-medium text-gray-900 hover:underline dark:text-white">PC system All in One APPLE iMac (2023) mqrq3ro/a, Apple M3, 24" Retina 4.5K, 8GB, SSD 256GB, 10-core GPU, Keyboard layout INT</a>

                    <div class="flex items-center gap-4">
                      <button type="button" class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                        <svg class="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                        </svg>
                        Add to Favorites
                      </button>
                    </div>
                  </div>
                </div>

                <button type="button" class="absolute top-0 right-0 mt-2 mr-2 inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                  <RxCross2 size={25} />
                </button>
              </div>
            </div>
          </div>


          <div class="mx-auto mt-6 max-w-4xl lg:mt-0 lg:w-[30%]">
            <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
              <p class="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>

              <div class="space-y-4">
                <div class="space-y-2">
                  <dl class="flex items-center justify-between gap-4">
                    <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                    <dd class="text-base font-medium text-gray-900 dark:text-white">$7,592.00</dd>
                  </dl>

                  <dl class="flex items-center justify-between gap-4">
                    <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                    <dd class="text-base font-medium text-green-600">-$299.00</dd>
                  </dl>

                  <dl class="flex items-center justify-between gap-4">
                    <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Store Pickup</dt>
                    <dd class="text-base font-medium text-gray-900 dark:text-white">$99</dd>
                  </dl>

                  <dl class="flex items-center justify-between gap-4">
                    <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                    <dd class="text-base font-medium text-gray-900 dark:text-white">$799</dd>
                  </dl>
                </div>

                <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                  <dt class="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                  <dd class="text-base font-bold text-gray-900 dark:text-white">$8,191.00</dd>
                </dl>
              </div>
              <button class="no-underline w-full mt-4 px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 transition duration-300">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
 






// import React, { useEffect, useRef, useState } from "react";
// import "./Cart.css";
// import CloseIcon from "@mui/icons-material/Close";
// import Rating from "@mui/material/Rating";
// import LocalOfferIcon from "@mui/icons-material/LocalOffer";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import CircularProgress from "@mui/material/CircularProgress";
// import { darken } from "@mui/system";
// import { useNavigate } from "react-router";

// export const CartPage = () => {
//   const [data, setData] = useState([]);
//   const loading = useRef(true);
//   const { user } = useSelector((store) => store.auth);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = JSON.parse(localStorage.getItem("token"));

//     axios
//       .get(`https://udemy-vr4p.onrender.com/cart/${token?.user?._id}`)
//       .then(({ data }) => {
//         loading.current = false;
//         setData([...data]);
//         console.log(data);
//       });
//   }, []);
//   return (
//     <>
//       <h1 className="heading">Shopping Cart</h1>
//       {loading.current ? (
//         <CircularProgress size={"8rem"} className="cart-loader" />
//       ) : (
//         <div className="cart-body">
//           <div className="main">
//             <div className="cart-items">
//               <p>Courses in Cart</p>
//               <div className="cart-items-container">
//                 {data.map((el) => (
//                   <CartProdCard db={el.productId} />
//                 ))}
//               </div>
//             </div>
//             <div className="total-div">
//               <div className="total-price">
//                 <p>Total: </p>
//                 <h1>
//                   <TotalPrice db={data} />
//                 </h1>
//                 {/* <span>{totalAmount}</span> */}
//               </div>
//               <div className="checkOutButton">
//                 <button
//                   onClick={() => {
//                     navigate("/payment");
//                   }}
//                 >
//                   <h4>checkout</h4>
//                 </button>
//               </div>
//               <div className="promotion">
//                 <h4>Promotions</h4>
//                 <div className="promotion-div">
//                   <CloseIcon className="closeicon" />
//                   <p>
//                     <span>KEEPLEARNING </span>is applied
//                   </p>
//                 </div>
//                 <div className="inputbtn">
//                   <input
//                     type="text"
//                     className="input"
//                     placeholder="Enter Coupon"
//                   />
//                   <button className="applybtn">Apply</button>
//                 </div>
//               </div>
//               <div className="last-div">
//                 <p>Buy now, pay later for orders of $25 and over</p>
//                 <img
//                   className="klarna"
//                   src="	https://www.udemy.com/staticx/udemy/images/v8/klarna-logo.svg"
//                   alt="klarna"
//                 />
//                 <img
//                   className="afterPay"
//                   src="https://www.udemy.com/staticx/udemy/images/v8/afterpay-logo.svg"
//                   alt="after pay"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// const CartProdCard = ({ db }) => {
//   const { title, price, image, _id, level, author, rating } = db;
//   return (
//     <>
//       <div className="items-info">
//         <div className="product-img">
//           <img src={image} alt="image" />
//         </div>
//         <div className="title">
//           <h4>{title}</h4>
//           <p>{author}</p>
//           <div className="bestseller-div">
//             <button>Bestseller</button>
//             <div className="rating">
//               <span className="rate-num">{rating || 4.5}</span>
//               <Rating
//                 name="read-only"
//                 size="small"
//                 precision={0.5}
//                 value={rating || 4.5}
//                 readOnly
//               />
//               <span className="rate-count">(1200)</span>
//             </div>
//           </div>
//           <div className="list">
//             <ul className="list">
//               <li>2.5 total hours</li>
//               <li>33 lectures</li>
//               <li>{level}</li>
//             </ul>
//           </div>
//         </div>
//         <div className="add-remove-quant">
//           <div className="btn">
//             <button onClick={() => {}}>Remove</button>
//             <button>Save for Later</button>
//             <button> Move to Wishlist</button>
//           </div>
//         </div>
//         <div className="cart-price">
//           <h3>₹{price}</h3>
//           <LocalOfferIcon className="icon-tag" />
//         </div>
//       </div>
//     </>
//   );
// };

// const TotalPrice = ({ db }) => {
//   const [price, setPrice] = useState(0);
//   useEffect(() => {
//     let total = 0;
//     db.map((el) => {
//       total += +el.productId.price;
//     });
//     setPrice((prev) => total);
//   }, []);
//   return <div>₹{price}</div>;
// }