# Scripts Klasörü
Bu klasörde frontend tarafında kullanılan script dosyaları bulunmaktadı. Yani HTML(EJS) sayfalarınızda kullanacağınız JavaScript dosyalarını burada koyabilirsiniz.

## Olası Sorunlar
- Eğer script dosyalarınızı buraya koyduktan sonra HTML(EJS) sayfalarınızda script dosyalarınızı kullanamıyorsanız;
    - HTML(EJS) sayfasında script dosyasını doğru bir şekilde dahil ettiğinizden emin olun. Doğru bir şekilde dahil etmek için HTML(EJS) sayfasında `<% include('../scripts/dosyaAdi.js') %>` kodunu kullanabilirsiniz.
    - Eğer dosyayı dahil ettiğiniz halde hala çalışmıyorsa, dosya adını ve yolunu kontrol edin. `..` işareti bir üst klasöre gitmek için kullanılır. Bu sebeple belki eksik veya fazla `..` işareti kullanmış olabilirsiniz.
    - Eğer dosya yolunuz doğruysa ve hala çalışmıyorsa, yazdığınız kodda bir hata olabilir. Kodunuzu kontrol edin.