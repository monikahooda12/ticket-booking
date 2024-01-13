 // https://www.globalmvt.com/api/medical-tourism-apis.php?type=hospitalListing
    // https://www.globalmvt.com/api/medical-tourism-apis.php?type=doctorListing
    // https://www.globalmvt.com/api/medical-tourism-apis.php?type=treatmentListing
    // https://www.globalmvt.com/api/medical-tourism-apis.php?type=specialityListing
    // https://www.globalmvt.com/api/medical-tourism-apis.php?type=country
    // https://www.globalmvt.com/api/medical-tourism-apis.php?type=city
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
    // .then(function (e) {
    //   return e;
    // })
    .catch(function (err) {
      return "there is error in api";
    });
}

var hospitalListing;
var doctorListing;
var cityListing;
var countryListing;
var image ;

async function callData(){

 await callApi("hospitalListing")
    .then(function (e) {
     // console.log(e, 'hospi') 
      hospitalListing = e 
      
    })
    .catch(function (err) {
      return "there is error in api";
    });

    await callApi("doctorListing")
    .then(function (e) {
      // console.log(e, 'DOCT')
      // doctorListing[doctorListing.length] = e 
      doctorListing= e
    })

    await callApi("city")
    .then(function (e) {
      // console.log(e, 'city') 
      cityListing= e 
    })
    await callApi("country")
    .then(function (e) {
       console.log(e, 'country') 
      countryListing= e
      
    })

    await callApi("image")
    .then(function(e){
      console.log(e,'image')
      logo = e
    })
    

    .catch(function (err) {
      return "there is error in api";
    });
    
    printArrayResponse(hospitalListing, 'hospital_listing')

    // console.log(hospitalListing);
}


callData()



function printArrayResponse(arr) {
  var html = ``;
  var count = 1;
  for (i = 0; i < arr.length; i++) {
    // console.log(i);
    html += ` <tr>
    <th scope="col">${count}</th>
    <th scope="col">${arr[i].hospital_name}</th> 
    <th scope="col">${getcityName(arr[i].hospital_city)}</th> 
    <th scope="col">${getcountrynamefromid(getCountryIdFromCityId(arr[i].hospital_city))}</th>
    <th><img src="${getImage(arr[i]['logo'])}" alt="${arr[i]['hospital_name']}" height="100" /></th>

</tr>`;
    count++;
  }
  document.getElementById("hospital_listing").innerHTML = html;
}


function getcityName(id){
  for(var a of cityListing){
    if(a.id==id){
      return a.title
    }
  }
}
 

 function getCountryIdFromCityId(id) {
 	for(var eachVal of cityListing){
 		if(eachVal.id == id) {
 			return eachVal.country_id
 		}
 	 }
 }

 function getcountrynamefromid(id){
  for(var a of countryListing ){
    if(a.id==id){
      return a.country_name
    }
  }
 }

 function getImage(url) {
   	if(url) {
  		return url
   	} else {
   		return 'no_image.png'
   	}
   }

// function getcountryName(id){
//   for(var eachVal of countryListing){
// 	if(eachVal.id == id) {
// 		return eachVal.country_name
// 	}
//   }
//   return id
// }

// printArrayResponse(hospitalListing, 'hospital_listing')

//console.log(hospitalListing)
