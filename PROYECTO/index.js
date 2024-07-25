const btncarts =document.querySelector('.container-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btncarts.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})






