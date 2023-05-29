import { useState } from "react"
import ToolsCard from "./ToolsCard/ToolsCard";
import lightOff from '../../../img/icons8-круглая-лампа.png'
import garageOff from '../../../img/icons8-гараж-закрыт.png'
import AddFrom from "./AddFrom/AddFrom";
import Button from 'react-bootstrap/Button';
import './Flix.css';
//rfc
export default function H1() {
  const [tools, setTools] = useState([
    { id: 1, name: 'Лампочка', img: lightOff, state: false },
    { id: 2, name: 'Гараж', img: garageOff, state: false },
  ]
  )
  const [add, setAdd] = useState(false)
  const regHandler = () => {
    setAdd(true)
  }
  return (
    <div>
      {add ? null : <Button onClick={regHandler} variant='light'>Добавить</Button>}
      {add ? <AddFrom setAdd={setAdd} setTools={setTools} tools={tools} lightOff={lightOff} garageOff={garageOff}/> : <div className="Flix">
        {tools.map((el) => {
          return <ToolsCard el={el} key={el.id} setTools={setTools} tools={tools} garageOff={garageOff} lightOff={lightOff} />
        })}
      </div>}
    </div>
  )
}
