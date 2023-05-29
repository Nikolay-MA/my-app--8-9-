// sfc
//rfc
import logo from '../../img/img.png';
import './css1.css';
const AboutMe = () => {
  // const logo = require('../img/img.png');
  return (
    <>
      <h1>Обо мне</h1>
      <img src={logo} alt="ой" />
      {/* <img src={require('../img/img.png')} /> */}
    </>
  );
}

export default AboutMe;