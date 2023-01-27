import React from "react";
import "./style.scss";

export default function MySkill() {
  return (
    <>
      <div className="container__myskill">
        <h2>
          <b>My Project</b>
        </h2>
        <div class="timeline">
          <div class="container left">
            <div class="content">
              <h2>Base 1 - 03/2021 - 05/2021</h2>
              <p>
                Website News <br />
                - Language: PHP. <br />
                - Database: MYSQL Sever. <br />
                - Framework: Jquery. <br />
                Postion Website: <br />- Website using framework jquery then lib
                ajax realtime login and sign up, Gueat can finding and coment a
                news and rate website. website have function control coment
                gueat spame message.
              </p>
            </div>
          </div>
          <div class="container right">
            <div class="content">
              <h2>Base 2 - 09/2021 - 01/2022</h2>
              <p>
                Application Lirary <br />
                - Language: C#. <br />
                - Database: SQLite, MYSQL Sever. <br />
                - Framework: DevExpress. <br />
                Postion Website: <br />- Ứng dụng quản lý thư viện tư nhân bao
                gồm mượn trả sách tính phí theo ngày quá hạn sẽ có thông báo
                phạt, có chức năng bạn đọc thân thiện cách tính bạn đọc thân
                thiện mỗi lần bạn đọc vào thư viện đọc hoặc mượn khi vào quầy
                quét thẻ bạn đọc sẽ điểm danh tích lũy điểm hoặc mượn sách.
              </p>
            </div>
          </div>
          <div class="container left">
            <div class="content">
              <h2>Internship project - 05/2022 - 06/2022</h2>
              <p>
                Website & Application Quản lý thư viện tư nhân <br /> 
                - Language: PHP, C#.  
                - Database: Mysql. 
                - Framework: Jquery, Masterial Designer. <br /> 
                - Internship company: TNHH Công Nghệ Phần Mềm PhúcLam Phương. <br /> 
                Postion Website: <br />
                - Có thông qua công ty về đồ án 2
                nâng cấp app desktop kèm website truy cập vào thư viện, áp dụng
                WPF thay vì windows form kèm mô hình 3 lớp đối với website sử
                dụng MVC php thuần, các chức năng bao gồm website giúp bạn đọc
                tìm kiếm, đăng nhập đặt sách trực tuyến không cần đến thư viện
                tìm từng kệ khi đặt thành công chỉ cần đến quầy duyệt sách cần
                mượn, đối với app WPF nâng cấp từ đồ án 2 design giao diện bằng
                framework Masteria Desiger.
              </p>
            </div>
          </div>
          <div class="container right">
            <div class="content">
              <h2>2022 - NOW</h2>
              <p>This code for Guest and project privated.</p>
            </div>
          </div>
        </div>
      </div><br /><br />
    </>
  );
}
