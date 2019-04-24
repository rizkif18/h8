
    function tampilkan() {

        // sembunyikan html
        document.getElementById("inputKubus").hidden = true;
        document.getElementById("inputBalok").hidden = true;
        document.getElementById("inputKerucut").hidden = true;
        document.getElementById("inputTabung").hidden = true;
        document.getElementById("inputLimasS3").hidden = true;
        document.getElementById("inputLimasS4").hidden = true;
        document.getElementById("inputprismaS3").hidden = true;
        document.getElementById("inputBola").hidden = true;
        
        // tampilkan 
        let volume = document.getElementById("pilihBR").value;
        switch (volume) {
            case "kubus":
                document.getElementById("inputKubus").hidden = false;
                break;
            case "balok":
                document.getElementById("inputBalok").hidden = false;
                break;
            case "kerucut":
                document.getElementById("inputKerucut").hidden = false;
                break;
            case "tabung":
                document.getElementById("inputTabung").hidden = false;
                break;
            case "limasS3":
                document.getElementById("inputLimasS3").hidden = false;
                break;
            case "limasS4":
                document.getElementById("inputLimasS4").hidden = false;
                break;
            case "prismaS3":
                document.getElementById("inputprismaS3").hidden = false;
                break;
            case "bola":
                document.getElementById("inputBola").hidden = false;
                break;
        }
    }
    function calculateVolume() {

        // pilih bangun ruang 
        let bangunRuang = document.getElementById("pilihBR").value;
        
        // hitung volume
        let volume = 0;
        switch (bangunRuang) {
            case "kubus":
                let sisiKubus = document.getElementById("sisiKubus").value;
                volume = sisiKubus * sisiKubus * sisiKubus;
                break;
            case "balok":
                let panjangBalok = document.getElementById("panjangBalok").value;
                let lebarBalok = document.getElementById("lebarBalok").value;
                let tinggiBalok = document.getElementById("tinggiBalok").value;
                volume = panjangBalok * lebarBalok * tinggiBalok;
                break;
            case "kerucut":
                let jari2AlasKerucut = document.getElementById("jari2AlasKerucut").value;
                let tinggiKerucut = document.getElementById("tinggiKerucut").value;
                volume = Math.PI * jari2AlasKerucut * jari2AlasKerucut * tinggiKerucut / 3;
                break;
            case "tabung":
                let jari2AlasTabung = document.getElementById("jari2AlasTabung").value;
                let tinggiTabung = document.getElementById("tinggiTabung").value;
                volume = Math.PI * jari2AlasTabung * jari2AlasTabung * tinggiTabung;
                break;
            case "limasS3":
                let panjangAlasLimasS3 = document.getElementById("panjangAlasLimasS3").value;
                let tinggiAlasLimasS3 = document.getElementById("tinggiAlasLimasS3").value;
                let tinggiLimasS3 = document.getElementById("tinggiLimasS3").value;
                volume = (panjangAlasLimasS3 * tinggiAlasLimasS3 / 2) *tinggiLimasS3 / 3;
                break;
            case "limasS4":
                let panjangAlasLimasS4 = document.getElementById("panjangAlasLimasS4").value;
                let lebarAlasLimasS4 = document.getElementById("lebarAlasLimasS4").value;
                let tinggiLimasS4 = document.getElementById("tinggiLimasS4").value;
                volume = panjangAlasLimasS4 * lebarAlasLimasS4 * tinggiLimasS4 / 3;
                break;
            case "prismaS3":
                let panjangAlasPrismaS3 = document.getElementById("panjangAlasPrismaS3").value;
                let tinggiAlasPrismaS3 = document.getElementById("tinggiAlasPrismaS3").value;
                let tinggiPrismaS3 = document.getElementById("tinggiPrismaS3").value;
                volume = (panjangAlasPrismaS3 * tinggiAlasPrismaS3 / 2) * tinggiPrismaS3 ;
                break;
            case "bola":
                let jari2Bola = document.getElementById("jari2Bola").value;
                volume = 4 * jari2Bola * jari2Bola * jari2Bola * Math.PI / 3;
                break;
        }

        // hasil volume
        document.getElementById("output").innerHTML = "Volume = " + volume;
    }
