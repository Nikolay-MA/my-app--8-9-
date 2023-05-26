import { useNavigate } from "react-router-dom";
import "./style.css";
import { useEffect } from "react";
const Reg = ({ cookie, Name1, setName1, setCookie }) => {
    const navigate = useNavigate()
    const loadhandler = (event) => {
        event.preventDefault();
        setCookie('Name', event.target[0].value, { path: '/' })
        // setName1({ Name2: cookie.Name })
        console.log(cookie.Name);
        console.log(Name1.Name2);
        if (Name1.Name2 != 'undefined' && Name1.Name2 != undefined) {
            navigate('/Me')
            console.log(1);
        } else {
            if (cookie.Name != 'undefined' && cookie.Name != undefined) {
                setName1({ Name2: cookie.Name })
                navigate('/Me')
                console.log(2);
            }
        }
    }
    useEffect(() => {
        setName1({ Name2: cookie.Name })
        console.log(3);
        console.log(cookie.Name)
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
                {/* <NameForm name={cookie.name} onChange={onChange} /> */}

            </form>

        </>
    );
}

export default Reg;