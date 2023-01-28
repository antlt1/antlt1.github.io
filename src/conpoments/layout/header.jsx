import React from 'react'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
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
              <ul>
                <li>
                  {/* <a href="#" onClick={ondiss}>Thuê Code</a> */}
                </li>
                <li>
                  {/* .... */}
                </li>
              </ul>
            </div>
          </li>
        </div>
      </div>
    </>
  )
}
