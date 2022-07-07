import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../models/ContactoClass'

const ComponenteB = ({contacto}) => {
  return (
    <div>
    <h2>
        nombre: {contacto.nombre}
    </h2>
    <h2>
        apellido: {contacto.apellido}
    </h2>
    <h2>
        email: {contacto.email}
    </h2>
    <h2>
        contacto: {contacto.conectado ? 'En Linea' : "No disponible"}
    </h2>
    </div>
  )
}

ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
}

export default ComponenteB
