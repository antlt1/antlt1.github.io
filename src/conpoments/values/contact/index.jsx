import React from "react";
import "./style.scss";

export default function Contact() {
  return (
    <div className="container__mycontact">
      <h2>Myself</h2>
      <div>
        inappropriate behavior is often laughed off as
        <br />
        “boys will be boys,” women face higher conduct standards <br />
        especially in the workplace. That’s why it’s crucial that, as women,
        <br />
        our behavior on the job is beyond reproach. inappropriate behavior is
        <br />
        often laughed.
      </div>
      <div className="line__skill">
        <p>DEV Language</p>
        <div className="skill">
          <p>PHP</p>
          <div className="point">
            <div className="rate_8">
              <p>80%</p>
            </div>
          </div>
        </div>
        <div className="skill">
          <p>C Sharp</p>
          <div className="point">
            <div className="rate_7">
              <p>70%</p>
            </div>
          </div>
        </div>
        <div className="skill">
          <p>Java</p>
          <div className="point">
          <div className="rate_5">
              <p>50%</p>
            </div>
          </div>
        </div>
        <div className="skill">
          <p>Python</p>
          <div className="point">
          <div className="rate_5">
              <p>50%</p>
            </div>
          </div>
        </div><br />
        <p><b className="f-w">Framework</b></p>
        <div className="skill">
          <p>WF Masterial Designer</p>
          <div className="point">
          <div className="rate_7">
              <p>70%</p>
            </div>
          </div>
          <p>ReactJS</p>
          <div className="point">
          <div className="rate_6">
              <p>60%</p>
            </div>
          </div>
          <p>Laravel</p>
          <div className="point">
          <div className="rate_5">
              <p>50%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
