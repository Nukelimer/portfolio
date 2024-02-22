// "use client";

// import { motion, useInView, useScroll } from "framer-motion";
// import SideImage from "../components/SideImage";
// import { useRef } from "react";
// const skills = [
//   "JavaScript",
//   "Tailwind",
//   "SCSS/SASS",
//   "ReactJS",
//   "NextJS",
//   "Git/Github",
//   "Jest*",
//   "Java*",
// ];
// const AboutMePage = () => {
//   const ref = useRef();
//   const skillElement = useRef();

//   const skilledRefView = useInView(skillElement);
//   const { scrollYProgress } = useScroll({ container: ref });

//   return (
//     <motion.div
//       className="h-full"
//       initial={{ y: "-200vh" }}
//       animate={{ y: "0%" }}
//       transition={{ duration: 2 }}>
//       <div className="h-full overflow-scroll lg:flex" ref={ref}>
//         {/* container */}
//         <div className=" px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 lg:w-2/3 xl:w-1/2 ">
//           {/* text */}
//           <div className="text-justify">
//             <h1 className="font-bold  text-2xl">About Me </h1>
//             <p>
//               Hey Stranger, I am Egwuda, Iko Remi, a dynamic individual who is
//               seamlessly blending law and web development. With a law degree and
//               a fervent passion for justice, my journey led me to explore the
//               digital landscape. Driven by curiosity, i delved into coding,
//               discovering new realms of creative expression. My legal acumen and
//               technical prowess set me apart from my peers, allowing me to
//               approach projects with fresh perspectives. Apart from my
//               professional endeavors, I enjoys cooking delectable dishes like
//               Moi-Moi and tweaking smartphone's OS in my spare time. The
//               projects i have built showcases diverse projects reflecting my
//               commitment to excellence. My journey continues, pushing boundaries
//               in law and technology, hoping that i will leave an indelible mark
//               on both spheres.
//             </p>
//             <hr className="h-[1px] bg-black mb-6 mt-2" />
//             <span className="italic font-semibold">
//               "Talk is cheap, show me the code" - Linus Torvalds
//             </span>
//           </div>

