import { Route, Routes, useNavigate } from "react-router-dom";
import Projects from "./Conponents/Projects/Projects";
import NavBar from "./Conponents/NavBar/NavBar";
import AboutMe from "./Conponents/AboutMe/AboutMe";
import { useEffect } from "react";
import Reg from "./Conponents/Reg/Reg";
import { CookiesProvider } from 'react-cookie';
import { useCookies } from 'react-cookie';
import Me from "./Conponents/Me/Me";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [cookie, setCookie, removeCookie] = useCookies(['Name']);
  const Navigate = useNavigate()
  useEffect(() => {
    if (cookie.Name === 'undefined' || cookie.Name === '' || cookie.Name === undefined) {
      Navigate('/Reg')
    } else {
      Navigate('/Me')
    }
  }, [])
  useEffect(() => {
    if (cookie.Name != 'undefined' && cookie.Name != undefined && cookie.Name != '') {
      toast('🦄 Вы зарегистрированы!', {
        position: "bottom-right",
        autoClose: 15000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [cookie.Name])
  return (
    <>
      {cookie.Name && <NavBar removeCookie={removeCookie} cookie={cookie.Name} />}
      <Routes>
        <Route path="/">
          <Route path="AboutMe" element={<AboutMe />} />
          <Route path="Projects/*" element={<Projects />} />
          <Route path="Me" element={<Me cookie={cookie.Name} />} />
          <Route path="Reg" element={<CookiesProvider><Reg cookie={cookie} setCookie={setCookie} /></CookiesProvider>} />
        </Route>
      </Routes>
      < ToastContainer
        position="bottom-right"
        autoClose={15000}
        limit={10}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />

    </>
  );
}

export default App;