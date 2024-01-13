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