//           <div className="flex justify-end">
//             <svg
//               width="102"
//               height="102"
//               viewBox="0 0 1440 1024"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg">
//               <rect width="1440" height="1024" fill="transparent" />
//               <path
//                 d="M316.43 235.068C319.506 261.521 329.865 288 337.483 313.29C362.111 395.038 379.239 477.693 389.307 562.528C393.549 598.275 395.137 633.949 395.137 669.9C395.137 672.496 395.784 674.889 394.165 668.685C386.334 638.665 377.759 608.846 369.711 578.885C341.344 473.281 316.43 366.438 316.43 256.608C316.43 245.325 316.43 234.043 316.43 222.76C316.43 219.245 316.756 215.4 316.106 211.91C314.666 204.168 319.939 227.225 322.746 234.583C348.291 301.548 381.592 365.266 418.458 426.653C455.067 487.614 497.78 546.631 561.944 580.99C655.937 631.323 761.607 630.346 863.977 612.57C916.024 603.532 967.333 590.158 1018.64 577.751C1078.96 563.164 1139.5 549.752 1200.02 536.049C1221.54 531.176 1244.1 526.846 1264.8 518.802C1270.43 516.613 1278.18 513.825 1277.76 506.494C1276.96 492.581 1266.96 474.967 1259.62 464.063C1237.72 431.565 1207.29 408.813 1173.46 389.648C1094.66 345.008 1006.31 316.772 919.525 292.56C780.691 253.826 638.708 225.596 496.921 200.25C405.39 183.887 313.38 168.834 220.719 160.41C201.218 158.638 181.521 157.819 161.932 157.819"
//                 stroke="black"
//                 stroke-width="3"
//                 stroke-linecap="round"
//               />
//               <path
//                 d="M514.655 235.068C508.873 235.344 503.405 237.192 497.731 238.065C489.623 239.312 471.277 243.9 466.313 250.616C463.763 254.066 465.062 262.069 465.342 265.839C466.773 285.158 472.033 304.157 477.407 322.682C488.315 360.291 501.521 396.952 506.233 436.046C510.993 475.53 511.74 516.235 511.74 555.969C511.74 569.933 509.761 555.233 509.472 551.191C508.344 535.389 512.237 519.14 520.647 505.684C527.08 495.391 534.568 492.072 546.397 491.109C580.393 488.339 615.568 489.595 649.558 491.433C681.081 493.137 711.789 499.151 743.083 501.959C748.126 502.412 749.774 502.543 744.135 498.234C719.978 479.774 691.942 465.334 666.238 449.326"
//                 stroke="black"
//                 stroke-width="3"
//                 stroke-linecap="round"
//               />
//               <path
//                 d="M743.488 237.984C723.628 238.747 705.533 242.509 686.887 249.482C680.183 251.989 666.274 255.091 665.105 264.057C662.119 286.945 677.253 306.689 700.571 305.516C709.354 305.074 720.9 303.275 723.406 294.503C723.733 293.359 724.034 287.879 724.702 287.378C726.334 286.154 726.628 290.985 727.374 292.884C735.554 313.707 743.019 334.842 750.613 355.882C766.176 398.997 780.634 442.477 794.987 486.007C807.959 525.349 826.263 568.002 829.158 609.817C834.668 689.406 698.299 649.869 661.704 638.644C622.286 626.553 582.952 611.662 545.263 594.837C536.752 591.037 547.534 583.53 551.417 580.018C573.898 559.684 596.981 540.435 618.868 519.369C640.744 498.313 662.788 478.227 686.644 459.529"
//                 stroke="black"
//                 stroke-width="3"
//                 stroke-linecap="round"
//               />
//               <path
//                 d="M1011.67 379.364C1010.11 340.309 1008.15 460.267 1024.06 495.967C1026.57 501.589 1029.9 508.674 1034.43 513.053C1040.43 518.862 1050.85 512.929 1056.7 510.138C1092.79 492.912 1129.55 459.831 1142.61 420.985C1147.41 406.708 1143.68 394.79 1141.72 380.66C1139.68 366.012 1144.85 389.27 1145.44 391.187C1156.22 426.049 1164.76 461.907 1176.38 496.453C1177.02 498.358 1181.25 505.194 1176.05 504.227C1168 502.728 1160.39 497.896 1153.05 494.51"
//                 stroke="black"
//                 stroke-width="3"
//                 stroke-linecap="round"
//               />
//               <path
//                 d="M664.781 245.271C668.329 280.755 677.181 316.992 686.401 351.347C703.101 413.573 720.177 475.709 736.362 538.074C739.348 549.579 743.488 561.733 743.488 573.783C743.488 590.07 740.304 541.362 739.115 525.118"
//                 stroke="black"
//                 stroke-width="3"
//                 stroke-linecap="round"
//               />
//               <path
//                 d="M814.907 280.252C788.173 300.876 764.3 326.849 744.864 354.343C713.412 398.837 691.555 454.481 650.044 491.109C640.135 499.852 628.625 506.407 617.087 512.729C608.732 517.307 609.122 513.367 612.714 505.765C622.142 485.813 642.624 468.125 664.376 462.687C667.316 461.952 669.957 464.959 671.907 466.655C685.108 478.134 697.466 490.704 709.802 503.093C727.15 520.513 743.514 538.732 761.14 555.888C766.706 561.305 771.779 560.676 779.278 558.317C792.252 554.236 797.096 543.082 800.332 530.948"
//                 stroke="black"
//                 stroke-width="3"
//                 stroke-linecap="round"
//               />
//               <path
//                 d="M844.058 396.855C851.231 393.159 858.131 388.799 865.354 385.275C868.798 383.595 874.653 380.269 877.581 384.466C886.28 396.934 888.058 417.581 891.347 431.998C900.672 472.877 906.299 513.141 934.344 546.171C940.041 552.881 948.399 562.927 958.069 563.661C980.34 565.353 1004.83 547.794 1020.42 534.187C1052.97 505.775 1088.92 462.186 1088.92 416.37C1088.92 407.797 1085.25 405.53 1077.18 402.037C1046.1 388.584 1011.78 381.503 978.637 375.316C946.569 369.33 913.191 360.889 883.411 377.907"
//                 stroke="black"
//                 stroke-width="3"
//                 stroke-linecap="round"
//               />
//               <path
//                 d="M912.562 618.4C899.651 623.011 888.888 631.241 876.447 636.295C866.784 640.221 867.104 650.902 868.188 660.345C871.419 688.498 873.208 716.232 873.208 744.558C873.208 752.35 871.253 758.67 876.285 748.606C884.481 732.214 897.484 731.968 914.829 731.278C943.774 730.127 970.396 734.892 997.665 744.477C998.67 744.83 1035.54 760.321 1036.29 758.08C1038.63 751.061 1029.66 735.307 1026.01 730.306C1018.32 719.78 1005.87 715.962 993.86 712.492C970.846 705.844 946.999 701.337 923.493 696.864C903.221 693.006 882.701 690.403 862.52 686.094C861.719 685.924 855.278 685.305 857.175 682.532C859.741 678.782 865.892 679.873 870.374 679.131C892.06 675.539 913.784 672.325 935.396 668.28C960.414 663.597 984.812 658.11 1010.22 656.296"
//                 stroke="black"
//                 stroke-width="3"
//                 stroke-linecap="round"
//               />
//               <path
//                 d="M873.208 205.918C865.718 211.593 866.266 221.242 866.244 230.048C866.072 301.586 883.381 373.569 898.715 442.929C917.287 526.936 939.948 609.584 963.089 692.41C989.857 788.216 1011.47 885.243 1037.1 981.326C1038.51 986.628 1042.16 999.898 1044.55 1007.08C1046.87 1014.02 1040.01 993.149 1037.75 986.184C1013.21 910.689 994.663 834.49 980.094 756.461C970.719 706.249 962.434 655.845 953.211 605.606C950.141 588.885 947.385 572.629 946.085 555.726"
//                 stroke="black"
//                 stroke-width="3"
//                 stroke-linecap="round"
//               />
//               <path
//                 d="M715.795 236.526C702.067 393.022 716.29 546.703 747.212 700.508C753.034 729.464 759.28 758.326 764.541 787.393C765.796 794.327 767.681 815.226 768.266 808.203C769.328 795.455 766.036 782.412 763.893 769.984"
//                 stroke="black"
//                 stroke-width="3"
//                 stroke-linecap="round"
//               />
//             </svg>
//           </div>
//           <motion.div
//             className=" border border-gray-800 flex w-fit px-1 py-4 rounded-md mt-16"
//             initial={{ opacity: 0.2, y: 0, rotate: 0 }}
//             animate={{ opacity: 1, y: "20px", rotate: 0 }}
//             transition={{
//               repeat: Infinity,
//               duration: 3,
//               ease: "easeOut",
//             }}>
//             <svg
//               width="30"
//               height="30"
//               viewBox="0 0 178 284"
//               fill="black"
//               xmlns="http://www.w3.org/2000/svg">
//               <path
//                 d="M70.9809 0V177.452H0L89.7908 283.924L177.452 177.452H106.471V0H70.9809Z"
//                 fill="black"
//               />
//             </svg>
//           </motion.div>
//           <div className=" mt-16 " ref={skillElement}>
//             <motion.h1
//               initial={{
//                 x: "-100px",
//               }}
//               animate={skilledRefView ? { x: 0 } : {}}
//               transition={{
//                 type: "tween",
//                 delay: 0.6,
//               }}
//               className="font-bold  text-2xl">
//               Skills{" "}
//             </motion.h1>

