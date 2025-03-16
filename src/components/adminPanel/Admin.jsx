import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useEscort from "../../context/useEscortContext";
import { AxiosAdminFetch } from "../../apiCall/ApiCall";

const Admin = () => {
  const [applications, setApplications] = useState([]);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const {escorts} = useEscort();

  useEffect(()=>{
    fetchData();
        async function fetchData() {
          const data = await AxiosAdminFetch('/api/escorts/all');
          if(data){
            setApplications(data.escorts)
            console.log(data.escorts)
          }
          
      }
  },[escorts])

  const handleApprove = (id) => {
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: "approved" } : app))
    );
  };

  const handleReject = (id) => {
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: "rejected" } : app))
    );
  };

  const handleDelete = (id) => {
    setApplications((prev) => prev.filter((app) => app.id !== id));
  };

  const filteredApplications = applications.filter((app) => {
    return (
      (search === "" || app.name.toLowerCase().includes(search.toLowerCase())) &&
      (filterStatus === "" || app.status === filterStatus)
    );
  });

  return (
    <div className="max-w-5xl mx-auto p-6 bg-[#571D89] shadow-md rounded-md my-10  overflow-x-scroll">
      <h2 className="text-xl font-semibold mb-4 text-gray-200">Admin Panel</h2>
      
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          className="p-2 border rounded w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="p-2 border rounded"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>
      
      <table className="w-full min-w-[500px] border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Name</th>
            <th className="border p-2">Location</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredApplications.map((app) => (
            <tr key={app.id} className="text-end ">
              <td className=" p-2 flex items-center gap-5 min-w-[50px] text-white"><img src={app.profile_photo} className="h-24 w-20"/>{app.name}</td>
              <td className=" p-2 text-white">{app.location}</td>
              <td className={` p-2 capitalize ${app.status == "pending"&&"text-amber-400"} ${app.status =="approved"&&"text-green-500"} ${app.status=="rejected"&&"text-red-500"}`}>{app.status}</td>
              <td className=" p-2 w-52 space-x-2">
                {app.status === "pending" && (
                  <>
                    {/* <button
                      className="bg-green-500 text-white px-2 py-1 rounded"
                      onClick={() => handleApprove(app.id)}
                    >
                      Approve
                    </button> */}
                    {/* <button
                      className="bg-red-500 text-white px-2 py-1 rounded"
                      onClick={() => handleReject(app.id)}
                    >
                      Reject
                    </button> */}
                  </>
                )}
                <button
                  className="bg-gray-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(app.id)}
                >
                  Delete
                </button>
                <NavLink
                  to={'/applicationDetails'}
                  state={{
                    ...app
                  }}
                  className="bg-gray-500 text-white px-2 py-1 rounded"
                >
                  View
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
