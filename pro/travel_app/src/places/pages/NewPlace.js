import React from 'react'
import "./NewPlace.css"
import Input from '../../shared/FormElements/Input'

const NewPlace=(props)=> {
  return (
   <>
        <form className='place-form'>
         <Input element="input" type="text" label="Title" />

        </form>
   </>
  )
}

export default NewPlace