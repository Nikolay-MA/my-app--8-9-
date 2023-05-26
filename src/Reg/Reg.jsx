import { useNavigate } from "react-router-dom";
import "./style.css";
import { useEffect } from "react";
const Reg = ({ cookie,  setCookie }) => {
    const navigate = useNavigate()
    const loadhandler = (event) => {
        event.preventDefault();
        setCookie('Name', event.target[0].value, { path: '/' })
    }
    useEffect(() => {
        console.log(cookie.Name);
        if (cookie.Name != 'undefined' && cookie.Name != undefined && cookie.Name != '') {
            navigate('/Me')
        }
    }, [cookie.Name])
    return (
        <>
            <form onSubmit={loadhandler}>
                <h1>Введите ваше имя</h1>
                <div className="form-blok">
                    <label htmlFor="name" className="my-lable">Ваше имя</label>
                    <input type="text" className="my-input" id="name" placeholder="Иван" />
                </div>
                <div className="form-blok">
                    <button type="reset" className="btn">Очистить</button>
                    <button className="btn">Регистрация</button>
                </div>
            </form>

        </>
    );
}

export default Reg;