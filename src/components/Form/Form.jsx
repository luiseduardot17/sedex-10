import React, { useState } from 'react'
import S from './Form.module.css'
import image from '../../assets/image.svg'

const Form = () => {

  const [cep, setCep] = useState('')
  const [infos, setInfos] = useState('')

  function handleCep(e) {
      setCep(e.target.value)
  }

  const url = `https://viacep.com.br/ws/${cep}/json/`

  async function handleReq(e) {
    e.preventDefault()
    const request = await fetch(url)
    const json = await request.json()
    setInfos(json)
    console.log(json);
  }

  return (    

    <div className={S.container}>
        <img src={image}/>
        <form className={S.form}>
        <label>Digite o seu Cep</label>
        <input type="text" value={cep} placeholder='ex:18466-000' onChange={handleCep}></input>
        <button onClick={handleReq}>Busca cep</button>

    </form>
    </div>
    
  )
}

export default Form
