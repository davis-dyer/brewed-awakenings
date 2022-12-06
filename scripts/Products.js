import { getProducts } from "./database.js"

const products = getProducts()

//Adding an event listener

document.addEventListener (
    "click",
    (clickEvent) => {
        const newClick = clickEvent.target;
        if (newClick.id.startsWith('product')) {
            const [,productPrimaryKey] = newClick.id.split('--');
            for (const product of products) {
                if (product.id === parseInt(productPrimaryKey)){
                    window.alert(`${product.name} costs
                    $${product.price}`)
                }
            }
        }  
    }
)

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}

