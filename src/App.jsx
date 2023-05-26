import { Route, Routes, useNavigate } from "react-router-dom";
// import { Route, Routes, useNavigate } from "./Reg/Reg";
import Projects from "./Projects/Projects";
// import Domd3 from "./Domd3/Domd3";
import NavBar from "./NavBar/NavBar";
import AboutMe from "./AboutMe/AboutMe";
import { useEffect, useState } from "react";
import Reg from "./Reg/Reg";
import { CookiesProvider } from 'react-cookie';
import { useCookies } from 'react-cookie';
import Me from "./Me/Me";
function App() {
  const [cookie, setCookie, removeCookie] = useCookies(['Name']);
  const [Name1, setName1] = useState({ Name2: cookie.Name })
  const Navigate = useNavigate()
  useEffect(() => {

    // setName1({ Name2: cookie.Name })
    if (Name1.Name2 === 'undefined' || Name1.Name2 === '' || Name1.Name2 === undefined) {
      // console.log(Name1.Name2);
      Navigate('/Reg')
      // console.log(cookie.Name);
    } else{
      Navigate('/Me')
    }
  }, [])
  return (
    <>
      {cookie.Name && <NavBar removeCookie={removeCookie} cookie={Name1.Name2} />}
      <Routes>
        <Route path="/">
          <Route path="AboutMe" element={<AboutMe/>} />
          <Route path="Projects/*" element={<Projects />} />
          <Route path="Me" element={<Me cookie={Name1.Name2}/>} />
          <Route path="Reg" element={<CookiesProvider><Reg cookie={cookie} Name1={Name1} setName1={setName1} setCookie={setCookie} /></CookiesProvider>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;