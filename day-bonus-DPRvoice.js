// Azwar Coding Challenge 2024
// Bonus
// For LinkedIn
// PEMBAGIAN KURSI di DPR menggunakan METODE SAINT-LAGUE
// 90.000, 75.000, 36.000, 20.000, 15.000 [90000, 75000, 36000, 20000, 15000]

// variabel suara tiap partai
// variabel jumlah kursi

// menghitung nilai kursi sesuai dengan metode SAINTE-LAGUE



//variable kursi tiap partai


// function sainteLague(voices) {
//   let voiceTinggi = voices[0];
//   let devider = 1;
//   let result = 0;
//   for (let i = 0; i < voices.length; i++) {
//     if (voice[i] > voiceTinggi) {
//       voiceTinggi = voice[i];
//       result = voiceTinggi / devider;
//     }
//     console.log(voiceTinggi)
//     devider += 2;
//     console.log(devider)
//   }
//   console.log(voiceTinggi)
//   console.log(result)


//   return result;
// }

// let voice = [90000, 75000, 36000, 20000, 15000];
// console.log(sainteLague(voice))




function alokasiKursiSainteLague(jumlahSuaraPartai, jumlahKursiTersedia) {
  // Hitung kuota awal untuk setiap partai
  let kuotaAwal = jumlahSuaraPartai.map(suara => suara / 1)
  console.log(kuotaAwal)

  // inisialisasi array untuk menyimpan jumlah kursi yang diberikan kepada setiap partai
  let jumlahKursiPartai = new Array(jumlahSuaraPartai.length).fill(0);
  console.log(jumlahKursiPartai)

  // telusuru suara tertinggi
  let kuotaTerbesar = kuotaAwal[0]
  for (let i = 0; i < kuotaAwal.length; i++) {
    if (kuotaAwal[i] > kuotaTerbesar) {
      kuotaTerbesar = kuotaAwal[i];
      jumlahKursiPartai
    }
    console.log(kuotaTerbesar)
  }

  // iterasi untuk mengalokasikan kursi
  for (let i = 1; i < jumlahKursiTersedia; i += 2) {
    console.log(i)
    let pemenang = 0;

  }

  return jumlahKursiPartai;
}

let suaraPartai = [90000, 75000, 36000, 20000, 15000];
let kursiTersedia = 10;

console.log(alokasiKursiSainteLague(suaraPartai, kursiTersedia))