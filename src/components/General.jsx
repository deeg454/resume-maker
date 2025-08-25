
export default function General({data,setData}) {
  const handleChange = (e) => {
    setData({...data,[e.target.name]:e.target.value});
  };

 return (
<fieldset className="border border-gray-300 rounded-md p-6 max-w-4xl mx-auto mb-8">
  <legend className="text-xl font-semibold mb-6 text-gray-800">General Information</legend>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* First Name */}
    <div>
      <label className="block mb-2 font-semibold text-gray-700">First Name:</label>
      <input
        type="text"
        name="fName"
        value={data.fName}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="e.g., Chris"
      />
    </div>
    {/* Last Name */}
    <div>
      <label className="block mb-2 font-semibold text-gray-700">Last Name:</label>
      <input
        type="text"
        name="lName"
        value={data.lName}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="e.g., Smith"
      />
    </div>
    {/* Email */}
    <div>
      <label className="block mb-2 font-semibold text-gray-700">Email:</label>
      <input
        type="email"
        name="email"
        value={data.email}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="e.g., chris@example.com"
      />
    </div>
    {/* Phone */}
    <div className="md:col-span-1">
      <label className="block mb-2 font-semibold text-gray-700">Phone:</label>
      <input
        type="tel"
        name="phone"
        value={data.phone}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="e.g., 123-456-7890"
      />
    </div>
  </div>
</fieldset>
  );
}
