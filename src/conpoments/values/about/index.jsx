import React from "react";
import "./style.scss";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { ContactMail, Facebook, House, Instagram, LocalPhone, YouTube } from "@mui/icons-material";
import file from '../../../file';

export default function About() {
  return (
    <>
      <div className="container__myabout">
        <div className="content__myabout">
          <h2>My About</h2>

          <div className="my__piture">
            {/* <img
              src={file.my_avt}
              title=""
              alt="this pic profile when i upload to sever"
            /> */}
            <div className="content__mypicture">
              <p className="name">NGUYỄN VĂN AN</p>
              <p>
                <i>
                  Difficulty at work it not a stop, <br />
                  and it make you find new knowledge!!!
                </i>
              </p>
              <div className="link__myabout">
                <div className="line__">
                  <div>
                    <CalendarMonthIcon />
                  </div>
                  <div>01/02/2000</div>
                </div>
                {/*  */}
                <div className="line__">
                  <div>
                    <LocalPhone />
                  </div>
                  <div>(+84)764 647 696</div>
                </div>
                {/*  */}
                <div className="line__">
                  <div>
                    <ContactMail />
                  </div>
                  <div>antlt1108@gmail.com</div>
                </div>
                {/*  */}
                <div className="line__">
                  <div>
                    <House />
                  </div>
                  <div>Chau Thanh A - Hau Giang</div>
                </div>
                {/*  */}
                <div className="social__mypicture">
                  <a href="https://www.facebook.com/antlt11082000/" target="_blank">
                    <Facebook/>
                  </a>
                  <a href="https://www.instagram.com/m3o_me0/" target="_blank">
                    <Instagram/>
                  </a>
                  <a href="https://www.youtube.com/@anga_2k" target="_blank">
                    <YouTube/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
