import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AxiosAdminPost } from "../../apiCall/ApiCall";

const ApplicationDetails = () => {
  const location = useLocation();
  const data = location.state || {}; // Get submitted data
  const [previewImage, setPreviewImage] = useState(null);
  const navigate = useNavigate()

  const handleApproveClick = (id, status) => {
    const response = AxiosAdminPost(`/api/escorts/${id}/status`, {status})
    if(response.data){
      alert("application approved")
      navigate("/admin")
    }
  }

  return (
    <div className="max-w-3xl mx-auto bg-[#571D89] p-6 rounded-lg shadow-lg">
      {/* Profile Picture */}
      <div className="flex justify-center">
        <img
          src={data.profile_photo || "/default-profile.jpg"} // Fallback image
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border border-pink-400"
          onClick={() => setPreviewImage(data.profile_photo)}
        />
      </div>

      {/* Personal Details */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div>
          <label className="block text-gray-200 font-semibold">
            Name
          </label>
          <p className="bg-gray-100 p-2 rounded-md">{data.name}</p>
        </div>
        <div className="flex sm:flex-row flex-col justify-between">
          <div>
            <label className="block text-gray-200 font-semibold">Age</label>
            <p className="bg-gray-100 p-2 rounded-md">{data.age}</p>
          </div>
          <div>
            <label className="block text-gray-200 font-semibold">Height</label>
            <p className="bg-gray-100 p-2 rounded-md">{data.height}</p>
          </div>
          <div>
            <label className="block text-gray-200 font-semibold">Weight</label>
            <p className="bg-gray-100 p-2 rounded-md">{data.weight}</p>
          </div>
          <div>
            <label className="block text-gray-200 font-semibold">Chest</label>
            <p className="bg-gray-100 p-2 rounded-md">{data.chest}</p>
          </div>
        </div>
        <div>
          <label className="block text-gray-200 font-semibold">
            Phone Number
          </label>
          <p className="bg-gray-100 p-2 rounded-md">{data.contact_number}</p>
        </div>
        <div>
          <label className="block text-gray-200 font-semibold">WhatsApp</label>
          <p className="bg-gray-100 p-2 rounded-md">{data.whatsapp_number}</p>
        </div>
        <div>
          <label className="block text-gray-200 font-semibold">Address</label>
          <p className="bg-gray-100 p-2 rounded-md">{data.location}</p>
        </div>
        <div className="col-span-2">
          <label className="block text-gray-200 font-semibold">Bio</label>
          <p className="bg-gray-100 p-2 rounded-md">{data.bio}</p>
        </div>
      </div>

      {/* Default Delivery Location Images */}
      <div className="mt-6">
        <h2 className="text-lg text-gray-200 font-semibold">Additional Images</h2>
        <div className="flex gap-4 mt-2">
          {data.images?.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`image ${index+1}`}
              className="w-24 h-24 rounded-md cursor-pointer border"
              onClick={() => setPreviewImage(img)}
            />
          ))} 
        </div>
      </div>

      {/* Image Preview Modal */}
      {previewImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
          <div className="bg-white p-4 rounded-lg">
            <img src={previewImage} alt="Preview" className="w-96 h-96" />
            <button
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
              onClick={() => setPreviewImage(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Approve / Reject Buttons */}
      <div className="mt-6 flex gap-4">
        <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={()=>{handleApproveClick(data._id, "approved")}}>
          Approve
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={()=>{handleApproveClick(data._id, "rejected")}}>
          Reject
        </button>
      </div>
    </div>
  );
};

export default ApplicationDetails;
