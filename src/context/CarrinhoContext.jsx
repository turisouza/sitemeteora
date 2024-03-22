import React, {
  createContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import { carrinhoReducer } from "../reducers/carrinhoReducer";

export const CarrinhoContext = createContext();
CarrinhoContext.displayName = "Carrinho";

const estadoInicial = [];

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, dispatch] = useReducer(carrinhoReducer, estadoInicial);
  const [quantidade, setQuantidade] = useState(0);
  const [valorTotal, setValorTotal] = useState(0);

  // REDUCE TRansforma a quantidade de itens de um array em um único valor
  //Deve receber uma função redutora
  //Estav avai trabalhar com um acumulador e um item (produto)
  const { totalTemp, quantidadeTemp } = useMemo(() => {
    return carrinho.reduce(
      (acumulador, produto) => ({
        quantidadeTemp: acumulador.quantidadeTemp + produto.quantidade,
        totalTemp: acumulador.totalTemp + produto.preco * produto.quantidade,
      }),
      {
        quantidadeTemp: 0,
        totalTemp: 0,
      }
      //Acima foi o segundo elemento da função redux, que são os valores iniciais
      //dentro de um objeto
    );
  }, [carrinho]);

  useEffect(() => {
    setQuantidade(quantidadeTemp);
    setValorTotal(totalTemp);
  });
  //No array final (array de dependencias, informamos a depencia que será observada)

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        dispatch,
        quantidade,
        valorTotal,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};
