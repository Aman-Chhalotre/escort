import React, { useState } from "react";
import { AxiosFetch } from "../../apiCall/ApiCall";

function CheckStatus() {
  const [uniqueId, setUniqueId] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState({});

  const handleStatusSubmit = async (e) => {
    e.preventDefault();
    const response = await AxiosFetch(`/api/escorts/status/${uniqueId}`);
    console.log(response);
    setSuccessMessage(response.data);
  };

  return (
    <>
      <div className="min-h-[60vh] flex items-center justify-center ">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold text-center mb-4">Check Status</h2>
          <form onSubmit={handleStatusSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Enter your Unique Id
              </label>
              <input
                type="text"
                name="uniqueId"
                value={uniqueId}
                onChange={(e) => setUniqueId(e.target.value)}
                className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Unique Id..."
              />
            </div>
            {errorMessage && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
            >
              Check
            </button>
          </form>


          {Object.keys(successMessage).length > 0 && <div className="max-w-md mx-auto bg-[#300354] text-white p-6 rounded-2xl shadow-lg mt-10">
            <div className="flex items-center space-x-4">
              <img
                src={successMessage.profile_photo || "/default-avatar.png"}
                alt="Profile"
                className="w-20 h-20 rounded-full border-2 border-purple-400 object-cover"
              />
              <div>
                <h2 className="text-xl font-semibold">{successMessage.name}</h2>
                <p className="text-sm text-gray-300">{successMessage.bio}</p>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <p>
                Unique ID: <strong> {successMessage.uniqueId}</strong>
              </p>
              <p>
                Location:<strong> {successMessage.location}</strong> 
              </p>
              <p>
                Contact: <strong> {successMessage.contact_number}</strong> 
              </p>
              <p>
                Status:<strong> {successMessage.status || "Pending"}</strong> 
              </p>
            </div>
          </div>}
        </div>
      </div>
    </>
  );
}

export default CheckStatus;
