import { useContext, useState } from "react"
import { GlobalContext } from "../../context/GlobalContext"

/**
 * Form pedir nombre y precio. al añadir meter en estado y mostrar la lista
 */
function Services() {
    const {addNewService, state} = useContext(GlobalContext)
    const [newService, setService] = useState(null)

    const handleChange = (ev) =>{
        setService({
            ...newService,
            [ev.target.id]: ev.target.value
        })
    }
    const handleClick = (ev) =>{
        ev.preventDefault()
        addNewService(newService)
    }
  return (
    <>
        <form onSubmit={handleClick}>
            <label htmlFor="name">Nombre: </label>
            <input type="text" id="name" onChange={handleChange}/>
            <label htmlFor="price">Precio: </label>
            <input type="number" id="price" onChange={handleChange} />
            <input type="submit" value="Enviar" />
        </form>
        {state.services.map(item=><p>{item.name} - {item.price} </p>)}
    </>
  )
}

export default Services