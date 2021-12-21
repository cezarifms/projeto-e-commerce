import React from 'react'
import { useContext, useState } from 'react'
import { DataContext } from '../store/GlobalState'
import CartItem from '../components/CartItem'

const Car = () => {
  const { state, dispatch } = useContext(DataContext)
  const { cart } = state

  const [total, setTotal] = useState(0)

  return (
    <div className="row mx-auto">
      <div>carrinho de compras</div>

      <table>
        <tbody>
          {cart.map((item) => (
            <CartItem
              key={item._id}
              item={item}
              dispatch={dispatch}
              cart={cart}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Car
