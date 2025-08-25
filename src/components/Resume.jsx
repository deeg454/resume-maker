export default function Resume({ generalData, edData, exData }) {
  return (
    <div className="max-w-3xl mx-auto mt-8 p-8 bg-white shadow-lg rounded-lg font-serif text-gray-900">
      <h1 className="text-4xl font-bold border-b-2 border-gray-700 pb-2 mb-6">
        {generalData.fName || 'First'} {generalData.lName || 'Last'}
      </h1>
      
      <p className="text-lg mb-1">
        <span className="font-semibold">Email:</span> {generalData.email || 'you@example.com'}
      </p>
      <p className="text-lg mb-6">
        <span className="font-semibold">Phone:</span> {generalData.phone || '(123) 456-7890'}
      </p>

      <section>
        <h2 className="text-2xl font-semibold border-b border-gray-400 pb-1 mb-4">
          Education
        </h2>
        {edData.map((edu, idx) => (
          <div key={idx} className="flex justify-between mb-4">
            <div className="font-semibold">{edu.school || 'School Name'}</div>
            <div className="text-gray-600">{edu.end || 'Year'}</div>
          </div>
        ))}
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold border-b border-gray-400 pb-1 mb-4">
          Experience
        </h2>
        {exData.map((exp, idx) => (
          <div key={idx} className="mb-6">
            <div className="flex flew-row justify-between">
            <div className="font-semibold">
              {exp.position || 'Position'} at {exp.company || 'Company'}
            </div>
            <div className="italic text-gray-600">
              {exp.start || 'Start Date'} - {exp.end || 'End Date'}
            </div>
            </div>
            <div className="">
              {exp.description || 'Description'} 
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}