import React from "react";
import { useParams } from "react-router-dom";
import Produto from "../components/Produto/Produto";
import Carrossel from "../components/Carrossel/Carrossel";

export default function ProductPage() {
  const { id } = useParams();

  return (
    <div>
      <Produto id={id} />
      <Carrossel id={id} />
    </div>
  );
}
