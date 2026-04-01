// using this able to get reports in cnlsoe
// function openLaptopReport(){

// var config = {
//   app_name: "core-asset-manager",
//   reportLinkName: "All_Laptops" 

// };
// ZOHO.CREATOR.META.getReports(config).then(function (response) {
//   console.log(response.reports);

// });
// }


function openLaptopReport() {
  window.top.location.href =
    "https://creatorapp.zoho.in/weboappdiscovery126/core-asset-manager/#Report:All_Laptops";
}

function openMouseReport() {
  window.top.location.href =
    "https://creatorapp.zoho.in/weboappdiscovery126/core-asset-manager#Report:All_Mouse";
}


function openHeadphoneReport() {
  window.top.location.href =
    "https://creatorapp.zoho.in/weboappdiscovery126/core-asset-manager#Report:All_Headphones";
}


function openLicenseReport() {
  window.top.location.href =
    "https://creatorapp.zoho.in/weboappdiscovery126/core-asset-manager#Report:All_Licenses";
}


function openOtherReport() {
  window.top.location.href =
    "https://creatorapp.zoho.in/weboappdiscovery126/core-asset-manager#Report:Other_Report";
}

