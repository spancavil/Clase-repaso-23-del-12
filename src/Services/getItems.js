export function getItems () {
    return new Promise ( (acc, rej) => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            acc(data)
        })
        .catch(error => console.log(error.message))
    })
}

export async function getItemsAsync (){
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}