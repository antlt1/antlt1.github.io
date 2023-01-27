import React from 'react'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
export default function Header() {
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
            <a href="#">
              <DensityMediumIcon/>
            </a>
            <div className='subMenu'>
             
            </div>
          </li>
        </div>
      </div>
    </>
  )
}
