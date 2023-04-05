Derste Yaptıklarımız


1- boş klasör oluşturduk mkdir s15g3
2- klasörün içine girdik  cd s15g3
3- package.json dosyası oluşturk npm init -y
4- jest'i dev dependency olarak yükledik npm i -D jest
5- yardımcı bir kütüphane yükledik npm i -D @types/jest
6- jest configurasyonunu yaptık. npx jest --init
7- package.json dosyamızda test script oluşturduk  "test": "jest --verbose --watchAll"
8- test klasörü oluşturabiliriz   __tests__ içindeki tüm .js dosyaları test olarak çalıştırır
9- test dosyası oluşturduk. basic.test.js (basic.spec.js de olabilirdi)
10- testleri yazmaya başladık
    a- önce basic test yazdık
    b- sonra unit test yazdık (Sum ve async foo)
11- TDD (test drive Development) yaklaşımı ile testler yazdık. (bir de BDD(behavior Drive Development) vardı)
    a- bunun için önce kaynak dosyalarımızı oluşturduk.(human/human.spec.js ve human.js)
    b- testlerimizi yazdık.