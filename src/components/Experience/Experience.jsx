// //  HEAD
// // 3c495af (fix: vite + vercel deployment setup)
// // ✅ final clean version (no conflict markers)
// export default function Experience() {
//   return (
//     <div>My Updated Experience Section</div>
//   );
// }

// import React from "react";
// import { experiences } from "../../constants"; // Import your data

// const Experience = () => {
//   return (
//     <section
//       id="experience"
//       className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
//     >
//       {/* Section Title */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           Showcasing a blend of technical expertise, adaptability, and
//           real-world experience to create meaningful outcomes
//         </p>
//       </div>

//       {/* Experience Timeline */}
//       <div className="relative">
//         {/* Vertical line */}
//         <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

//         {/* Experience Entries */}
//         {experiences.map((experience, index) => (
//           <div
//             key={experience.id}
//             className={`flex flex-col sm:flex-row items-center mb-16 ${
//               index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
//             }`}
//           >
//             {/* Content Section */}
//             <div
//               className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
//                 index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
//               } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
//             >
//               {/* Flex container for role, company, and date */}
//               <div className="flex items-center space-x-6">
//                 <div className="flex flex-col justify-between">
//                   <div>
//                     <h3 className="text-xl sm:text-2xl font-semibold text-white">
//                       {experience.role}
//                     </h3>
//                     <h4 className="text-md sm:text-sm text-gray-300">
//                       {experience.company}
//                     </h4>
//                   </div>
//                   <p className="text-sm text-gray-500 mt-2">
//                     {experience.date}
//                   </p>
//                 </div>
//               </div>

//               {/* Description */}
//               <p className="mt-4 text-gray-400">{experience.desc}</p>

//               {/* Skills + Certificate */}
//               <div className="mt-4">
//                 {/* Show skills only if available */}
//                 {experience.skills && experience.skills.length > 0 && (
//                   <>
//                     <h5 className="font-medium text-white">Skills:</h5>
//                     <ul className="flex flex-wrap mt-2">
//                       {experience.skills?.map((skill, index) => (
//                         <li
//                           key={index}
//                           className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
//                         >
//                           {skill}
//                         </li>
//                       ))}
//                     </ul>
//                   </>
//                 )}

//                 {/* Certificate Button */}
//                 {experience.certificate && (
//                   <div className="mt-4">
//                     <a
//                       href={experience.certificate}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-block bg-violet-900 text-gray-200 px-4 py-2 text-sm rounded-lg border border-violet-700 hover:bg-violet-800 transition"

//                       // className="inline-block bg-blue-900 text-gray-200 px-4 py-2 text-sm rounded-lg border border-blue-700 hover:bg-blue-800 transition"
//                     >
//                       View Certificate
//                     </a>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Experience;

import React from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Showcasing a blend of technical expertise, adaptability, and
          real-world experience to create meaningful outcomes
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex container for role, company, and date */}
              <div className="flex items-center space-x-6">
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {experience.company}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    {experience.date}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-gray-400">{experience.desc}</p>

              {/* Skills + Certificate */}
              <div className="mt-4">
                {/* Show skills only if available */}
                {experience.skills && experience.skills.length > 0 && (
                  <>
                    <h5 className="font-medium text-white">Skills:</h5>
                    <ul className="flex flex-wrap mt-2">
                      {experience.skills?.map((skill, index) => (
                        <li
                          key={index}
                          className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {/* Certificate Button */}
                {experience.certificate && (
                  <div className="mt-4">
                    <a
                      href={experience.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-violet-900 text-gray-200 px-4 py-2 text-sm rounded-lg border border-violet-700 hover:bg-violet-800 transition"
                    >
                      View Certificate
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
