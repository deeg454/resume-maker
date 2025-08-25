export default function Education({data,setData}) {
  const handleChange = (index,e) =>{
    const update = [...data];
    update[index][e.target.name] = e.target.value;
    setData(update);
  };
  const addEducation = () =>{
    setData([...data,{company: '', position: '',start: '', end: '',}]);
  };

  const removeEducation = (index) =>{
    if(data.length > 1){
      const updated = data.filter((ed,i)=> i !== index);
      setData(updated);
    }
  };
return (
  <>
    <fieldset className="border border-gray-300 rounded-md p-6 max-w-4xl mx-auto mb-8">
      <legend className="text-xl font-semibold mb-6 text-gray-800">Education</legend>

      {data.map((ed, index) => (
        <div key={index} className="mb-6 border-b border-gray-200 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-1 font-semibold text-gray-700">
                Institution Name
              </label>
              <input
                name="school"
                value={ed.school}
                onChange={(e) => handleChange(index, e)}
                placeholder="e.g., University of XYZ"
                className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-700">
                Degree
              </label>
              <input
                name="degType"
                value={ed.degType}
                onChange={(e) => handleChange(index, e)}
                placeholder="e.g., Bachelor of Science"
                className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-700">
                Graduation Date
              </label>
              <input
                name="end"
                type="number"
                value={ed.end}
                onChange={(e) => handleChange(index, e)}
                placeholder="2024"
                className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => removeEducation(index)}
              className="mt-4 px-4 py-2 bg-red-700 text-white rounded hover:bg-red-800 transition"
            >
              Remove Experience
            </button>
            <button
              type="button"
              onClick={addEducation}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Add Experience
            </button>
          </div>
        </div>
      ))}
    </fieldset>
  </>
);

}