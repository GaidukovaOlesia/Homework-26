// let kitchenProducts = [
//     {
//         type: 'grater',
//         price: 10
//     },
//     {
//         type: 'pastry-bag',
//         price: 25
//     },
//     {
//         type: 'scale',
//         price: 5
//     },
//     {
//         type: 'whisk',
//         price: 15
//     }
// ];
//
// let devicesProducts = [
//     {
//         type: 'desktop',
//         price: [100,1000]
//     },
//     {
//         type: 'laptop',
//         price: [50,1500]
//     },
//     {
//         type: 'smartphone',
//         price: [80,2000]
//     },
//     {
//         type: 'tablet',
//         price: [20,1300]
//     }
// ];
//
// let cosmeticsProducts = [
//     {
//         type: 'blush',
//         price: 100
//     },
//     {
//         type: 'eyeshadow',
//         price: 50
//     },
//     {
//         type: 'lipstick',
//         price: 80
//     },
//     {
//         type: 'nail-polish',
//         price: 200
//     },
//     {
//         type: 'perfume',
//         price: 300,
//     }
// ];
// Задача:
//
//     Создать функцию-конструктор Product, которая принимает на вход аргументы category,
//     type, price и присваивать их полям объекта c соответствующим названием ключа.

//     Каждому объекту созданному с помощью функции-конструктор Product доступна функция render,
//     которая возвращает строку вида:
//
// `<tr>
// 	<td><img src="images/kitchen/grater.svg" alt="grater" width="50" height="50"></td>
// 	<td>grater</td>
// 	<td>10 USD</td>
// </tr>`

// Все заданные продукты создаем с помощью функции-конструктор Product и для всех вызываем метод render().
//
//     В результате необходимо отрендерить на странице таблицу с выводом данных о всех продуктах.
//
//     Пример вывода прикреплен products.png
//
// Исходные картинки находятся в прикрепленном архиве images.zip
debugger;
function Product(category, type, price) {
    // debugger;
    this.category = category;
    this.type = type;
    this.price = price;
}
Product.prototype.renderProduct = function() {
    // debugger;
    let list = [];

        list.push(`
        <tr>
            <td><img src="images/${this.category}/${this.type}.svg" alt="${this.type}" width="50" height="50"></td>
            <td>${this.type}</td>
            <td>${this.price}</td>
        </tr>`)

    return list.join("");
};

const blush = new Product("cosmetics", "blush",  "100 USD");
const eyeshadow = new Product("cosmetics", "eyeshadow", "50 USD");
const lipstick = new Product("cosmetics", "lipstick", "80 USD");
const nailpolish = new Product("cosmetics", "nail-polish", "200 USD");
const perfume = new Product("cosmetics", "perfume", "300 USD");
const desktop = new Product("devices", "desktop", "100-1000 USD");
const laptop = new Product("devices", "laptop", "500-1500 USD");
const smartphone = new Product("devices", "smartphone", "80-2000 USD");
const tablet = new Product("devices", "tablet", "20-1300 USD");
const grater = new Product("kitchen", "grater", "10 USD");
const pastrybag = new Product("kitchen", "pastry-bag", "25 USD");
const scale = new Product("kitchen", "scale", "5 USD");
const whisk = new Product("kitchen", "whisk", "15 USD");
document.write(`
        	<table style="border: solid 1px black">
         		<thead >
         			<tr>
         				<th>Image</th>
         				<th>Name</th>
         				<th>Price</th>
         			</tr>
         		</thead>
         		<tbody>${blush.renderProduct()}</tbody>
         		<tbody>${eyeshadow.renderProduct()}</tbody>
         		<tbody>${lipstick.renderProduct()}</tbody>
         		<tbody>${nailpolish.renderProduct()}</tbody>
         		<tbody>${perfume.renderProduct()}</tbody>
         		<tbody>${desktop.renderProduct()}</tbody>
         		<tbody>${laptop.renderProduct()}</tbody>
         		<tbody>${smartphone.renderProduct()}</tbody>
         		<tbody>${tablet.renderProduct()}</tbody>
         		<tbody>${grater.renderProduct()}</tbody>
         		<tbody>${pastrybag.renderProduct()}</tbody>
         		<tbody>${scale.renderProduct()}</tbody>
         		<tbody>${whisk.renderProduct()}</tbody>
        	</table>
         `);











