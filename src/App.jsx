import { Route, Routes, useNavigate } from "react-router-dom";
import Projects from "./Projects/Projects";
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

    if (cookie.Name === 'undefined' || cookie.Name === '' || cookie.Name === undefined) {
      Navigate('/Reg')
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