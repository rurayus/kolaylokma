'use strict';

KATEGORILER: [
  "Deniz Ürünleri",
  "Pastane Ürünleri",
  "Burger",
  "Salata",
  "Döner",
  "Tavuk",
  "Dünya Mutfağı",
  "Tatlı",
  "Vejetaryen",
  "Kebap",
  "Kahvaltı",
  "Ev Yemeği",
  "Pizza",
  "Köfte",
  "Çorba",
  "İçecek"
],

  /** @type {import('sequelize-cli').Migration} */
  module.exports = {
    async up(queryInterface, Sequelize) {
      let index = 1;
      await queryInterface.bulkInsert('menu_items', [
        // Restaurant 1 - Pizza
        { id: index++, restaurant_id: 1, name: 'Margarita Pizza (Küçük)', price: 129.99, kategori: 'Pizza' },
        { id: index++, restaurant_id: 1, name: 'Sucuklu Pizza (Küçük)', price: 159.99, kategori: 'Pizza' },
        { id: index++, restaurant_id: 1, name: 'Margarita Pizza (Orta)', price: 159.99, kategori: 'Pizza' },
        { id: index++, restaurant_id: 1, name: 'Sucuklu Pizza (Orta)', price: 189.99, kategori: 'Pizza' },
        { id: index++, restaurant_id: 1, name: 'Margarita Pizza (Büyük)', price: 189.99, kategori: 'Pizza' },
        { id: index++, restaurant_id: 1, name: 'Sucuklu Pizza (Büyük)', price: 219.99, kategori: 'Pizza' },
        { id: index++, restaurant_id: 1, name: 'Puding', price: 24.99, kategori: 'Tatlı' },
        { id: index++, restaurant_id: 1, name: 'Kola', price: 24.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 1, name: 'Ayran', price: 9.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 1, name: 'Su', price: 4.99, kategori: 'İçecek' },

        // Restaurant 2 - Tavuk & Köfte
        { id: index++, restaurant_id: 2, name: '6 Tavuk Kanat', price: 99.99, kategori: 'Tavuk' },
        { id: index++, restaurant_id: 2, name: '9 Tavuk Kanat', price: 139.99, kategori: 'Tavuk' },
        { id: index++, restaurant_id: 2, name: '12 Tavuk Kanat', price: 179.99, kategori: 'Tavuk' },
        { id: index++, restaurant_id: 2, name: '6 Tavuk But', price: 99.99, kategori: 'Tavuk' },
        { id: index++, restaurant_id: 2, name: '9 Tavuk But', price: 139.99, kategori: 'Tavuk' },
        { id: index++, restaurant_id: 2, name: '12 Tavuk But', price: 179.99, kategori: 'Tavuk' },
        { id: index++, restaurant_id: 2, name: '6 Köfte', price: 129.99, kategori: 'Köfte' },
        { id: index++, restaurant_id: 2, name: '9 Köfte', price: 159.99, kategori: 'Köfte' },
        { id: index++, restaurant_id: 2, name: '12 Köfte', price: 199.99, kategori: 'Köfte' },
        { id: index++, restaurant_id: 2, name: 'Kola', price: 29.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 2, name: 'Gazoz', price: 29.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 2, name: 'Fanta', price: 29.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 2, name: 'Şalgam Suyu', price: 19.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 2, name: 'Ayran', price: 14.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 2, name: 'Su', price: 9.99, kategori: 'İçecek' },

        // Restaurant 3 - Deniz Ürünleri
        { id: index++, restaurant_id: 3, name: 'Izgara Somon', price: 199.99, kategori: 'Deniz Ürünleri' },
        { id: index++, restaurant_id: 3, name: 'Karides Güveç', price: 169.99, kategori: 'Deniz Ürünleri' },
        { id: index++, restaurant_id: 3, name: 'Balık Çorbası', price: 89.99, kategori: 'Deniz Ürünleri' },
        { id: index++, restaurant_id: 3, name: 'Kalamar Tava', price: 149.99, kategori: 'Deniz Ürünleri' },
        { id: index++, restaurant_id: 3, name: 'Midye Dolma', price: 99.99, kategori: 'Deniz Ürünleri' },
        { id: index++, restaurant_id: 3, name: 'Kola', price: 39.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 2, name: 'Gazoz', price: 39.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 2, name: 'Fanta', price: 39.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 2, name: 'Şalgam Suyu', price: 29.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 3, name: 'Su', price: 14.99, kategori: 'İçecek' },

        // Restaurant 4 - Pastane Ürünleri
        { id: index++, restaurant_id: 4, name: 'Poğaça', price: 19.99, kategori: 'Pastane Ürünleri' },
        { id: index++, restaurant_id: 4, name: 'Açma', price: 14.99, kategori: 'Pastane Ürünleri' },
        { id: index++, restaurant_id: 4, name: 'Simit', price: 9.99, kategori: 'Pastane Ürünleri' },
        { id: index++, restaurant_id: 4, name: 'Kruvasan', price: 24.99, kategori: 'Pastane Ürünleri' },
        { id: index++, restaurant_id: 4, name: 'Ekmek', price: 4.99, kategori: 'Pastane Ürünleri' },
        { id: index++, restaurant_id: 4, name: 'Çay', price: 4.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 4, name: 'Kahve', price: 14.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 4, name: 'Sıcak Çikolata', price: 19.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 4, name: 'Meyve Suyu', price: 24.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 4, name: 'Su', price: 4.99, kategori: 'İçecek' },

        // Restaurant 5 - Burger
        { id: index++, restaurant_id: 5, name: 'Klasik Burger', price: 129.99, kategori: 'Burger' },
        { id: index++, restaurant_id: 5, name: 'Cheeseburger', price: 149.99, kategori: 'Burger' },
        { id: index++, restaurant_id: 5, name: 'Bacon Burger', price: 169.99, kategori: 'Burger' },
        { id: index++, restaurant_id: 5, name: 'Double Burger', price: 199.99, kategori: 'Burger' },
        { id: index++, restaurant_id: 5, name: 'Vegan Burger', price: 159.99, kategori: 'Burger' },
        { id: index++, restaurant_id: 5, name: 'Kola', price: 29.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 5, name: 'Gazoz', price: 29.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 5, name: 'Fanta', price: 29.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 5, name: 'Su', price: 14.99, kategori: 'İçecek' },

        // Restaurant 6 - Pide & Salata
        { id: index++, restaurant_id: 6, name: 'Tek Kıymalı Pide', price: 149.99, kategori: 'Pide' },
        { id: index++, restaurant_id: 6, name: 'Tek Kaşarlı Pide', price: 139.99, kategori: 'Pide' },
        { id: index++, restaurant_id: 6, name: 'Tek Kuşbaşı Pide', price: 159.99, kategori: 'Pide' },
        { id: index++, restaurant_id: 6, name: 'Tek Sucuklu Pide', price: 139.99, kategori: 'Pide' },
        { id: index++, restaurant_id: 6, name: 'Çoban Salata', price: 49.99, kategori: 'Salata' },
        { id: index++, restaurant_id: 6, name: 'Sezar Salata', price: 79.99, kategori: 'Salata' },
        { id: index++, restaurant_id: 6, name: 'Tavuklu Salata', price: 89.99, kategori: 'Salata' },
        { id: index++, restaurant_id: 6, name: 'Ton Balıklı Salata', price: 99.99, kategori: 'Salata' },
        { id: index++, restaurant_id: 6, name: 'Greek Salata', price: 79.99, kategori: 'Salata' },
        { id: index++, restaurant_id: 6, name: 'Kola', price: 19.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 6, name: 'Gazoz', price: 19.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 6, name: 'Fanta', price: 19.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 6, name: 'Ayran', price: 12.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 6, name: 'Su', price: 7.99, kategori: 'İçecek' },

        // Restaurant 7 - Döner
        { id: index++, restaurant_id: 7, name: 'Et Döner Dürüm', price: 79.99, kategori: 'Döner' },
        { id: index++, restaurant_id: 7, name: 'Tavuk Döner Dürüm', price: 59.99, kategori: 'Döner' },
        { id: index++, restaurant_id: 7, name: 'Et Döner Porsiyon', price: 99.99, kategori: 'Döner' },
        { id: index++, restaurant_id: 7, name: 'Tavuk Döner Porsiyon', price: 79.99, kategori: 'Döner' },
        { id: index++, restaurant_id: 7, name: 'İskender Döner', price: 119.99, kategori: 'Döner' },
        { id: index++, restaurant_id: 7, name: 'Kola', price: 24.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 7, name: 'Gazoz', price: 24.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 7, name: 'Fanta', price: 24.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 7, name: 'Ayran', price: 19.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 7, name: 'Su', price: 4.99, kategori: 'İçecek' },

        // Restaurant 8 - Dünya Mutfağı
        { id: index++, restaurant_id: 8, name: 'Sushi Roll', price: 149.99, kategori: 'Dünya Mutfağı' },
        { id: index++, restaurant_id: 8, name: 'Pad Thai', price: 129.99, kategori: 'Dünya Mutfağı' },
        { id: index++, restaurant_id: 8, name: 'Taco', price: 99.99, kategori: 'Dünya Mutfağı' },
        { id: index++, restaurant_id: 8, name: 'Pizza Margherita', price: 139.99, kategori: 'Dünya Mutfağı' },
        { id: index++, restaurant_id: 8, name: 'Falafel', price: 79.99, kategori: 'Dünya Mutfağı' },
        { id: index++, restaurant_id: 8, name: 'Kola', price: 29.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 8, name: 'Gazoz', price: 29.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 8, name: 'Fanta', price: 29.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 8, name: 'Su', price: 9.99, kategori: 'İçecek' },

        // Restaurant 9 - Tatlı
        { id: index++, restaurant_id: 9, name: 'Baklava', price: 59.99, kategori: 'Tatlı' },
        { id: index++, restaurant_id: 9, name: 'Künefe', price: 79.99, kategori: 'Tatlı' },
        { id: index++, restaurant_id: 9, name: 'Sütlaç', price: 49.99, kategori: 'Tatlı' },
        { id: index++, restaurant_id: 9, name: 'Profiterol', price: 69.99, kategori: 'Tatlı' },
        { id: index++, restaurant_id: 9, name: 'Tiramisu', price: 89.99, kategori: 'Tatlı' },
        { id: index++, restaurant_id: 9, name: 'Çay', price: 14.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 9, name: 'Kahve', price: 19.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 9, name: 'Su', price: 4.99, kategori: 'İçecek' },

        // Restaurant 10 - Vejetaryen
        { id: index++, restaurant_id: 10, name: 'Sebzeli Krep', price: 79.99, kategori: 'Vejetaryen' },
        { id: index++, restaurant_id: 10, name: 'Fırınlanmış Patlıcan', price: 69.99, kategori: 'Vejetaryen' },
        { id: index++, restaurant_id: 10, name: 'Nohut Köftesi', price: 89.99, kategori: 'Vejetaryen' },
        { id: index++, restaurant_id: 10, name: 'Sebzeli Pizza', price: 99.99, kategori: 'Vejetaryen' },
        { id: index++, restaurant_id: 10, name: 'Zeytinyağlı Yaprak Sarma', price: 49.99, kategori: 'Vejetaryen' },
        { id: index++, restaurant_id: 10, name: 'Meyve Suyu', price: 19.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 10, name: 'Soda', price: 9.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 10, name: 'Çay', price: 4.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 10, name: 'Kahve', price: 14.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 10, name: 'Limonata', price: 24.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 10, name: 'Su', price: 4.99, kategori: 'İçecek' },

        // Restaurant 11 - Kebap
        { id: index++, restaurant_id: 11, name: 'Adana Kebap', price: 119.99, kategori: 'Kebap' },
        { id: index++, restaurant_id: 11, name: 'Urfa Kebap', price: 119.99, kategori: 'Kebap' },
        { id: index++, restaurant_id: 11, name: 'Şiş Kebap', price: 129.99, kategori: 'Kebap' },
        { id: index++, restaurant_id: 11, name: 'Beyti Kebap', price: 139.99, kategori: 'Kebap' },
        { id: index++, restaurant_id: 11, name: 'Ali Nazik Kebap', price: 149.99, kategori: 'Kebap' },
        { id: index++, restaurant_id: 11, name: 'Kola', price: 24.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 11, name: 'Gazoz', price: 24.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 11, name: 'Fanta', price: 24.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 11, name: 'Ayran', price: 19.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 11, name: 'Şalgam Suyu', price: 19.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 11, name: 'Turşu Suyu', price: 19.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 11, name: 'Su', price: 4.99, kategori: 'İçecek' },

        // Restaurant 12 - Kahvaltı
        { id: index++, restaurant_id: 12, name: 'Serpme Kahvaltı', price: 199.99, kategori: 'Kahvaltı' },
        { id: index++, restaurant_id: 12, name: 'Menemen', price: 79.99, kategori: 'Kahvaltı' },
        { id: index++, restaurant_id: 12, name: 'Sucuklu Yumurta', price: 89.99, kategori: 'Kahvaltı' },
        { id: index++, restaurant_id: 12, name: 'Gözleme', price: 69.99, kategori: 'Kahvaltı' },
        { id: index++, restaurant_id: 12, name: 'Kahvaltı Tabağı', price: 99.99, kategori: 'Kahvaltı' },
        { id: index++, restaurant_id: 12, name: 'Çay', price: 4.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 12, name: 'Kahve', price: 14.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 12, name: 'Meyve Suyu', price: 19.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 12, name: 'Soda', price: 9.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 12, name: 'Su', price: 4.99, kategori: 'İçecek' },


        // Restaurant 13 - Ev Yemeği
        { id: index++, restaurant_id: 13, name: 'Zeytinyağlı Enginar', price: 49.99, kategori: 'Ev Yemeği' },
        { id: index++, restaurant_id: 13, name: 'Kuru Fasulye', price: 39.99, kategori: 'Ev Yemeği' },
        { id: index++, restaurant_id: 13, name: 'Patlıcan Musakka', price: 59.99, kategori: 'Ev Yemeği' },
        { id: index++, restaurant_id: 13, name: 'Taze Fasulye', price: 44.99, kategori: 'Ev Yemeği' },
        { id: index++, restaurant_id: 13, name: 'Bulgur Pilavı', price: 29.99, kategori: 'Ev Yemeği' },
        { id: index++, restaurant_id: 13, name: 'Kola', price: 24.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 13, name: 'Gazoz', price: 24.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 13, name: 'Fanta', price: 24.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 13, name: 'Ayran', price: 19.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 13, name: 'Su', price: 4.99, kategori: 'İçecek' },

        // Restaurant 14 - Pizza
        { id: index++, restaurant_id: 14, name: 'Peynirli Pizza (Küçük)', price: 139.99, kategori: 'Pizza' },
        { id: index++, restaurant_id: 14, name: 'Peynirli Pizza (Orta)', price: 169.99, kategori: 'Pizza' },
        { id: index++, restaurant_id: 14, name: 'Peynirli Pizza (Büyük)', price: 199.99, kategori: 'Pizza' },
        { id: index++, restaurant_id: 14, name: 'Sosisli Pizza (Küçük)', price: 139.99, kategori: 'Pizza' },
        { id: index++, restaurant_id: 14, name: 'Sosisli Pizza (Orta)', price: 169.99, kategori: 'Pizza' },
        { id: index++, restaurant_id: 14, name: 'Sosisli Pizza (Büyük)', price: 199.99, kategori: 'Pizza' },
        { id: index++, restaurant_id: 14, name: 'Kola', price: 29.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 14, name: 'Gazoz', price: 29.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 14, name: 'Fanta', price: 29.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 14, name: 'Su', price: 14.99, kategori: 'İçecek' },

        // Restaurant 15 - Köfte
        { id: index++, restaurant_id: 15, name: 'İnegöl Köfte', price: 129.99, kategori: 'Köfte' },
        { id: index++, restaurant_id: 15, name: 'Tekirdağ Köfte', price: 139.99, kategori: 'Köfte' },
        { id: index++, restaurant_id: 15, name: 'Akçaabat Köfte', price: 149.99, kategori: 'Köfte' },
        { id: index++, restaurant_id: 15, name: 'Sulu Köfte', price: 119.99, kategori: 'Köfte' },
        { id: index++, restaurant_id: 15, name: 'Izgara Köfte', price: 139.99, kategori: 'Köfte' },
        { id: index++, restaurant_id: 15, name: 'Kola', price: 24.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 15, name: 'Gazoz', price: 24.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 15, name: 'Fanta', price: 24.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 15, name: 'Ayran', price: 19.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 15, name: 'Su', price: 4.99, kategori: 'İçecek' },

        // Restaurant 16 - Çorba
        { id: index++, restaurant_id: 16, name: 'Mercimek Çorbası', price: 29.99, kategori: 'Çorba' },
        { id: index++, restaurant_id: 16, name: 'Tavuk Suyu Çorba', price: 39.99, kategori: 'Çorba' },
        { id: index++, restaurant_id: 16, name: 'Domates Çorbası', price: 34.99, kategori: 'Çorba' },
        { id: index++, restaurant_id: 16, name: 'Ezogelin Çorbası', price: 29.99, kategori: 'Çorba' },
        { id: index++, restaurant_id: 16, name: 'Tarhana Çorbası', price: 34.99, kategori: 'Çorba' },
        { id: index++, restaurant_id: 16, name: 'Kola', price: 24.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 16, name: 'Gazoz', price: 24.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 16, name: 'Fanta', price: 24.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 16, name: 'Ayran', price: 19.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 16, name: 'Su', price: 4.99, kategori: 'İçecek' },

        // Restaurant 17 - Türk Mutfağı
        { id: index++, restaurant_id: 17, name: 'Kuru Fasulye', price: 39.99, kategori: 'Ev Yemeği' },
        { id: index++, restaurant_id: 17, name: 'Karnıyarık', price: 49.99, kategori: 'Ev Yemeği' },
        { id: index++, restaurant_id: 17, name: 'İmam Bayıldı', price: 49.99, kategori: 'Ev Yemeği' },
        { id: index++, restaurant_id: 17, name: 'Kuzu Tandır', price: 99.99, kategori: 'Kebap' },
        { id: index++, restaurant_id: 17, name: 'Kuzu Şiş', price: 119.99, kategori: 'Kebap' },
        { id: index++, restaurant_id: 17, name: 'Kuzu İncik', price: 149.99, kategori: 'Kebap' },
        { id: index++, restaurant_id: 17, name: 'Kola', price: 24.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 17, name: 'Gazoz', price: 24.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 17, name: 'Fanta', price: 24.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 17, name: 'Ayran', price: 19.99, kategori: 'İçecek' },
        { id: index++, restaurant_id: 17, name: 'Su', price: 4.99, kategori: 'İçecek' },

        // Restaurant 18 - Karma
        { id: index++, restaurant_id: 18, name: 'Fırında Levrek', price: 149.99, kategori: 'Deniz Ürünleri' },
        { id: index++, restaurant_id: 18, name: 'Kaşarlı Poğaça', price: 24.99, kategori: 'Pastane Ürünleri' },
        { id: index++, restaurant_id: 18, name: 'Double Cheeseburger', price: 199.99, kategori: 'Burger' },
        { id: index++, restaurant_id: 18, name: 'Roka Salatası', price: 59.99, kategori: 'Salata' },
        { id: index++, restaurant_id: 18, name: 'Et Döner Ekmek Arası', price: 89.99, kategori: 'Döner' },
        { id: index++, restaurant_id: 18, name: 'Paella', price: 189.99, kategori: 'Dünya Mutfağı' },
        { id: index++, restaurant_id: 18, name: 'Brownie', price: 49.99, kategori: 'Tatlı' },
        { id: index++, restaurant_id: 18, name: 'Sebzeli Makarna', price: 79.99, kategori: 'Vejetaryen' },
        { id: index++, restaurant_id: 18, name: 'Lahmacun', price: 29.99, kategori: 'Kebap' },
        { id: index++, restaurant_id: 18, name: 'Omlet', price: 19.99, kategori: 'Kahvaltı' },
        { id: index++, restaurant_id: 18, name: 'Kuru Dolma', price: 39.99, kategori: 'Ev Yemeği' },
        { id: index++, restaurant_id: 18, name: 'Pizza Pepperoni (Küçük)', price: 139.99, kategori: 'Pizza' },
        { id: index++, restaurant_id: 18, name: 'Kadınbudu Köfte', price: 119.99, kategori: 'Köfte' },
        { id: index++, restaurant_id: 18, name: 'İşkembe Çorbası', price: 49.99, kategori: 'Çorba' },
        { id: index++, restaurant_id: 18, name: 'Milkshake', price: 29.99, kategori: 'İçecek' },

      ], {});
    },

    async down(queryInterface, Sequelize) {
      /**
       * Add commands to revert seed here.
       *
       * Example:
       * await queryInterface.bulkDelete('People', null, {});
       */
    }
  };
