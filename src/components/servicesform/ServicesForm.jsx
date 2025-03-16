// import { useState } from "react";
// import { AxiosPost } from "../../apiCall/ApiCall";

// const ServicesForm = () => {
//   const [formData, setFormData] = useState({
//     rates: [{ hours: "", rate: "" }],
//     services: [],
//   });

//   const [errors, setErrors] = useState({});
//   const [successMessage, setSuccessMessage] = useState("");

//   const servicesList = [
//     "Classic vaginal sex", "Cunnilingus", "Duo", "Fingering", "Incall", "MMF",
//     "Strap-On", "Striptease", "Bisexual", "Cum in mouth", "Cum on body",
//     "Cum on face", "Masturbation", "Oral without condom", "Swallowing",
//     "Bondage", "Deepthroat", "Face sitting", "Footjob", "Handjob",
//     "Mistress", "Rimming", "French kissing", "Girlfriend Experience",
//     "Kamasutra", "Sex toys"
//   ];

//   const handleRateChange = (index, field, value) => {
//     const updatedRates = [...formData.rates];
//     updatedRates[index][field] = value;
//     setFormData({ ...formData, rates: updatedRates });
//   };

//   const addRateField = () => {
//     setFormData({ ...formData, rates: [...formData.rates, { hours: "", rate: "" }] });
//   };

//   const handleServiceChange = (service) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       services: prevData.services.includes(service)
//         ? prevData.services.filter((s) => s !== service)
//         : [...prevData.services, service],
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Ensure at least one rate and one service is selected
//     let errors = {};
//     if (formData.rates.length === 0 || formData.rates.some(rate => !rate.hours || !rate.rate)) {
//       errors.rates = "At least one valid rate (hours & price) is required.";
//     }
//     if (formData.services.length === 0) {
//       errors.services = "At least one service must be selected.";
//     }

//     if (Object.keys(errors).length > 0) {
//       setErrors(errors);
//       return;
//     }

//     // try {
//     //   const response = await AxiosPost("/api/escorts/register", formData);
//     //   if (response) {
//     //     setSuccessMessage("Your rates and services have been submitted successfully.");
//     //   }
//     // } catch (error) {
//     //   console.error("Error submitting form:", error);
//     // }
//     setErrors({});
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-purple-900 shadow-md rounded-md text-white">
//       <h2 className="text-xl font-semibold mb-4">Set Rates & Select Services</h2>
//       {successMessage && <p className="text-green-400 mb-4">{successMessage}</p>}
//       <form onSubmit={handleSubmit} className="space-y-6">

//         {/* Rates Section */}
//         <h3 className="text-lg font-semibold">Rates (Hours & Price)</h3>
//         {formData.rates.map((rate, index) => (
//           <div key={index} className="flex space-x-2">
//             <input
//               type="number"
//               placeholder="Hours"
//               className="w-1/2 p-2 rounded bg-purple-800 border-2 border-purple-500"
//               value={rate.hours}
//               onChange={(e) => handleRateChange(index, "hours", e.target.value)}
//             />
//             <input
//               type="number"
//               placeholder="Rate ($)"
//               className="w-1/2 p-2 rounded bg-purple-800 border-2 border-purple-500"
//               value={rate.rate}
//               onChange={(e) => handleRateChange(index, "rate", e.target.value)}
//             />
//           </div>
//         ))}
//         {errors.rates && <p className="text-red-500 text-sm">{errors.rates}</p>}
//         <button type="button" onClick={addRateField} className="w-full bg-gray-500 text-white p-2 rounded">
//           Add More Rates
//         </button>

//         {/* Services Section */}
//         <h3 className="text-lg font-semibold mt-4">Select Services</h3>
//         <div className="grid grid-cols-2 gap-2 text-sm">
//           {servicesList.map((service,index) => (
//             <label key={service} className="flex items-center space-x-2" htmlFor={index}>
//               <input
//                 type="checkbox"
//                 id={index}
//                 checked={formData.services.includes(service)}
//                 onChange={() => handleServiceChange(service)}
//                 className="w-4 h-4 text-indigo-500"
//               />
//               <span>{service}</span>
//             </label>
//           ))}
//         </div>
//         {errors.services && <p className="text-red-500 text-sm">{errors.services}</p>}

//         <button type="submit" className="w-full bg-green-600 text-white p-2 rounded">
//           Submit
//         </button>
//       </form>



//       {[
//             { name: "name", placeholder: "Full Name" },
//             { name: "age", placeholder: "Age", type: "number" },
//             { name: "height", placeholder: "Height (e.g., 5'8)" },
//             { name: "chest", placeholder: "Chest Size (in inches)" },
//             { name: "contact_number", placeholder: "Contact Number" },
//             { name: "whatsapp_number", placeholder: "WhatsApp Number" },
//             { name: "location", placeholder: "Location" },
//             { name: "bio", placeholder: "Bio/Description" },
//             { name: "weight", placeholder: "Weight (kg)" },
//             { name: "country", placeholder: "Country" },
//             { name: "state", placeholder: "State" },
//             { name: "city", placeholder: "City" },
//           ].map(({ name, placeholder, type = "text" }) => (
//             <div key={name}>
//               <input
//                 type={type}
//                 name={name}
//                 placeholder={placeholder}
//                 className="w-full p-2 rounded outline-none bg-[#43166b] border-2 border-[#843bc3]"
//                 value={formData[name]}
//                 onChange={handleChange}
//               />
//               {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
//             </div>
//           ))}

//           <div>
//             <label htmlFor="">Profile Photo : </label>
//             <input type="file" name="profile_photo" onChange={handleFileChange} accept="image/*" />
//             {errors.profile_photo && <p className="text-red-500 text-sm">{errors.profile_photo}</p>}
//           </div>
//           <label htmlFor="">Additional Photos</label>
//           {formData.additionalPictures.map((_, index) => (
//             <input
//               key={index}
//               type="file"
//               name="additionalPictures"
//               onChange={(e) => handleFileChange(e, index)}
//               accept="image/*"
//             />
//           ))}

//           <button type="button" onClick={addAdditionalPictureField} className="w-full bg-gray-500 text-white p-2 rounded">
//             Add Additional Image
//           </button>

//           <div>
//             <input type="file" name="video" onChange={handleFileChange} accept="video/*" />
//             <p className="text-gray-300 text-sm">(Optional: Upload a video)</p>
//           </div>




//     </div>
//   );
// };

// export default ServicesForm;
