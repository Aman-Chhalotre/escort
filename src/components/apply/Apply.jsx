import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";
import { AxiosPost } from "../../apiCall/ApiCall";
import UniqueIdDialog from "../modal/UniqueIdModal.jsx";

const Apply = () => {
  const [open, setOpen] = useState(false);
  const [openDailog, setOpenDailog] = useState(false);
  const [uniqueId, setUniqueId] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    profile_photo: null,
    age: "",
    height: "",
    chest: "",
    contact_number: "",
    whatsapp_number: "",
    location: "",
    bio: "",
    weight: "",
    country: "",
    state: "",
    city: "",
    images: [],
    videos: [], 
    rates: [{ hours: "", rate: "" }],
    services: [],
  });

  const servicesList = [
    "Classic vaginal sex", "Cunnilingus", "Duo", "Fingering", "Incall", "MMF",
    "Strap-On", "Striptease", "Bisexual", "Cum in mouth", "Cum on body", "Cum on face",
    "Masturbation", "Oral without condom", "Swallowing", "Bondage", "Deepthroat",
    "Face sitting", "Footjob", "Handjob", "Mistress", "Rimming", "French kissing",
    "Girlfriend Experience", "Kamasutra", "Sex toys", "Foot fetish", "Rimming", "Spanking", "Submissive", "BDSM", "Bondage", "Deepthroat", "Domination"
  ];

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    if (!formData.name) errors.name = "Full Name is required.";
    if (!formData.profile_photo) errors.profile_photo = "Profile Picture is required.";
    if (!formData.age || isNaN(formData.age) || formData.age < 18) errors.age = "Valid age (18+) is required.";
    if (!formData.height) errors.height = "Height is required.";
    if (!formData.chest) errors.chest = "Chest size is required.";
    if (!formData.contact_number) errors.contact_number = "Contact number is required.";
    if (!formData.whatsapp_number) errors.whatsapp_number = "WhatsApp number is required.";
    if (!formData.location) errors.location = "Location is required.";
    if (!formData.bio) errors.bio = "Bio is required.";
    if (!formData.weight) errors.weight = "Weight is required.";
    if (!formData.country) errors.country = "Country is required.";
    if (!formData.state) errors.state = "State is required.";
    if (!formData.city) errors.city = "City is required.";
    if (formData.rates.length === 0 ) {
      errors.rates = "At least one valid rate (hours & price) is required.";
    }
    if (formData.services.length === 0) {
      errors.services = "At least one service must be selected.";
    }
    return errors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e, index = null) => {
    if (e.target.name === "profile_photo") {
      setFormData({ ...formData, profile_photo: e.target.files[0] });
    } else if (e.target.name === "videos") {
      setFormData({ ...formData, videos: e.target.files[0] });
    } else if (index !== null && index >= 0) {
      let updatedPictures = [...formData.images];
      updatedPictures[index] = e.target.files[0] || null;
      updatedPictures = updatedPictures.filter(pic => pic);
      setFormData({ ...formData, images: updatedPictures });
    }
  };

  const addAdditionalPictureField = () => {
    setFormData({
      ...formData,
      images: [...formData.images, null],
    });
  };

  const removeAdditionalPictureField = (index) => {
    const updatedPictures = formData.images.filter((_, i) => i !== index);
    setFormData({ ...formData, images: updatedPictures });
  };
  

  const handleRateChange = (index, field, value) => {
    const updatedRates = [...formData.rates];
    updatedRates[index][field] = value;
    setFormData({ ...formData, rates: updatedRates });
  };

  const addRateField = () => {
    setFormData({ ...formData, rates: [...formData.rates, { hours: "", rate: "" }] });
  };
  const removeRateField = (index) => {
    const updatedRates = formData.rates.filter((_, i) => i !== index);
    setFormData({ ...formData, rates: updatedRates });
  };

  const handleServiceChange = (service) => {
    setFormData((prevData) => ({
      ...prevData,
      services: prevData.services.includes(service)
        ? prevData.services.filter((s) => s !== service)
        : [...prevData.services, service],
    }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const validationErrors = validateForm();
  //   if (Object.keys(validationErrors).length > 0) {
  //     setErrors(validationErrors);
  //     return;
  //   }
  //   console.log("Form submitted", formData);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const validationErrors = validateForm();
  //   if (Object.keys(validationErrors).length > 0) {
  //     setErrors(validationErrors);
  //     return;
  //   }
    

  //   const convertedFormData = new FormData();
  //   Object.entries(formData).forEach(([key, value]) => {
  //     if (value instanceof File) {
  //       convertedFormData.append(key, value);
  //     } else if (Array.isArray(value)) {
  //       value.forEach((file, index) => {
  //         convertedFormData.append(`${key}[${index}]`, file);
  //       });
  //     } else {
  //       convertedFormData.append(key, value);
  //     }
  //   });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  
    const convertedFormData = new FormData();
  
    // Append all form fields
    Object.entries(formData).forEach(([key, value]) => {
      if (value instanceof File) {
        convertedFormData.append(key, value);
      } else if (Array.isArray(value)) {
        if (key === "rates") {
          // Handle rates separately as JSON string
          convertedFormData.append(key, JSON.stringify(value));
        } else if (key === "services") {
          // Append services one by one
          value.forEach((service, index) => {
            convertedFormData.append(`${key}[${index}]`, service);
          });
        } else if (key === "images") {
          // Append multiple images
          value.forEach((file, index) => {
            if (file) convertedFormData.append(`images[${index}]`, file);
          });
        }
        else if (key === "videos") {
          // Append multiple images
          value.forEach((file, index) => {
            if (file) convertedFormData.append(`videos[${index}]`, file);
          });
        }
         else {
          convertedFormData.append(key, value);
        }
      } else {
        convertedFormData.append(key, value);
      }
    }); 

    console.log([...convertedFormData.entries()]);

    try {
      const response = await AxiosPost("/api/escorts/register", convertedFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response) {
        console.log(response);
        setOpen(true);
        setOpenDailog(true)
        setUniqueId(response.uniqueId)
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }

    setErrors({});
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <>
    <div className="max-w-2xl mx-auto p-6 bg-[#571D89] shadow-md rounded-md text-white">
      <h2 className="text-xl font-semibold mb-4">Escort Application Form</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Previous Form Fields Here */}
        {[
            { name: "name", placeholder: "Full Name" },
            { name: "age", placeholder: "Age", type: "number" },
            { name: "height", placeholder: "Height (e.g., 5'8)" },
            { name: "chest", placeholder: "Chest Size (in inches)" },
            { name: "contact_number", placeholder: "Contact Number" },
            { name: "whatsapp_number", placeholder: "WhatsApp Number" },
            { name: "location", placeholder: "Location" },
            { name: "bio", placeholder: "Bio/Description" },
            { name: "weight", placeholder: "Weight (kg)" },
            { name: "country", placeholder: "Country" },
            { name: "state", placeholder: "State" },
            { name: "city", placeholder: "City" },
          ].map(({ name, placeholder, type = "text" }) => (
            <div key={name}>
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                className="w-full p-2 rounded outline-none bg-[#43166b] border-2 border-[#843bc3]"
                value={formData[name]}
                onChange={handleChange}
              />
              {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
            </div>
          ))}

          <div>
            <label htmlFor="">Profile Photo : </label>
            <input type="file" name="profile_photo" onChange={handleFileChange} accept="image/*" />
            {errors.profile_photo && <p className="text-red-500 text-sm">{errors.profile_photo}</p>}
          </div>

            
          <label htmlFor="">Additional Photos</label>
          {formData.images.map((_, index) => (
            <>
            <input
              key={index}
              type="file"
              name="images"
              onChange={(e) => handleFileChange(e, index)}
              accept="image/*"
            />
             <button type="button" onClick={() => removeAdditionalPictureField(index)}>Remove</button>
            </>
  
          ))}

          <button type="button" onClick={addAdditionalPictureField} className="w-full bg-gray-500 text-white p-2 rounded">
            Add Additional Image
          </button>

          <div>
            <input type="file" name="videos" onChange={()=>{handleFileChange(e,index)}} accept="video/*" />
            <p className="text-gray-300 text-sm">(Optional: Upload a videos)</p>
          </div>


        {/* Rates Section */}
        <h3 className="text-lg font-semibold">Rates (Hours & Price)</h3>
        {formData.rates.map((rate, index) => (
          <div key={index} className="flex space-x-2">
            <input type="number" placeholder="Hours" value={rate.hours} onChange={(e) => handleRateChange(index, "hours", e.target.value)} className="w-1/2 p-2 rounded bg-purple-800 border-2 border-purple-500"/>
            <input type="number" placeholder="Rate ($)" value={rate.rate} onChange={(e) => handleRateChange(index, "rate", e.target.value)} className="w-1/2 p-2 rounded bg-purple-800 border-2 border-purple-500"/>
            <button type="button" onClick={() => removeRateField(index)}>Remove</button>
          </div>
          
        ))}
        {errors.rates && <p className="text-red-500 text-sm">{errors.rates}</p>}
        <button type="button" onClick={addRateField} className="bg-purple-600 p-2 rounded-md">Add More Rates</button>

        {/* Services Section */}
        <h3 className="text-lg font-semibold mt-4">Select Services</h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
        {servicesList.map((service) => (
          <label key={service} className="text-[16px]">
            <input type="checkbox" checked={formData.services.includes(service)} onChange={() => handleServiceChange(service)} />
            {service}
          </label>
        ))}
          {errors.services && <p className="text-red-500 text-sm">{errors.services}</p>}
        </div>

        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
    <UniqueIdDialog openDailog={openDailog} closeOpenDailog={()=>setOpenDailog(false)} uniqueId={uniqueId}/>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
        <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: "100%" }}>
          Your application has been received. We will review it and contact you shortly.
        </Alert>
      </Snackbar>
    </>
  );
};

export default Apply;
