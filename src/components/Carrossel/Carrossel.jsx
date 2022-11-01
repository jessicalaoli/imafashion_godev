import React from "react";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { CartContext } from "../../context/CartContext/cartContext";
import { CaretLeft, CaretRight } from "phosphor-react";
import styles from "../Produtos/Produtos.module.css";
import "./Carrossel.css";

export default function ProductPage(params) {
  var { estoque } = useContext(CartContext);
  const carousel = useRef(null);

  const tipo = estoque.find((produto) => produto.id === params.id).productType;

  estoque = estoque.filter(
    (produto) => produto.productType === tipo && produto.id !== params.id
  );

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };
  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <div className="Container">
      <div>
        <p className="Title">VOCÊ PODE GOSTAR</p>
      </div>
      <div className="carrossel" ref={carousel}>
        {estoque?.map((produto) => {
          return (
            <div key={produto.id}>
              <div className={styles.carditem}>
                <Link to={`/productPage/${produto.id}`}>
                  <img src={produto.img} />
                  <div>
                    <h3>{produto.productName}</h3>
                    <p>
                      <span>R$ </span>
                      <span>{produto.productPrice}</span>
                      <span>,00</span>
                    </p>
                    <p>
                      <span>{produto.productDivision}</span>
                    </p>
                    <p>
                      <button className={styles.addproductbtn}>
                        Ver Produto
                      </button>
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="one">
        <button onClick={handleLeftClick}>
          <i className={styles.caretLeft}>
          <CaretLeft size={46} />
          </i>
        </button>
        </div>
        <div className="two">
        <button onClick={handleRightClick}>
          <i className={styles.caretRight}>
          <CaretRight size={46} />
          </i>
        </button>
      </div>
    </div>
  );
}
