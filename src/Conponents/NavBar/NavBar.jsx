import { Link, useNavigate } from 'react-router-dom'
import './std.css'
export default function NavBar({ removeCookie, cookie }) {
    const Navigate = useNavigate()
    const onCeng1 = () => {
        removeCookie('Name', { path: '/' })
        Navigate('/Reg')
    }
    return (
        <div>
            <ol className="navbar">
                {/* <li className="container2">
                    <Link to={'/'}>Home</Link>
                </li> */}
                <li className="container2">
                    <Link to={`/AboutMe`}>Обо мне</Link>
                </li>
                <li className="container2">
                    <Link to={'/Projects'}>Проекты</Link>
                </li>
                <li className="container2">
                    <Link to={'/Me'}>{cookie}</Link>
                </li>
                <li className="container2">
                    <button onClick={onCeng1}>Выйи из аккаунта</button>
                </li>
            </ol>
        </div>
    )
}