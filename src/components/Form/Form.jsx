import React, { useState } from "react";
import S from "./Form.module.css";
import postal from "../../assets/postal.svg";
import logo from "../../assets/logo.svg";
import Aside from "../Aside/Aside";

const Form = () => {
  const [cep, setCep] = useState("");
  const [infos, setInfos] = useState("");

  function handleCep(e) {
    setCep(e.target.value);
  }

  const url = `https://viacep.com.br/ws/${cep}/json/`;

  async function handleReq(e) {
    e.preventDefault();
    const request = await fetch(url);
    const json = await request.json();
    setInfos(json);
  }

  console.log(infos);

  return (
    <div className={S.container}>
      <Aside
        cep={infos ? infos.cep : "Seu histórico está vazio..."}
        logradouro={infos ? infos.logradouro : ""}
        bairro={infos ? infos.bairro : ""}
        uf={infos ? infos.uf : ""}
        localidade={infos ? infos.localidade : ""}
        complemento={infos ? infos.complemento : ""}
      />
      <img src={postal} />
      <form className={S.form}>
        <img src={logo} />
        <label>Digite o seu Cep</label>
        <input
          type="text"
          value={cep}
          placeholder="ex: 01001-000"
          onChange={handleCep}
        ></input>
        <button className={S.btn} onClick={handleReq}>
          BUSCAR CEP
        </button>
      </form>
    </div>
  );
};

export default Form;
