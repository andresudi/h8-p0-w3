// Direction
var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"] 


function dataHandling2(input) {
    // Nambahin El sharawy, provinsi, pria, SMA 
    input.splice(1, 2, "Roman Alamsyah El Sharawy", "Provinsi Bandar Lampung")
    input.splice(4, 1, "Pria", "SMA international Metro")
    console.log(input)
    let bulan = input[3].split("/")
    //console.log(bulan)
    let bulanHuruf = Number(bulan[1])
    
    //console.log(bulanHuruf)

    // jadiin 05 -> MAY
    switch (bulanHuruf) {
        case 1: bulanHuruf = "January"; break;
        case 2: bulanHuruf = "February"; break;
        case 3: bulanHuruf = "March"; break;
        case 4: bulanHuruf = "April"; break;
        case 5: bulanHuruf = "May"; break;
        case 6: bulanHuruf = "June"; break;
        case 7: bulanHuruf = "July"; break;
        case 8: bulanHuruf = "August"; break;
        case 9: bulanHuruf = "September"; break;
        case 10: bulanHuruf = "October"; break;
        case 11: bulanHuruf = "November"; break;
        case 12: bulanHuruf = "December"; break;
        default: { console.log("Invalid Month number\nPlease try again ...."); break; }
    }
    console.log(bulanHuruf)

    // ngesort angka gede ke kecil ( 1989 - 21 - 05)
    bulan.sort(function(value1, value2){
        return value1[1] < value2[2]
    })
   
    // ngebikin jadi ["1989", "21", "05"]
    console.log(bulan)

    // bikin kaya gini ( 1989 - 21 - 05)
    let bulanStrip = bulan.join('-')
    console.log(bulanStrip)

    // Ngebaca Roman Alamsyah doang
    let Alamsyah = input[1].split(" ").slice(0,2).join(" ")
    console.log(Alamsyah)
}
dataHandling2(input)
