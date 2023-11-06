import './BoxAPMhis.css'
import Accordion from './Accordion'

function BoxAPMhis(){
    return(
        <div className='boxflex'>
            <div className='p'>
                Appointment history
                {/* <div className='addnew'>Add new</div> */}
            </div>
            <div className="boxAPM">
                {/*มาซ่อน scrollbar ด้วย  */}
                <p>
                <div className='section'>
                    <li className='d'>Date</li>
                    <li className='t'>Time</li>
                    <li className='pl'>Place</li>
                    <li className='s'>Status</li>                       
                </div>
                <div className='flex'>
                    <Accordion/>
                </div>
                </p>
                
                
            </div>
        </div>
        
    )
}

export default BoxAPMhis;