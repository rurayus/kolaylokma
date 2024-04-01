const restaurants = [
    {id:"11111", name:'Restoran 1', lat:41.4507,long:31.7627, icon:"https://cdn-icons-png.flaticon.com/512/4287/4287725.png", menu:'1' },
    {id:"11112", name:'Restoran 2', lat:41.4517,long:31.7627, icon:"https://cdn-icons-png.flaticon.com/512/4287/4287725.png", menu:'2' },
    {id:"11113", name:'Restoran 3', lat:41.4527,long:31.7627, icon:"https://cdn-icons-png.flaticon.com/512/4287/4287725.png", menu:'3' },
    {id:"11114", name:'Restoran 4', lat:41.4517,long:31.7637, icon:"https://cdn-icons-png.flaticon.com/512/4287/4287725.png", menu:'4' }
];

module.exports = class Restaurants {
    constructor(id, name, lat, long, icon, menu) {
        this.id = (Math.floor(Math.random() * 99999) + 1).toString();;
        this.name = name;
        this.lat = lat;
        this.long = long;
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
        restaurants[index].name = restaurant.name;
        restaurants[index].lat = restaurant.lat;
        restaurants[index].long = restaurant.long
        restaurants[index].icon = restaurant.icon;
        restaurants[index].menu = restaurant.menu;
    }

    static DeleteById(id) {
        const index = restaurants.findIndex(i => i.id === id);
        restaurants.splice(index, 1);
    }
}