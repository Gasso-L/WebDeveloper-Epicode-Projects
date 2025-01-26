const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
]

//SEARCH BUTTON SCRIPT

//Function that search only by location
const searchOnlyByLocation = (allJobs, userLocation, searchResult) => {
  for (let i = 0; i < allJobs.length; i++) {
    if (allJobs[i].location.toLowerCase().includes(userLocation)) {
      searchResult.result.push(jobs[i]);
      searchResult.countJob++;
    }
  }
  return searchResult;
}

//Function that search only by Title
const searchOnlyByTitle = (allJobs, userTitle, searchResult) => {
  for (let i = 0; i < allJobs.length; i++) {
    if (allJobs[i].title.toLowerCase().includes(userTitle)) {
      searchResult.result.push(jobs[i]);
      searchResult.countJob++;
    }
  }
}

//Function that search for both Title and Position
const searchBothTitlePosition = (allJobs, userTitle, userLocation, searchResult) => {
  for (let i = 0; i < allJobs.length; i++) {
    if (allJobs[i].location.toLowerCase().includes(userLocation) && jobs[i].title.toLowerCase().includes(userTitle)) {
      searchResult.result.push(jobs[i]);
      searchResult.countJob++;
    }
  }
}


const searchJobs = (job, position) => {
  //build my object result
  const searchResultJob = {
    result: [],
    countJob: 0,
  }
  //convert the input strings to lowercase and remove the spaces (spaces on start string and at the end)
  const jobSearch = job.toLowerCase().trim();
  const positionSearch = position.toLowerCase().trim();

 if (jobSearch === "" && positionSearch !== "") {
    //search only by location
    searchOnlyByLocation(jobs, positionSearch, searchResultJob);
  } else if (jobSearch !== "" && positionSearch === "") {
    //search only by title
    searchOnlyByTitle(jobs, jobSearch, searchResultJob);
  } else {
    //search both title and position
    searchBothTitlePosition(jobs, jobSearch, positionSearch, searchResultJob);
  }
  return searchResultJob;
}

//END SEARCH BUTTON SCRIPT


//<<<<<<<< PARTE 2 >>>>>>>>>>

//Selection All Elements on HTML and Create All Elements that i need
const btnSearch = document.querySelector(".btn-searchJob");
const titleValueSearch = document.querySelector("#title");
const locationValueSearch = document.querySelector("#location");
const form = document.querySelector("form");
//Create p elements of input error
const titleError = document.getElementById("title-error-input");
const locationError = document.getElementById("position-error-input");
//Create div element for result
const divResult = document.createElement("div");
divResult.setAttribute("class", "result");
//insert my div on main section
form.appendChild(divResult);
//p element for string not found
const notFoundParagraph = document.createElement("p");
//p element with count job
const countJobParagraph = document.createElement("p");


// START TABLE CREATION

//Function for my Column on table
const columnHead = () => {
  const namecolumns = ["Lavoro", "Luogo"];
  const trElementHead = document.createElement("tr");
  //fill my thead section
  for (let i = 0; i < namecolumns.length; i++) {
    const thElement = document.createElement("th");
    thElement.innerText = namecolumns[i];
    trElementHead.appendChild(thElement);
  }
  return trElementHead;
}

//Function for my table rows 
const columnRows = (rowData, tableBodyResult) => {
  //fill my tbody section
  for (job of rowData) {
    //create tr for each title e location
    const trElementBody = document.createElement("tr");
    Object.keys(job).forEach(chiave => {
      //for key of my obj create and fill td element
      const tdElementBody = document.createElement("td");
      tdElementBody.innerText = job[chiave];
      trElementBody.appendChild(tdElementBody);
    });
    tableBodyResult.appendChild(trElementBody);
  }
  return tableBodyResult;
}

//Funciont Create a Table with result
function createTableJobResult(obj) {
  //create a table element, thead and tbody
  const tableResult = document.createElement("table");
  /* const tableHeadResult = document.createElement("thead"); */
  const tableBodyResult = document.createElement("tbody");
  //From my object retrieve the array content title and position
  const rowsDataObj = obj.result;

  //create my columns
  let head = columnHead();
  //columnHead(tableHeadResult);
  tableResult.appendChild(head);
  //create my row elements
  columnRows(rowsDataObj, tableBodyResult);
  tableResult.appendChild(tableBodyResult);

  return tableResult;
}
// END TABLE CREATION

//FUNCTION CLICK ON BUTTON
const launchSearchButton = (event) => {
  event.preventDefault();
  //check input value
  const titleInputLenght = titleValueSearch.value.length;
  const locationInputLenght = locationValueSearch.value.length;
  
  // Check empty field
  if (titleInputLenght === 0 && locationInputLenght === 0){
    divResult.innerHTML = "";
    const emptyfieldParagraph = document.createElement("p");
    emptyfieldParagraph.innerText = "Devi compilare almeno uno dei due campi per la ricerca";
    divResult.appendChild(emptyfieldParagraph);
  } else {
    let validTitle = true;
    let validLocation = true;

    //Check for the job title input
    if (titleInputLenght !== 0 && titleInputLenght < 3) {
      titleError.classList.remove("p-hidden"); //remove my class p-hidden for p element to show my error on title input
      validTitle = false; //Set false if job title is not valid
      divResult.innerHTML = "";
      
    } else if (titleInputLenght >= 3){
      //if title job input it's ok hidden my class .p-hidden
      titleError.classList.add("p-hidden");
    }

    //Check for the job location input
    if (locationInputLenght !== 0 && locationInputLenght < 2){
      locationError.classList.remove("p-hidden"); //remove my class p-hidden for p element to show my error on location input
      validLocation = false; //Set false if job location is not valid
      divResult.innerHTML = "";    
    } else if (locationInputLenght > 2){
      locationError.classList.add("p-hidden"); 
    } else if (locationInputLenght === 2){
      //if location input contains two characters add character "," to location
      locationError.classList.add("p-hidden");
      locationValueSearch.value += ",";
    }

    //Search if at least one of two fields is valid
    if ((validTitle && titleInputLenght >= 3 && validLocation) || (validLocation && locationInputLenght >= 2 && validTitle)){
    const resultObjJob = searchJobs(titleValueSearch.value, locationValueSearch.value);
    if (resultObjJob.countJob === 0) {
      locationError.classList.add("p-hidden");
      titleError.classList.add("p-hidden");
      divResult.innerHTML = "";
      notFoundParagraph.innerText = "Mi dispiace, nessun lavoro trovato in base ai dati inseriti";
      divResult.appendChild(notFoundParagraph);

    } else {
      divResult.innerHTML = "";
      locationError.classList.add("p-hidden");
      titleError.classList.add("p-hidden");
      countJobParagraph.innerText = `Totale Lavori Trovati: ${resultObjJob.countJob}`;
      divResult.appendChild(countJobParagraph);
      const tableResult = createTableJobResult(resultObjJob);
      divResult.appendChild(tableResult);
    }
  }
  } 
}

//Event Listener for my click button
btnSearch.addEventListener("click", launchSearchButton)