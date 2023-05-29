
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import lightOn from '../../../../img/icons8-включить-свет.png'
import garageOn from '../../../../img/icons8-гараж-открыт.png'
export default function ToolsCard({ el, setTools, tools, lightOff, garageOff }) {
    const click1 = () => {
        const temp = tools.filter((ell) => el.id !== ell.id)
        const obJ = {
            id: el.id,
            name: el.name,
            img: el.name === 'Лампочка' ? (el.state ? lightOff : lightOn) : (el.state ? garageOff : garageOn),
            state: !el.state,
        }
        temp.push(obJ)
        temp.sort((a, b) => a.id - b.id)
        setTools(temp)
    }
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img style={{ width: "200px" }} variant="top" src={el.img} />
                <Card.Body>
                    <Card.Title>{el.name}</Card.Title>
                    <Card.Text>
                        чтобы изменить сщстояние нажмите кнопку
                    </Card.Text>
                    <Button onClick={click1} variant="primary">Вкл</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

