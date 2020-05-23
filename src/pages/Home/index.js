import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-levity-feminino/23/D22-3592-223/D22-3592-223_zoom2.jpg?ts=1579609212&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-levity-feminino/23/D22-3592-223/D22-3592-223_zoom2.jpg?ts=1579609212&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-levity-feminino/23/D22-3592-223/D22-3592-223_zoom2.jpg?ts=1579609212&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-levity-feminino/23/D22-3592-223/D22-3592-223_zoom2.jpg?ts=1579609212&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-levity-feminino/23/D22-3592-223/D22-3592-223_zoom2.jpg?ts=1579609212&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-olympikus-levity-feminino/23/D22-3592-223/D22-3592-223_zoom2.jpg?ts=1579609212&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
