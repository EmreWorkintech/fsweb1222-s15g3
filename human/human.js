function Human (isim, soyad, yas, yetenekler, dogumTarihi) {
    this.isim = isim
    this.yas = yas
    this.soyad = soyad
    this.enerji = 100
    this.yetenekler = yetenekler
    this.mideDolulukOranı = 0
    this.dogumTarihi = dogumTarihi
    this.ye = (kalori) => {
        this.enerji += kalori/100;
        this.mideDolulukOranı += kalori/20;
    }
    this.yuru = (km) => {
        this.enerji -= km*5;
    }
    this.kos = (km) => {
        this.enerji -= km*10;
    }
    this.sporYap = (dakika) => {
        this.enerji -= dakika*25/30;
    }
    this.yetenekGelistir = (yetenek) => {
        this.yetenekler.push(yetenek)
    }

}

module.exports = Human