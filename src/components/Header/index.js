import React from 'react';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.svg';

// Foi adicionado o parâmetro do connect (cartSize) que retorna o tamanho e atualiza o cart
export default function Header() {
  const cartSize = useSelector(state => state.cart.length);
  console.log(cartSize);
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocktshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize}</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

// Funconamento do Redux comecou na Home/index.js , conexão com o Redux (connect)
// que tem acesso ao dispatch que serve para disparar as actions do redux.
// As actions são responsáveis por dizer que queremos fazer alguma alteração no estado.
// Cada action tem um type e payload.
// Detro do reducer ele ouve todas as actions e mapeia o que é de seu interesse
