import React from 'react'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import file from '../../file';
import { Link } from 'react-router-dom';
export default function Header() {
  
  function ondiss(){
    var modal = document.getElementsByClassName("modal__");
    if(modal.style.display == 'none'){
      modal.style.display = 'block';
    }else{
      modal.style.display = 'none';
    }
    console.log('az');
  }
  return (
    <>
      <div className="fixedHeader">
        <div className="navHeader">
          <li>
            <h1>
              NVA..
            </h1>
          </li>
          <li>
              
          </li>
          <li className='tabMenu'>
            {/* <a href="#">
              <DensityMediumIcon/>
            </a> */}
            <div className='subMenu'>
                <li>
                  <a href={file.my_cv} key='cc' >Download MyCV</a>
                </li>
                <li>|</li>
                <li>                
                  <Link to='/thuecode'>ThueCode</Link>
                </li>
            </div>
          </li>
        </div>
      </div>
    </>
  )
}
