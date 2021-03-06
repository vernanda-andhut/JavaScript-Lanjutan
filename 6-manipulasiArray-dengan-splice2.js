//contoh penggunaan splice() untuk menghapus isi array

function contohSplice2(){
    var kota = ["palembang", "jambi", "pagar alam", "lampung", "bogor"];

    console.log("sebelum menggunakan splice");
    console.log(kota);

    console.log("\n");

    console.log("setelah dihapus menggunakan splice");
    var kota1 = kota;
    kota1.splice(1,2);   //untuk menghapus isi array menggunakan splice, penulisannya nama variable disambung titik masukkan isi yang ingin dihapus berdasar index kemudian koma dan masukkan jumlah yang akan dihapus

    return kota;
}

console.log(contohSplice2());

//output
/*
sebelum menggunakan splice
[ 'palembang', 'jambi', 'pagar alam', 'lampung', 'bogor' ]


setelah dihapus menggunakan splice
[ 'palembang', 'lampung', 'bogor' ]
*/