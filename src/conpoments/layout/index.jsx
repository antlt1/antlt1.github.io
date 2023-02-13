import React from "react";
import Header from "./header";
import Footer from "./footer";
import "./style.scss";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { myValue } from "../router";
import Contact from "../values/contact";

export default function Layout() {
  
  return (
    <>
      <Header />
      <div className="conpoments">
        <div className="category">
          <br />
          <br />
          <div className="in4">
            <li>
              <h3 className="myjob">BACK-END WEB DEVELOPER & SOFTDEVELOPR</h3>
              <h2 className="name">
                I'm <br />
                Nguyen Van An
              </h2>
              {/* <p>Code đang trong quá trình hoàn thành thời gian comnit: 27/02/2023</p> */}
              <div className="btn">
                <a target="_blank" href="https://github.com/antlt1">
                  More about me →
                </a>
              </div>
            </li>
          </div>
          <Footer />
        </div>
        <div className="content">
          <br />
          <br />
          <div className="value">
            {myValue.map((page, number) => {
              const Page = page.value;
              if (page.name != null) {
                return <Page key={number} />;
              }
              console.log(page.name);
            })}
          </div>
        </div>
      </div>
      <div id="myModal" class="modal__">

  {/* <!-- Modal content --> */}
  <div class="modal-content">
    <span class="close">&times;</span>
    <p>Some text in the Modal..</p>
  </div>

</div>
    </>
  );
}
