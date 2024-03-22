const restaurants = [
    { id: "11111", name: 'Restoran 1', location: [41.4507, 31.7632], icon: "https://cdn-icons-png.flaticon.com/512/4287/4287725.png", menu: '1' },
    { id: "11112", name: 'Restoran 2', location: [41.4530, 31.7617], icon: "https://cdn-icons-png.flaticon.com/512/4287/4287725.png", menu: '2' }
];

module.exports = class Restaurants {
    constructor(id, name, location, icon, menu) {
        this.id = (Math.floor(Math.random() * 99999) + 1).toString();;
        this.name = name;
        this.location = location;
        this.icon = icon;
        this.menu = menu;
    }

    saveRestaurant() {
        restaurants.push(this);
    }

    static getAll() {
        return restaurants;
    }

    static getById(id) {
        const restaurant = restaurants.find(i => i.id === id);
        return restaurant;
    }

    static Update(restaurant) {
        const index = restaurants.findIndex(i => i.id === id);
        products[index].name = product.name;
        products[index].location = product.location;
        products[index].icon = product.icon;
        products[index].menu = product.menu;
    }

    static DeleteById(id) {
        const index = restaurants.findIndex(i => i.id === id);
        restaurants.splice(index, 1);
    }
}