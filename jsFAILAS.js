// atmetu viska i console log

function getDetail(apiURL) {
    axios.get(apiURL).then(function(response) {
      showDetail(response.data);
    });
  }
  
  function showDetail(data) {
    for (i = 0; i < data.results.length; i++) {
      rezultatas = rezultatas + data.results[i].name + " " + data.results[i].birth_year +  " " + data.results[i].gender + "\n"; // sudedu varda + gimimo diena ir lyti
    }
    if (data.next) {
      getDetail(data.next);
    } else {
      console.log(rezultatas); 
    } 
  }
  var rezultatas = "";
  getDetail("https://swapi.dev/api/people");
  

// paieska virs lenteles
$(document).ready(function(){
  $("#paieska").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#lentele tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

    
// pati lentele ( tik nerandu kodel meta tik 10 eiluciu)
  var url = 'https://swapi.dev/api/people';

function fetchData(url) {
    return fetch(url).then((resp) => resp.json());
}

function constructTableRow(data) {
    var row = document.createElement('tr');
    var { name, birth_year, gender } = data;
    row.appendChild(constructElement('td', name))
    row.appendChild(constructElement('td', birth_year))
    row.appendChild(constructElement('td', gender))
    var btn=document.createElement("button");     
      btn.className = "deletebtn"; 
      btn.title = "Istrinti"; 
      btn.innerHTML = "X";
    row.appendChild(btn)
    return row;
}

function constructElement(tagName, text, cssClasses) {
    var el = document.createElement(tagName);
    var content = document.createTextNode(text);
    el.appendChild(content);
    if (cssClasses) {
       el.classList.add(...cssClasses);
    }
    return el;
}

var naujaLentele = document.getElementById('lentele').getElementsByTagName('tbody')[0];
      
fetchData('https://swapi.dev/api/people/').then((data) => {
    data.results.forEach(result => {
      var row = constructTableRow(result);
      naujaLentele.appendChild(row);
   });
});
// prideti nauja irasa
function addRow()
{
    var name = document.getElementById('name').value;
     var birth_year = document.getElementById('birth_year').value;
      var gender = document.getElementById('gender').value;
      var table = document.getElementsByTagName('table')[0];
      var newRow = table.insertRow(table.rows.length);
      var cel1 = newRow.insertCell(0);
      var cel2 = newRow.insertCell(1);
      var cel3 = newRow.insertCell(2);
      var cel4 = newRow.insertCell(3);
      var btn=document.createElement("button");     
      btn.className = "deletebtn"; 
      btn.title = "Istrinti"; 
      btn.innerHTML = "X";
      cel1.innerHTML = name;
      cel2.innerHTML = birth_year;
      cel3.innerHTML = gender;
      cel4.appendChild(btn);          
}
// Istrinimo mygtukas
$(document).on('click', 'button.deletebtn', function () {
  $(this).closest('tr').remove();
  return false;
});
// // istrinti RANDOM irasa (kitaip nesugalvoju)
// function istrinti() {
//     document.getElementById("lentele").deleteRow(0);
//   }

