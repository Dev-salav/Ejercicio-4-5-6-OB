import React from 'react'
import { Contacto } from '../../models/ContactoClass'
import ComponenteB from '../pure/ComponenteB'

const ComponenteA = () => {

  const david = new Contacto('David', 'Salazar', 'de.salav@gmail.com', true)

  return (
    <div><ComponenteB contacto={david}></ComponenteB></div>
  )
}


export default ComponenteA
