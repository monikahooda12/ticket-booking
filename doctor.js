

 let doctorListing= []

 const API_URL = ' https://www.globalmvt.com/api/medical-tourism-apis.php?type'

 function callApi(url) {
   return fetch(API_URL + url)
       .then(function (e) {
           return e.json()
       })
       .then(function (e) {
           if (e.status === 200) {
               return e.data
           }
       })
       // .then(function (e) {
           
       // })
       .catch(function (err) {
           return 'there is error in api'
       })
}


callApi('doctorListing')
.then(function (e) {
 printArrayResponse(e, "doctor_listing")
   })
   .catch(function (err) {
     return 'there is error in api'
 })

 function getdata(e){
   console.log(e)
   
 }
console.log(doctorListing);




