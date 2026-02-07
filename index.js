const http = require('http')


let persons = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040123456",
    address: "Vainiotie 4, Joensuu"
  },
  {
    id: "2",
    name: "juha Hiltunen",
    number: "050648376",
    address: "kiulutie 4, Joensuu"
  },
  {
    id: "3",
    name: "Aaro Vaalanne",
    number: "019279887",
    address: "kartanotie 4.Joensuu"
  },
   {
    id: "4",
    name: "Jussi Sarkkinen",
    number: "747535662",
    address: "Siilikuja 4, Joensuu"
   }, 
    {
    id: "5",
    name: "Jaana Vorimo",
    number: "050646646",
    address: "Ruoritie 7, Joensuu"
   }, 
    {
    id: "6",
    name: "Seppo Vorimo",
    number: "044287878",
    address: "Saitolantie 3, Kauhajoki"
   },
    {
    id: "7",
    name: "Seppo Saarniniemi",
    number: "050737373",
    address: "Kaukolantie 3, Salo"
   },
   {
    id: "8",
    name: "Julius Grönroos ",
    number: "046282828",
    address: "Mannilantie 23, Järvenpää"
   },
   {
    id: "9",
    name: "Matti Räsänen ",
    number: "013090987",
    address: "Lammenranta 7, Paukkaja"
   },
   {
    id: "9",
    name: "Ismo Tiainen ",
    number: "0138886665",
    address: "Utrantie 7, Joensuu"
   }
]
const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' })
  response.end(JSON.stringify(persons))
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)