//             <motion.ul
//               className="flex flex-wrap gap-2"
//               initial={{
//                 x: "100px",
//               }}
//               animate={skilledRefView ? { x: 0 } : {}}
//               transition={{
//                 type: "tween",
//                 delay: 0.6,
//               }}>
//               {skills.map((skill) => {
//                 return (
//                   <li
//                     key={skill}
//                     className="bg-slate-800 text-white p-2  mt-2 rounded">
//                     {skill}
//                   </li>
//                 );
//               })}
//             </motion.ul>
//           </div>
//           <motion.div
//             className=" border border-gray-800 flex w-fit px-1 py-4 rounded-md mt-16"
//             initial={{ opacity: 0.2, y: 0, rotate: 0 }}
//             animate={{ opacity: 1, y: "20px", rotate: 0 }}
//             transition={{
//               repeat: Infinity,
//               duration: 3,
//               ease: "easeOut",
//             }}>
//             <svg
//               width="30"
//               height="30"
//               viewBox="0 0 178 284"
//               fill="black"
//               xmlns="http://www.w3.org/2000/svg">
//               <path
//                 d="M70.9809 0V177.452H0L89.7908 283.924L177.452 177.452H106.471V0H70.9809Z"
//                 fill="black"
//               />
//             </svg>
//           </motion.div>
//           <div className="mt-20 pb-8 ">
//             <h1 className="font-bold text-2xl">Experience</h1>
//             <div className=" flex justify-between mt-6 ">
//               <div className=" w-1/3">
//                 <div className="bg-white p-4  rounded-tl-md rounded-tr-md text-xl font-bold">
//                   Frontend Intern
//                 </div>
//                 <div className="px-3 pt-3">
//                   Support frontend intern building out their premiere product.{" "}
//                 </div>
//                 <div className="text-teal-600 italic p-3">
//                   Aug. 2023 - Feb. 2024
//                 </div>
//                 <div className="p-3 font-bold bg-white rounded-md w-fit">
//                   Warehouzit Nig. Ltd.
//                 </div>
//               </div>
//               <div className=" w-1/6 ">
//                 <div className="w-1 h-full bg-slate-500 rounded relative">
//                   <div className="absolute w-5 h-5 rounded-full ring-4 ring-gray-950 bg-slate-50 -left-2"></div>
//                 </div>
//               </div>
//               <div className="w-1/3"></div>
//             </div>

