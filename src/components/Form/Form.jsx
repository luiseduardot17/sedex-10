import React from 'react'
import S from './Form.module.css'
import image from '../../assets/image.svg'

const Form = () => {
  return (
    <div className={S.container}>
        <img src={image}/>
        <form className={S.form}>
        <label>Digite o seu Cep</label>
        <input type="text" placeholder='ex:18466-000'></input>
        <button>Busca cep</button>

    </form>
    </div>
    
  )
}

export default Form
