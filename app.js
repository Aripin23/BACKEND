const {Index, Find, Store, Update, Destroy} = require('./fruitController.js')

const Main = () => {
    console.log('Method Index - Menampilkan Buah')
    Index()

    console.log('\n')
    console.log('Method Find - Menemukan Data Berdasarkan Index Array')
    Find(0)

    console.log('\n')
    console.log('Method Store - Menambahkan Data Buah')
    Store('Pisang')

    console.log('\n')
    console.log('Method Update - Mengubah Data Buah')
    Update(0, 'Alpukat')

    console.log('\n')
    console.log('Method Destroy - Menghapus Data Buah')
    Destroy(1)
}

Main()