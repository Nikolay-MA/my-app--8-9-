// sfc
import H1 from "./H1/H1";
// import Button from 'react-bootstrap/Button';
// import  'bootstrap/dist/css/bootstrap.min.css' ;
import { Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom'
const Projects = () => {
    return (
        <>
            <div>
                <ol className="navbar">
                    <li className="container3">
                        <Link to={`H1`}>Проект № 1</Link>
                    </li>
                </ol>
            </div>
            <Routes>
                <Route path='H1' element={<H1 />}/>
            </Routes>
        </>
    );
}

export default Projects;




