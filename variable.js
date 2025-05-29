// // console.warn("Ini Adalah Peringatan!");
// // console.error("Ini Adalah Error!");
// // console.info("Ini Adalah Info!");
// // console.table([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// // const angka = 10;
// // let nama = "HIMPTI MINI BOOTCAMP!";

// // console.log(angka);
// // alert(nama);

// // let nama =  prompt("Masukkan Nama Anda!");
// // let umur =  prompt("Masukkan Umur Anda!");

// // if(umur >= 18){
// //     alert(`Maaf ${nama} Anda Ketuaan`);
// // }else{
// //     alert(`Maaf ${nama} Anda Belum Dewasa`);
// // }

// // function hitungTotal(harga, qty){
// //     let total = harga * qty;
// //     return total;
// // }

// const hitungTotal = (harga, qty) => harga * qty;

// let harga = prompt("Masukkan Angka Nilai Dasar!");
// let qty = prompt("Masukkan Angka Pengali!");


// alert(`Hasil Perkalian ${harga} dan ${qty} adalah ${hitungTotal(harga, qty)}`);



// // for(let i = mulai; i <= sampai; i++){
// //     if(i % 2 == 0){
// //         console.log(`${i} adalah bilangan genap`);
// //     }else{
// //         console.log(`${i} adalah bilangan ganjil`);
// //     }
// // }

// const user = {
//     name : "Cindy Cangcimen",
//     alamat : "Pengkal",
//     umur : 24,
//     status_jomblo : true 
// };
// console.log(user);


// let nilai = "2500";
// const pengali = 500;

// nilai = parseInt(nilai);

// console.log(penambahNilai(nilai,pengali));



// const listNilai = [
//     "2","3",5,6,7
// ]; // 23

// const penambahNilai = (nilaiSebelum, nilaiPenambah) => {
//    return parseInt(nilaiSebelum) + parseInt(nilaiPenambah) 
// };

// let total = 0;
// listNilai.forEach((n, i)=> {
//     total = penambahNilai(total,n);
//     // console.log(n);
// });

// console.log(total);


// const user = {
//     name : "Cindy Cangcimen",
//     alamat : "Pengkal",
//     umur : 24,
//     status_jomblo : true 
// };
// // console.log(user);


// const { name, alamat } = user;

// console.log(name);
// console.log(user.name);
// console.log(user['name']);

// const listData = [1,2,3,4,5];
// const listBaru = [ ...listData , 6,7,8,9, 10];

// console.log(listData);
// console.log(listBaru);


// const loadDataFromApi = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
//     const data = await res.json();
//     console.log({data});
//     // const {address, company} = data;
//     // console.log(address);
//     // console.log(company);
// }
// loadDataFromApi();


const tombolAmbilData = async (id) => {
    try {
        document.getElementById('tampilan_data').style.display = 'none';
        document.getElementById('loader').style.display = 'block';
        let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await res.json();
        
        const {address, username, name, phone} = data;
        const {street, city, } = address;

        document.getElementById('name').innerHTML = name;
        document.getElementById('phone').innerHTML = phone;
        document.getElementById('username').innerHTML = username;
        document.getElementById('street').innerHTML = street;
        document.getElementById('city').innerHTML = city;

        // alert('Data Berhasil Diambil');
        document.getElementById('tampilan_data').style.display = 'block';
    } catch (error) {
        console.error('Error fetching data:', error);
        alert('Data Gagal Diambil');
    }finally{
        document.getElementById('loader').style.display = 'none'; // menutup loader setelah data diambi
    }
}


const loadDataList = async () => {
    try {
        // Show loader while fetching data
        document.getElementById('loader').style.display = 'block';
        
        // Fetch user data from API
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        // if (!response.ok) {
        //     throw new Error('Network response was not ok');
        // }
        const users = await response.json();
        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            const { id, name } = user;
            const listItem = document.createElement('li');
            if( i % 2 == 0 ){
                listItem.innerHTML = `<a style="color:green" href="#" onclick="tombolAmbilData(${id})">${name} - GENAP</a>`;
            }else{
                listItem.innerHTML = `<a style="color:red" href="#" onclick="tombolAmbilData(${id})">${name} - GANJIL</a>`;
            }
            document.getElementById('list_data').appendChild(listItem);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        alert('Data Gagal Diambil');
    } finally {
        // Hide loader after operation completes
        document.getElementById('loader').style.display = 'none';
    }
}

loadDataList();
