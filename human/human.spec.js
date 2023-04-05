const Human = require('./human')

let yeniKarakter;

beforeEach(()=> {
    yeniKarakter = new Human('Emre', 'Şahiner', 45, ['futbol', 'voleybol']);
})

describe('Human nesnesi', ()=> {

    test('Human nesnesi oluşuyor', ()=> {
        expect(yeniKarakter).toBeDefined();
        expect(yeniKarakter).toHaveProperty('isim', 'Emre');
    })
    test('Human nesnesi yas değerini doğru içeriyor', ()=> {
        expect(yeniKarakter).toHaveProperty('yas', 45);
    })
    test('Human nesnesi soyad değerini doğru içeriyor', ()=> {
        expect(yeniKarakter).toHaveProperty('soyad', 'Şahiner');
    })
    test('Human nesnesi enerji değerini doğru içeriyor', ()=> {
        expect(yeniKarakter).toHaveProperty('enerji', 100);
    })
    test('Human nesnesi yetenekler sayısını doğru dönüyor', ()=> {
        expect(yeniKarakter).toHaveProperty('yetenekler');
        expect(yeniKarakter.yetenekler).toHaveLength(2);
    })
    test('Human nesnesi mideDolulukOranı değerini doğru içeriyor', ()=> {
        expect(yeniKarakter).toHaveProperty('mideDolulukOranı', 0);
    })
})


describe('Human nesnesinin yapabilecekleri', ()=> {

    test('yemek yeme özelliği var', ()=> {
        expect(yeniKarakter.ye).toBeDefined();
    })

    test('yürüme özelliği var', ()=> {
        expect(yeniKarakter.yuru).toBeDefined();
    })

    test('koşma özelliği var', ()=> {
        expect(yeniKarakter.kos).toBeDefined();
    })

    test('spor özelliği var', ()=> {
        expect(yeniKarakter.sporYap).toBeDefined();
    })

    test('yeni yetenek kazanma özelliği var', ()=> {
        expect(yeniKarakter.yetenekGelistir).toBeDefined();
    })
})

describe('Human nesnesinin fonksiyonları', ()=> {

    test('yemek yedikçe enerjisi doğru artıyor', ()=> {
        yeniKarakter.ye(300);
        expect(yeniKarakter.enerji).toBe(103);
    })

    test('yemek yedikçe midesinin doluluk oranı doğru artıyor', ()=> {
        yeniKarakter.ye(500);
        expect(yeniKarakter.mideDolulukOranı).toBe(25);
    })

    test('yürüdükçe enerjisi doğru azalıyor', ()=> {
        yeniKarakter.yuru(10)  
        expect(yeniKarakter.enerji).toBe(50);
    })

    test('koştukça enerjisi doğru azalıyor', ()=> {
        yeniKarakter.kos(10)
        expect(yeniKarakter.enerji).toBe(0);
    })

    test('spor yaptıkça enerjisi doğru azalıyor', ()=> {
        yeniKarakter.sporYap(30)
        expect(yeniKarakter.enerji).toBe(75);
    })

    test('yeni yetenek eklebiliyor', ()=> {
        yeniKarakter.yetenekGelistir('yüzme')
        expect(yeniKarakter.yetenekler).toHaveLength(3);
    })
})