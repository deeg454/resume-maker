

export default function Experience({data,setData}) {
  const handleChange = (index,e) =>{
    const updated = [ ...data];
    updated[index][e.target.name] = e.target.value;
    setData(updated);

  };

  const addExperience = () =>{
    setData([...data, { company: '', position: '',description: '', start: '', end: '' }]);
  };
  const removeExperience = (index) =>{
      if(data.length > 1){
      const updated = data.filter((ex,i) => i !== index);
      setData(updated);
      }
  };
  return (
    <>
       <fieldset className="border border-gray-300 rounded-md p-6 max-w-4xl mx-auto mb-8">
      <legend className="text-xl font-semibold mb-6 text-gray-800">Experience</legend>

      {data.map((exp, index) => (
        <div key={index} className="mb-6 border-b border-gray-200 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-1 font-semibold text-gray-700">Company</label>
              <input
                name="company"
                value={exp.company}
                onChange={(e) => handleChange(index, e)}
                placeholder="e.g., Google"
                className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-700">Position</label>
              <input
                name="position"
                value={exp.position}
                onChange={(e) => handleChange(index, e)}
                placeholder="e.g., Software Engineer"
                className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-700">Position</label>
              <input
                name="description"
                type="textarea"
                value={exp.description}
                onChange={(e) => handleChange(index, e)}
                placeholder="e.g., Software Engineer"
                className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-700">Start Date</label>
              <input
                name="start"
                type="date"
                value={exp.start}
                onChange={(e) => handleChange(index, e)}
                className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold text-gray-700">End Date</label>
              <input
                name="end"
                type="date"
                value={exp.end}
                onChange={(e) => handleChange(index, e)}
                className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <button
            type="button"
            onClick={() => removeExperience(index)}
            className="mt-4 px-4 py-2 bg-red-700 text-white rounded hover:bg-red-700 transition"
          >
            Remove Experience
          </button>
          <button
            type="button"
            onClick={addExperience}
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