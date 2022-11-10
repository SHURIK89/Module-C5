const jsonString = `
{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
}
`
const list = JSON.parse(jsonString);
const student = list.list

const result = {}
result.list = student

console.log(result)