//             {/*
//             <div className=" flex justify-between flex-row-reverse ">
//               <div className=" w-1/3">
//                 <div className="bg-white p-4  rounded-tl-md rounded-tr-md text-xl font-bold">
//                   Frontend Intern
//                 </div>
//                 <div className="px-3 pt-3">
//                   Support frontend intern building out their premiere product.{" "}
//                 </div>
//                 <div className="text-teal-600 italic p-3">
//                   Aug. 2023 - Feb. 2024
//                 </div>
//                 <div className="p-3 font-bold bg-white rounded-md w-fit">
//                   Warehouzit Nig. Ltd.
//                 </div>
//               </div>
//               <div className=" w-1/6 ">
//                 <div className="w-1 h-full bg-slate-500 rounded relative">
//                   <div className="absolute w-5 h-5 rounded-full ring-4 ring-gray-950 bg-slate-50 -left-2"></div>
//                 </div>
//               </div>
//               <div className="w-1/3"></div>

              
//             </div> */}
//           </div>
//         </div>
//         <div className="hidden lg:block w-1/2  xl:w-1/2 sticky top-0  z-30 h-full lg:h-full xl:h-full">
//           <SideImage scrollYProgress={scrollYProgress} />
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default AboutMePage;


"use client";

import { motion, useInView, useScroll } from "framer-motion";
import SideImage from "../components/SideImage";
import { useRef } from "react";

const skills = [
  "JavaScript",
  "Tailwind",
  "SCSS/SASS",
  "ReactJS",
  "NextJS",
  "Git/Github",
  "Jest*",
  "Java*",
];

