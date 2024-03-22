import React, { useContext, useState } from "react";
import Botao from "@/components/Botao";
import ResumoCompra from "./ResumoCompra";
import { useNavigate } from "react-router-dom";
import { CarrinhoContext } from "../../context/CarrinhoContext";

const Sumario = () => {
  const navigate = useNavigate();
  const { valorTotal, quantidade } = useContext(CarrinhoContext);

  return (
    <div className="d-flex flex-column gap-3 sumario">
      <ResumoCompra
        valorTotalCarrinho={valorTotal}
        quantidadeProdutos={quantidade}
      />
      <div className="d-flex flex-column flex-md-row gap-2 mx-1 mx-lg-0 justify-content-between justify-content-md-evelyn">
        <Botao
          variant="tertiary"
          aria-label="Continuar comprando"
          onClick={() => navigate("/")}
        >
          Continuar comprando
        </Botao>
        <Botao
          variant="primary"
          className="border-0"
          aria-label="Finalizar compra"
        >
          Finalizar compra
        </Botao>
      </div>
    </div>
  );
};

export default Sumario;
