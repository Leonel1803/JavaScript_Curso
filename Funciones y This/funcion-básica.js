function calculateDiscountedPrice(price, discountPercentage){
    const discount = (price * discountPercentage) / 100
    const priceWithDiscount = price - discount
    return priceWithDiscount //Es lo que devuelve la función
}

const originalPrice = 1000
const discountPercentage = 15
const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage) // Lo que retorna la función se guarda en esta variable
console.log('Original Price: $'+ originalPrice)
console.log('Discount: '+ discountPercentage+'%')
console.log('Price with discount: $'+ finalPrice)