// const menuItems = [
//   {id:"1",restaurant_id:"1111",item_name:'Çay',item_price:"15"},
//   {id:"2",restaurant_id:"1111",item_name:'Kahve',item_price:"35"},
//   {id:"3",restaurant_id:"1112",item_name:'Tavuk',item_price:"90"},
//   {id:"4",restaurant_id:"1112",item_name:'Köfte',item_price:"120"},
//   {id:"5",restaurant_id:"1113",item_name:'Pilav',item_price:"50"},
//   {id:"6",restaurant_id:"1113",item_name:'Makarna',item_price:"40"},
//   {id:"7",restaurant_id:"1114",item_name:'Dürüm',item_price:"100"},
//   {id:"8",restaurant_id:"1114",item_name:'Pide',item_price:"130"},
// ];

// module.exports = class MenuItems {
//   constructor(id,restaurant_id,item_name,item_price){
//       this.id =  (menuItems.length+1).toString();
//       this.restaurant_id = restaurant_id;
//       this.item_name=item_name;
//       this.item_price=item_price;
//   }


//   saveMenuItems(){
//       menuItems.push(this);
//   }

//   static getAll(){
//       return menuItems;
//   }

//   static getById(id){
//       const menuItem = menuItems.find(i=> i.id === id);
//       return menuItem;
//   }

//   static getMenuItemsByRestaurantId(restaurant_id){
//       return menuItems.filter(i=>i.restaurant_id===restaurant_id);
//   }

//   static Update(menuItem){
//       const index = menuItems.findIndex(i=>i.id===menuItem.id);
//       menuItems[index].restaurant_id = menuItem.restaurant_id;
//       menuItems[index].item_name = menuItem.item_name;
//       menuItems[index].item_price = menuItem.item_price;
//   }

//   static DeleteById(id){
//       const index = menuItems.findIndex(i=> i.id === id);
//       menuItems.splice(index,1);
//   }
// }


const db = require('../database');
const { Sequelize } = db.Sequelize;

const MenuItems = db.define('menu-items', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  menu: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true
  },
  kategori: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps: false // Bu alanı eklediğimizde Sequelize createdAt ve updatedAt alanlarını otomatik olarak eklemez
});

module.exports = MenuItems;
