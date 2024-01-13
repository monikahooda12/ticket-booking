var hospitalListing;
var doctorListing;
var countryListing;
var cityListing ;

const API_URL = "https://www.globalmvt.com/api/medical-tourism-apis.php?type=";


function callApi(url) {
  return fetch(API_URL + url)
    .then(function (e) {
      return e.json();
    })
    .then(function (e) {
      if (e.status === 200) {
        return e.data;
      }
    })
    .then(function (e) {
      return e;
    })
    .catch(function (err) {
      return "there is error in api";
    });
}


async function callData() {



  await callApi("hospitalListing")
    .then(function (e) {
      console.log(e, 'hospi')
      hospitalListing = e

    })
    .catch(function (err) {
      return "there is error in api";
    });

  await callApi("doctorListing")
    .then(function (e) {
      // console.log(e, 'DOCT')
      // doctorListing[doctorListing.length] = e 
      doctorListing = e
    })

  await callApi("city")
    .then(function (e) {
      // console.log(e, 'city') 
      cityListing = e
    })


    .catch(function (err) {
      return "there is error in api";
    });

    await callApi("country")
    .then(function (e) {
      console.log(e, 'country') 
      countryListing = e
    })
    .catch(function (err) {
      return "there is error in api";
    });

  printArrayResponse(hospitalListing, 'hospital_listing')

}


callData()



function printArrayResponse(arr) {
  var html = ``;
  var count = 1;
  for (i = 0; i < arr.length; i++) {
    // console.log(i.hospital_city);
    html += ` <tr>
    <th scope="col">${count}</th>
    <th scope="col">${arr[i].hospital_name}</th> 
    <th scope="col">${getcityName(arr[i].hospital_city)}</th> 
    <th scope="col">${getCountryName(arr[i].hospital_city)}</th> 
  

</tr>`;
    count++;
  }
  document.getElementById("hospital_listing").innerHTML = html;
}

function getcityName(idd) {
  // console.log(idd)
  for(var a of cityListing){
    if(a.id == idd){
      // console.log(a.id);
      return a.title
    }
  }
}


function getCountryName(idd) {
  // console.log(idd)
  for(var a of countryListing){
    if(a.id == idd){
      // console.log(a.country_name);
      return a.country_name
    }
  }
}



