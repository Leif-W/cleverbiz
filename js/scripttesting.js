// testing GET method for table
let myArray = []
	
$.ajax({
    method:'GET',
    url:'stripe.json',
    success:function(response){
        myArray = response
        buildTable(myArray)
        console.log(myArray)
    }
})



function buildTable(data){
    let table = document.getElementById('stripe')

    for (let i = 0; i < data.length; i++){
        let row = `<tr>
                        <td>${data[i].Campaign}</td>
                        <td>${data[i].Platform}</td>
                        <td>${data[i].Expense}</td>
                  </tr>`
        table.innerHTML += row
    }
}


// fetch('stripe.json')
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     appendData(data);
//   })
//   .catch(function (err) {
//     console.log('error: ' + err);
//   });

// function appendData(data) {
//   let dataSet = data;

//   function generateTableHead(table, data2) {
//     let thead = table.createTHead();
//     let row = thead.insertRow();
//     for (let key of data2) {
//       let th = document.createElement("th");
//       let text = document.createTextNode(key);
//       th.appendChild(text);
//       row.appendChild(th);
//     }
//   }

//   function generateTable(table, data2) {
//     for (let element of data2) {
//       let row = table.insertRow();

//       for (key in element) {
//         let cell = row.insertCell();
//         let text = document.createTextNode(element[key]);
//         cell.appendChild(text);
//       }
//     }
//   }

//   let table = document.getElementById("stripe");
//   let data2 = Object.keys(dataSet[0]);

//   generateTable(table, dataSet);
//   generateTableHead(table, data2);
// }

// // Paypal data fetch
// fetch('paypal.json')
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         appendData2(data);
//     })
//     .catch(function (err) {
//         console.log('error: ' + err);
//     });

// function appendData2(data) {
//     let dataSet = data;

// function generateTableHead(table, data2) {
//     let thead = table.createTHead();
//     let row = thead.insertRow();
//     for (let key of data2) {
//       let th = document.createElement("th");
//       let text = document.createTextNode(key);
//       th.appendChild(text);
//       row.appendChild(th);
//     }
//   }
  
//   function generateTable(table, data2) {
//     for (let element of data2) {
//       let row = table.insertRow();

//       for (key in element) {
//         let cell = row.insertCell();
//         let text = document.createTextNode(element[key]);
//         cell.appendChild(text);
//       }
//     }
//   }
  
//   let table = document.getElementById("payPal");
//   let data2 = Object.keys(dataSet[0]);
 
//   generateTable(table, dataSet);
//   generateTableHead(table, data2);
// }
