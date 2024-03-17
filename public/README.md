# Public Klasörü
Bu klasörde frontend tarafında kullanılan Script harıcı dosyalar bulunmaktadır. Yani HTML(EJS) sayfalarınızda kullanacağınız CSS, resim, video, ses vb. kullanıcının göreceği dosyaları burada koyabilirsiniz.

Bu klasörü alt klasörlerle düzenleyebilirsiniz. Örneğin; resim dosyalarını `images` klasörüne, stil dosyalarını `styles` klasörüne koyabilirsiniz.

HTML(EJS) sayfalarınızda bu dosyaları kullanmak için, dosya yolunu belirtmeniz yeterlidir. Örneğin; `styles` klasörüne koyduğunuz bir CSS dosyasını kullanmak için HTML(EJS) sayfanızda `<link rel="stylesheet" href="/styles/dosyaAdi.css">` kodunu kullanabilirsiniz.

> Script harici demişken, script dosyalarınızı `scripts` klasörüne koyacağınızı unutmayın. Detaylar için [Buraya](../scripts/README.md) bakabilirsiniz.