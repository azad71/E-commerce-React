export const addItemToCart = (cartItems, cartItemToAdd) => {
    const isCartItemExist = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if(isCartItemExist) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem    
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}];
}