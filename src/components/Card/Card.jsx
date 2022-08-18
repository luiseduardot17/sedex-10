import React from "react";

const Card = ({ cep, logradouro, complemento, bairro, localidade, uf }) => {
  return (
    <div>
      <p>{cep}</p>
      <p>{logradouro}</p>
      <p>{complemento}</p>
      <p>{bairro}</p>
      <p>{localidade}</p>
      <p>{uf}</p>
    </div>
  );
};

export default Card;
