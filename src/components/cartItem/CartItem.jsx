export default function CartItem({name , price, quantity}){
    const subTotal = quantity * price
    return<div >
        <h2>{name}</h2>
        <h2>cantidad: {quantity}</h2>
        <h2>precio unitario: {price}</h2>
        <h2>subTotal : ${subTotal}</h2>
    </div>
}