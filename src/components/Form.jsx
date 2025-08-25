import General from './General';
import Education from './Education';
import Experience from './Experience';
import Resume from './Resume';
import { useState } from 'react';
export default function Form() {
  const [generalData, setGenData]  = useState({
        fName:'',
        lName: '',
        email:'',
        phone:'',
      });
  const [edData, setEdData]  = useState([{
        school: '',
        degType: '',
        end:'',
      },]);
  const [exData, setExData]  = useState([{
        company: '',
        position: '',
        description: '',
        start: '',
        end: '',
      },]);
  return (
    <>
    <div className="space-y-8 p-4 m-4 flex flex-grid">
      <General data={generalData} setData={setGenData} />
      <Education data={edData} setData={setEdData}/>
      <Experience data={exData} setData={setExData}/>
    </div>
    <Resume generalData={generalData} edData={edData} exData={exData} />
  </>
  );
}