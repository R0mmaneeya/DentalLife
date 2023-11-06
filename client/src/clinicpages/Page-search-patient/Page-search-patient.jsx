import React,{useState} from 'react';
import './App.css';
import Boxpatient from './Boxpatient.js';
import dataPatients from './dataPatients.js';
import Null from './Null.js';
import Tabbarclinic from './Tabbarclinic.js';
import Buttonchange from './Buttonchange.js';



function App() {
  const [searchText, setSearchText] = useState('');

  const filterpatient = dataPatients.filter((dataPatient) => {
    return dataPatient.dataname.includes(searchText)
  });
  
  // เอาข้อมูลอาเรย์มาใช้ สามารถแยกใส่ข้อมูลjsได้เลย
  const dataPatientsElements = filterpatient.map((dataPatient,index) => {
    return <Boxpatient key={index} dataPatient={dataPatient}/>
  });

  return (
    <>
      <Tabbarclinic/>
      <Buttonchange/>
    
      <center>
      <div className='app-search'>
        <input
          className="app-search-input"
          type="text"
          placeholder="    search patient"
          value = {searchText}
          onChange={(event) => {setSearchText(event.target.value)}}
        />
        <img className='imgsearch' src='imagp\searchyellow.png'/>
        <button style={{ cursor: 'pointer' }}><img className='imgsearch'src='imagdentis\image 7.png'/></button>{/*ปุ่มกรอง*/ }
      </div>
      </center>
      
      <div className='app-grid'>
        {dataPatientsElements} {/*เรียกใช้ข้อมูลจากอาเรย์*/}
        <Null/>
      </div>

      

    </>
  );
}

export default App;
