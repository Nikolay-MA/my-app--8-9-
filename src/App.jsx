import { Route, Routes, useNavigate } from "react-router-dom";
// import { Route, Routes, useNavigate } from "./Reg/Reg";
import Projects from "./Projects/Projects";
// import Domd3 from "./Domd3/Domd3";
import NavBar from "./NavBar/NavBar";
import AboutMe from "./AboutMe/AboutMe";
import { useEffect } from "react";
import Reg from "./Reg/Reg";
import { CookiesProvider } from 'react-cookie';
import { useCookies } from 'react-cookie';
import Me from "./Me/Me";
function App() {
  const [cookie, setCookie, removeCookie] = useCookies(['Name']);
  const Navigate = useNavigate()
  useEffect(() => {

    // setName1({ Name2: cookie.Name })
    if (cookie.Name === 'undefined' || cookie.Name === '' || cookie.Name === undefined) {
      // console.log(cookie.Name);
      Navigate('/Reg')
      // console.log(cookie.Name);
    } else{
      Navigate('/Me')
      console.log(1);
    }
  }, [])
  return (
    <>
      {cookie.Name && <NavBar removeCookie={removeCookie} cookie={cookie.Name} />}
      <Routes>
        <Route path="/">
          <Route path="AboutMe" element={<AboutMe/>} />
          <Route path="Projects/*" element={<Projects />} />
          <Route path="Me" element={<Me cookie={cookie.Name}/>} />
          <Route path="Reg" element={<CookiesProvider><Reg cookie={cookie} setCookie={setCookie} /></CookiesProvider>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;