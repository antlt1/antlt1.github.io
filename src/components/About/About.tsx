import React from 'react';
import AnImg from '~/assets/An.png';
import styles from './styles.module.scss'; // Ensure global styles are imported
// import classNames from 'classnames/bind'; // Use classNames for conditional styling
// import { Container } from './styles';
const namsinh = new Date().getFullYear() - 2000;
// const cx = classNames.bind(styles); // Bind styles for use in classNames
const About: React.FC = () => {
  return (
    <div className="container flex flex-col">
      <div className="item-1 flex flex-col items-center justify-center p-4">
        <h1 className='text-5xl font-bold color-blue-200'>Profile</h1>
        <span>
          I&apos;m a Developer about Website and Application
        </span>
      </div>
      <br /><hr className='border-t border-gray-200' /><br />
      <div className="item-2 flex flex-row items-center justify-between p-4">
        <div className="item-01 w-[3%] h-[60vh]"></div>
        <div className="item-1 w-[30%] h-[60vh]">
          <div className="details mb-4 p-2">
            <div className="flex flex-row justify-center items-center">
              <h2 className='font-bold text-xl'>Details</h2>
            </div>
            <br />
            <div className='title flex flex-row items-center'>
              <h2 className='first-title font-bold m-r-2'>Name: </h2>
              <span className='last-title' style={{ marginLeft: '5px' }}>Nguyen An</span><br />
            </div>
            <br />
            <div className='title flex flex-row items-center'>
              <h2 className='first-title font-bold m-r-2'>Age: </h2>
            <span className='last-title' style={{ marginLeft: '5px' }}>{namsinh}</span><br />
            </div>
            <br />
            <div className='title flex flex-row items-center'>
              <h2 className='first-title font-bold m-r-2'>Email: </h2>
            <span className='last-title' style={{ marginLeft: '5px' }}>antlt1108@gmail.com</span><br />
            </div>
            <br />
            <div className='title flex flex-row items-center'>
              <h2 className='first-title font-bold m-r-2'>Phone: </h2>
            <span className='last-title' style={{ marginLeft: '5px' }}>0764627696</span><br />
            </div>
            <br />
            <div className='title flex flex-row items-center'>
              <h2 className='first-title font-bold m-r-2'>Location: </h2>
            <span className='last-title' style={{ marginLeft: '5px' }}>Vietnam, Hau Giang</span><br />
            </div>
            <br />
          </div>
        </div>
        <div className="item-01 w-[3%] h-[60vh]"></div>
        <div className="item-2 w-[30%] h-[60vh]">
          <div className="about">
            <div className="flex flex-row justify-center items-center">
              <h3 className='font-bold text-xl'>
                About Me
              </h3>
            </div>
            <br />
            <span>
              {/* thục đầu dòng cho mỗi câu kiểu I'm thì .....I'm */}
              <ul>
                <li>I'm a developer with a passion for creating innovative solutions. I love coding and exploring new technologies.</li>
                <br />
                <li>I have experience in various programming languages and frameworks, and I'm always eager to learn more.</li>
              </ul>
              <br />
              In my free time, I enjoy contributing to open-source projects and collaborating with other developers.
            </span>
          </div>
        </div>
        <div className="item-01 w-[3%] h-[60vh]"></div>
        <div className={styles["item-3"] + " w-[30%] h-[60vh] flex flex-col items-center justify-center"}>
          <div className={styles["avt-intro"] + " flex flex-col items-center w-full"}>
            <div className="relative w-full flex flex-col items-center">
              <div className={styles["avatar-card"]}>
                <div className={styles["avatar-img"]}>
                  <img src={AnImg} alt="Avatar" />
                </div>
                <div className={styles["avatar-content"]}>
                  <h1>HELLO, I'M NGUYEN AN</h1>
                  <p>I am a versatile developer who can approach projects from concept to implementation.</p>
                  <div className={styles["avatar-social"]}>
                    <a href="https://www.facebook.com/nguyenan" target="_blank" rel="noopener noreferrer">
                      <svg width="24" height="24" fill="#fff" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0z" /></svg>
                    </a>
                    <a href="https://github.com/antlt1" target="_blank" rel="noopener noreferrer">
                      <svg width="24" height="24" fill="#fff" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" /></svg>
                    </a>
                    <a href="mailto:antlt1108@gmail.com.com">
                      <svg width="24" height="24" fill="#fff" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20v-9.99l7.99 7.99c.39.39 1.02.39 1.41 0L20 10.01V20H4z" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;