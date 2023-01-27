import React from 'react'
import Header from './header';
import Footer from './footer';
import './style.scss';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import myValue from '../router';

export default function Layout() {
  return (
    <>
        <Header/>
        <div className='conpoments'>
        
        <div className='category'>
            <br /><br />
            <div className="in4">
                
                    <li>
                        <h3 className='myjob'>
                            BACK-END WEB  DEVELOPER & SOFTDEVELOPR
                        </h3>
                        <h2 className='name'>I'm <br />
                        Nguyen Van An</h2>
                        <div className="btn">
                            <a target="_blank" href="https://github.com/antlt1">More about me →</a>
                        </div>
                    </li>
            </div>
        <Footer/>
        </div>
        <div className='content'>
            <br /><br />
            <div className="value">
            {
                myValue.map((value,number)=>(
                    <h1>{value.name}</h1>
                    
                ))
            }
            </div>
        </div>
    </div>
   </>
  )
}
