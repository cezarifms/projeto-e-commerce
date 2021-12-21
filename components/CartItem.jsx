const CartItem = ({ item, dispatch, cart }) => {
  const { _id, inStock, checked, images, title, description, price } = item
  return (
    <tr>
      <h3>{title}</h3>
    </tr>
  )
}

export default CartItem
