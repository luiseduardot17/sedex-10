import React from "react";
import S from "./Aside.module.css";

const Aside = ({ cep, logradouro, complemento, bairro, localidade, uf }) => {
  return (
    <aside className={S.aside}>
      <h2 className={S.titulo}>Histórico</h2>
      <div className={S.card}>
        <p>{cep}</p>
        <p>{logradouro}</p>
        <p>{complemento}</p>
        <p>{bairro}</p>
        <p>{localidade}</p>
        <p>{uf}</p>
      </div>
    </aside>
  );
};

export default Aside;