const AboutMePage = () => {
  const ref = useRef();
  const skillElement = useRef();

  const skilledRefView = useInView(skillElement);
  const { scrollYProgress } = useScroll({ container: ref });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 2 }}
    >
      <div className="h-full overflow-scroll lg:flex" ref={ref}>
        {/* container */}
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 lg:w-2/3 xl:w-1/2 ">
          {/* text */}
          <div className="text-justify">
            <h1 className="font-bold text-2xl">About Me </h1>
            <p>
              Hey Stranger, I am Egwuda, Iko Remi, a dynamic individual who is
              seamlessly blending law and web development. With a law degree and
              a fervent passion for justice, my journey led me to explore the
              digital landscape. Driven by curiosity, I delved into coding,
              discovering new realms of creative expression. My legal acumen and
              technical prowess set me apart from my peers, allowing me to
              approach projects with fresh perspectives. Apart from my
              professional endeavors, I enjoy cooking delectable dishes like
              Moi-Moi and tweaking smartphones&apos; OS in my spare time. The
              projects I have built showcase diverse projects reflecting my
              commitment to excellence. My journey continues, pushing boundaries
              in law and technology, hoping that I will leave an indelible mark
              on both spheres.
            </p>
            <hr className="h-[1px] bg-black mb-6 mt-2" />
            <span className="italic font-semibold">
              &quot;Talk is cheap, show me the code&quot; - Linus Torvalds
            </span>
          </div>

          <div className="flex justify-end">
            <svg
              width="102"
              height="102"
              viewBox="0 0 1440 1024"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="1440" height="1024" fill="transparent" />
              {/* Remaining SVG paths */}
            </svg>
          </div>
          <motion.div
            className="border border-gray-800 flex w-fit px-1 py-4 rounded-md mt-16"
            initial={{ opacity: 0.2, y: 0, rotate: 0 }}
            animate={{ opacity: 1, y: "20px", rotate: 0 }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeOut",
            }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 178 284"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M70.9809 0V177.452H0L89.7908 283.924L177.452 177.452H106.471V0H70.9809Z"
                fill="black"
              />
            </svg>
          </motion.div>
          <div className="mt-16 " ref={skillElement}>
            <motion.h1
              initial={{
                x: "-100px",
              }}
              animate={skilledRefView ? { x: 0 } : {}}
              transition={{
                type: "tween",
                delay: 0.6,
              }}
              className="font-bold text-2xl"
            >
              Skills{" "}
            </motion.h1>

            <motion.ul
              className="flex flex-wrap gap-2"
              initial={{
                x: "100px",
              }}
              animate={skilledRefView ? { x: 0 } : {}}
              transition={{
                type: "tween",
                delay: 0.6,
              }}
            >
              {skills.map((skill) => {
                return (
                  <li
                    key={skill}
                    className="bg-slate-800 text-white p-2  mt-2 rounded"
                  >
                    {skill}
                  </li>
                );
              })}
            </motion.ul>
          </div>
          <motion.div
            className="border border-gray-800 flex w-fit px-1 py-4 rounded-md mt-16"
            initial={{ opacity: 0.2, y: 0, rotate: 0 }}
            animate={{ opacity: 1, y: "20px", rotate: 0 }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeOut",
            }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 178 284"
              fill="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M70.9809 0V177.452H0L89.7908 283.924L177.452 177.452H106.471V0H70.9809Z"
                fill="black"
              />
            </svg>
          </motion.div>
          <div className="mt-20 pb-8 ">
            <h1 className="font-bold text-2xl">Experience</h1>
            <div className="flex justify-between mt-6 ">
              <div className="w-1/3">
                <div className="bg-white p-4  rounded-tl-md rounded-tr-md text-xl font-bold">
                  Frontend Intern
                </div>
                <div className="px-3 pt-3">
                  Support frontend intern building out their premiere product.{" "}
                </div>
                <div className="text-teal-600 italic p-3">
                  Aug. 2023 - Feb. 2024
                </div>
                <div className="p-3 font-bold bg-white rounded-md w-fit">
                  Warehouzit Nig. Ltd.
                </div>
              </div>
              <div className="w-1/6 ">
                <div className="w-1 h-full bg-slate-500 rounded relative">
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-gray-950 bg-slate-50 -left-2"></div>
                </div>
              </div>
              <div className="w-1/3"></div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block w-1/2  xl:w-1/2 sticky top-0  z-30 h-full lg:h-full xl:h-full">
          <SideImage scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMePage;
