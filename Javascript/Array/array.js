//array oluşturma

let items=[10, 20, 30, 40, 50]
console.log(items)
// array icerisideki eleman sayisini bul

console.log(items.length)

//array icersindeki ilk elemena bul

console.log(items[0])

//array icerisindeki son elemanı bul 
console.log(items[items.length-1])

//degisken bilgisinin array olup olmadıgını bul 
console.log(typeof(items))//tipini verir
console.log(Array.isArray(items))

//array in sonuna eleman ekle
items.push("sevda")

//array in basina eleman ekle
items.unshift('engin')

//array deki son elemani sil
let lastItem=items.pop()
console.log(lastItem)

//array icerisindeki ilk elemenai sil
let firstItem=items.shift()
console.log(firstItem)

//array icerisindeki herhangi bir elemanin degerini degistir.
items[2]=1
console.log(items[2])
console.log(items)

///////////////////////////////
items=[10, 20, 30, 40, 50]
let fameleUsers=["Ayse", "Fatma", "Sevda"]
let maleUsers=["Ahmet", "Mehmet", "Engin"]

items.unshift(fameleUsers);//famaleUsers dizisini 0. index e ekler
items.push(maleUsers);//maleUsers dizisini sonuncu index e ekler
console.log(items); //[["Ayse", "Fatma", "Sevda"], 10, 20, 30, 40, 50, ["Ahmet", "Mehmet", "Engin"]]

//ayse ye ulasmak icin
console.log(items[0][0])

//array icerisindeki ogeyi ayırma

let newItems=items.splice(2,4);
console.log('new Items:',newItems) //  20, 30, 40, 50 yani 2. den başla 4 oge al

//array icerisindeki ogenin index bilgisini ulma indexof('value')

items.push('ipsum')
console.log(items.indexOf('ipsum'))

//array kopyalamak
let copyItems=items.slice()

//array icerisindeki bilgiyi string e cevirme

console.log(items.toString())

//istedigimiz index bilgisine oge eklemek
items.splice(items.length,0,'melisa')
console.log(items)


