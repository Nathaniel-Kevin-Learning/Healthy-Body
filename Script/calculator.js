let error = false;
let editFlag = false;

// if (localStorage.length == 1) {
//   index++;
// }

// array of object
let dataShow = [];
// localStorage.removeItem("0");
// localStorage.removeItem("1");

function render() {
  dataShow = [];
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    value = JSON.parse(value);
    // console.log(typeof value);
    dataShow.push(value);
  }
}

render();
// console.log(dataShow);

// function to add into local storage
function setObjectInLocalStorage(key, obj) {
  localStorage.setItem(key, JSON.stringify(obj));
}

/**
 * 
 * Rumus brosca
 * 
// ! berdasarkan gender 
Untuk wanita, rumus cara menghitung berat badan ideal yang bisa dipakai, yakni:
{tinggi badan (cm) – 100} – {(tinggi badan (cm) - 100) x 15%}

Sementara untuk pria, cara menghitung berat badan ideal, rumus yang bisa dipakai adalah  menggunakan rumus;
{tinggi badan (cm) – 100} – {(tinggi badan (cm) – 100) x 10%}

// ! cara hitung bmi
Contoh perhitungan jika berat badan Anda adalah 53kg dengan tinggi badan 1.60m. Coba kalikan tinggi badan dalam kuadrat terlebih dulu. 1.60m kuadrat = 2.56. Lalu masukkan dalam rumus, 53 : 2.56= 20.7, maka nilai BMI Anda sebesar 20.7.

// ! bmi determiner
Angka BMI normal berada pada kisaran 18-25.
Jika angka BMI melebihi 25, kamu memiliki berat badan berlebih.
Sementara itu, jika angka BMI berada di bawah 18 berarti berat badan kurang.
BMI sudah melebihi angka 40 atau bisa di bilang obse

// ! Umur di bawah 20
Bobot tubuh ideal akan bervariasi dari satu individu ke individu lainnya. Sebagai referensi umum, berat ideal pada remaja perempuan dapat berkisar antara 45 hingga 70 kilogram atau lebih, tergantung pada tinggi tubuh dan faktor-faktor individu.

Sementara itu, berat ideal pada remaja laki-laki juga bervariasi, tetapi biasanya berada dalam kisaran 50 hingga 80 kilogram atau lebih, bergantung pada faktor-faktor seperti tinggi badan dan pertumbuhan.
 */
function calculateBMI(age, weight, height, gender) {
  let result = [];
  let messageBMI = [
    "It's determined that you are underweight, eat more healthy and nutrient food",
    "It's determined that you have a healthy weight, keep it up",
    "It's determined you're overweight please eat least junk food, eat sufficiently, and eat more vegetable",
    "It's determined you are obese please eat less, get some workout, and eat more fruits and vegetable",
  ];

  let heightInMeter = height / 100;
  let heightSquare = heightInMeter * heightInMeter;
  let weightData = weight;

  let calculateBMI = weightData / heightSquare;
  calculateBMI = (Math.round(calculateBMI * 100) / 100).toFixed(2);

  if (age < 20) {
    if (gender == "male") {
      if (weightData < 50) {
        // underweight
        let messageResult = messageBMI[0];
        result.push(calculateBMI, messageResult);
      } else if (weightData <= 80 && weight >= 50) {
        // healthy
        let messageResult = messageBMI[1];
        result.push(calculateBMI, messageResult);
      } else if (weightData > 80) {
        // overweight
        let messageResult = messageBMI[2];
        result.push(calculateBMI, messageResult);
      }
    }
    if (gender == "female") {
      if (weightData < 50) {
        // underweight
        let messageResult = messageBMI[0];
        result.push(calculateBMI, messageResult);
      } else if (weightData <= 80 && weight >= 50) {
        // healthy
        let messageResult = messageBMI[1];
        result.push(calculateBMI, messageResult);
      } else if (weightData > 80) {
        // overweight
        let messageResult = messageBMI[2];
        result.push(calculateBMI, messageResult);
      }
    }
  } else {
    // ini perhitungan bmi plus ideal weight nya juga
    if (gender == "male") {
      // {tinggi badan (cm) – 100} – {(tinggi badan (cm) – 100) x 10%}
      // todo ideal weight
      let idealWeightBMI = height - 100 - (height - 100) * 0.1;
      console.log(idealWeightBMI);
      if (calculateBMI < 18) {
        // underweight
        let messageResult =
          messageBMI[0] + ". " + `you're ideal weight is ${idealWeightBMI}`;
        result.push(calculateBMI, messageResult);
      } else if (calculateBMI >= 18 && calculateBMI <= 25) {
        // healthy
        let messageResult =
          messageBMI[1] + ". " + `you're ideal weight is ${idealWeightBMI}`;
        result.push(calculateBMI, messageResult);
      } else if (calculateBMI > 25 && calculateBMI < 40) {
        // overweight
        let messageResult =
          messageBMI[2] + ". " + `you're ideal weight is ${idealWeightBMI}`;
        result.push(calculateBMI, messageResult);
      } else {
        // Obesitas sudah
        let messageResult =
          messageBMI[3] + ". " + `you're ideal weight is ${idealWeightBMI}`;
        result.push(calculateBMI, messageResult);
      }
    }
    if (gender == "female") {
      // {tinggi badan (cm) – 100} – {(tinggi badan (cm) - 100) x 15%}
      // todo ideal weight
      let idealWeightBMI = height - 100 - (height - 100) * 0.15;
      console.log(idealWeightBMI);
      if (calculateBMI < 18) {
        // underweight
        let messageResult =
          messageBMI[0] + ". " + `you're ideal weight is ${idealWeightBMI}`;
        result.push(calculateBMI, messageResult);
      } else if (calculateBMI >= 18 && calculateBMI <= 25) {
        // healthy
        let messageResult =
          messageBMI[1] + ". " + `you're ideal weight is ${idealWeightBMI}`;
        result.push(calculateBMI, messageResult);
      } else if (calculateBMI > 25 && calculateBMI < 40) {
        // overweight
        let messageResult =
          messageBMI[2] + ". " + `you're ideal weight is ${idealWeightBMI}`;
        result.push(calculateBMI, messageResult);
      } else {
        // Obesitas sudah
        let messageResult =
          messageBMI[3] + " " + `you're ideal weight is ${idealWeightBMI}`;
        result.push(calculateBMI, messageResult);
      }
    }
  }

  return result;
  //? result output array [bmi number, message of the data]
}

// console.log(calculateBMI(21, 63, 180, "male"));

document.addEventListener("DOMContentLoaded", function () {
  let dataForm = document.forms["data-form"];
  // console.log(dataForm);
  dataForm.addEventListener("submit", getDataForm);

  // let dataSubmit = document.getElementById("submitButton");
  // dataSubmit.addEventListener("click", getDataForm);

  function getDataForm(event) {
    let index = localStorage.length + 1;
    console.log(localStorage.length, "Length local storage");
    event.preventDefault();
    let form = document.forms["data-form"];

    // Accessing form data
    let formData = new FormData(form);
    // Creating an object to store form data
    let formDataObject = {};
    // Iterating over form data and populating the object
    formData.forEach(function (value, key) {
      formDataObject[key] = value;
    });

    let alertName = document.getElementById("alert-name");
    let alertAge = document.getElementById("alert-age");
    let alertWeight = document.getElementById("alert-weight");
    let alertHeight = document.getElementById("alert-height");
    let alertGender = document.getElementById("alert-gender");

    if (
      !document.getElementById("name").value ||
      !document.getElementById("age").value ||
      !document.getElementById("weight").value ||
      !document.getElementById("height").value ||
      !document.getElementById("gender").value
    ) {
      error = true;
      if (!document.getElementById("name").value) {
        alertName.style.display = "block";
        console.log("Please insert your name");
      }
      if (!document.getElementById("age").value) {
        alertAge.style.display = "block";
      }
      if (!document.getElementById("weight").value) {
        alertWeight.style.display = "block";
      }
      if (!document.getElementById("height").value) {
        alertHeight.style.display = "block";
      }
      if (!document.getElementById("gender").value) {
        alertGender.style.display = "block";
      }
    } else {
      // Logging form data object
      alertName.style.display = "none";
      alertAge.style.display = "none";
      alertWeight.style.display = "none";
      alertHeight.style.display = "none";
      alertGender.style.display = "none";

      // todo getting data from calculateBMI
      let nameData = document.getElementById("name").value;
      let ageData = document.getElementById("age").value;
      let weightData = document.getElementById("weight").value;
      let heightData = document.getElementById("height").value;
      let genderData = document.getElementById("gender").value;
      let dataBMI = calculateBMI(ageData, weightData, heightData, genderData);

      //   saving data into local storage

      if (editFlag) {
        let id = document.getElementById("index").value;
        let dataToStorage = {
          id: id.toString(),
          name: nameData,
          age: ageData,
          bmi: dataBMI[0],
          message: dataBMI[1],
          weight: weightData,
          height: heightData,
          gender: genderData,
        };
        // console.log("Hit edit");
        editFlag = false;
        document.getElementById("submitButton").style.display = "block";
        document.getElementById("editButton").style.display = "none";
        setObjectInLocalStorage(id, dataToStorage);
        document.getElementById("index").value = 0;
      } else {
        let dataToStorage = {
          id: index.toString(),
          name: nameData,
          age: ageData,
          bmi: dataBMI[0],
          message: dataBMI[1],
          weight: weightData,
          height: heightData,
          gender: genderData,
        };
        console.log("Hit submit");
        setObjectInLocalStorage(index, dataToStorage);
        console.log(index, "index");
        //   Adding the index manually
      }

      // Documenting the data
      document.getElementById("name").value = "";
      document.getElementById("age").value = "";
      document.getElementById("weight").value = "";
      document.getElementById("height").value = "";
      document.getElementById("gender").value = "";
      console.log(formDataObject);
      cetakData();
    }
  }

  cetakData();
});

// Testing print data
function cetakData() {
  render();
  document.getElementById("dataTable").innerHTML = "";
  console.log(dataShow, "< data show");
  for (let i = 0; i < dataShow.length; i++) {
    let data = dataShow[i];
    let Name = `<td class="px-6 py-4 whitespace-no-wrap">${data.name}</td>`;
    let bmi = `<td>${data.bmi}</td>`;
    let message = `<td class="px-8 py-4 whitespace-wrap">${data.message} </td>`;
    let btnAction = `<td class="flex px-3 py-4 whitespace-no-wrap">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onclick="updateFunction(${data.id})" >Edit</button>
    <button id="deleteButton" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onclick="deleteFunction(${data.id})">Delete</button>
    </td>`;

    document.getElementById(
      "dataTable"
    ).innerHTML += `<tr>${Name}${bmi}${message}${btnAction}</tr>`;
  }
}

function deleteFunction(id) {
  if (editFlag) {
    editFlag = false;
    document.getElementById("submitButton").style.display = "block";
    document.getElementById("editButton").style.display = "none";

    document.getElementById("name").value = ``;
    document.getElementById("age").value = ``;
    document.getElementById("weight").value = ``;
    document.getElementById("height").value = ``;
    document.getElementById("gender").value = ``;
  }
  localStorage.removeItem(id.toString());
  render();
  cetakData();
}

function updateFunction(id) {
  if (editFlag) {
    editFlag = false;
    document.getElementById("submitButton").style.display = "block";
    document.getElementById("editButton").style.display = "none";

    document.getElementById("name").value = ``;
    document.getElementById("age").value = ``;
    document.getElementById("weight").value = ``;
    document.getElementById("height").value = ``;
    document.getElementById("gender").value = ``;
  } else {
    editFlag = true;
    let data = localStorage.getItem(id.toString());

    document.getElementById("submitButton").style.display = "none";
    document.getElementById("editButton").style.display = "block";

    data = JSON.parse(data);
    console.log(data);

    document.getElementById("name").value = `${data.name}`;
    document.getElementById("age").value = `${data.age}`;
    document.getElementById("weight").value = `${data.weight}`;
    document.getElementById("height").value = `${data.height}`;
    document.getElementById("gender").value = `${data.gender}`;
    document.getElementById("index").value = id;
  }
}

function getAllDataFromStorage() {
  let data = {};
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    data[key] = value;
  }
  return data;
}

// let allData = getAllDataFromStorage();
// console.log(allData, "data");

function sortingBy() {
  let sorting = document.getElementById("sortBMI").value;
  console.log(dataShow);
  if (sorting.length > 0) {
    if (sorting == "asc") {
      dataShow.sort(function (a, b) {
        return a.bmi - b.bmi;
      });
    } else if (sorting == "desc") {
      dataShow.sort(function (a, b) {
        return b.bmi - a.bmi;
      });
    }

    document.getElementById("dataTable").innerHTML = "";
    console.log(dataShow, "< data show");
    for (let i = 0; i < dataShow.length; i++) {
      let data = dataShow[i];
      console.log(data, "< data");
      let Name = `<td class="px-6 py-4 whitespace-no-wrap">${data.name}</td>`;
      let bmi = `<td>${data.bmi}</td>`;
      let message = `<td class="px-8 py-4 whitespace-wrap">${data.message} </td>`;
      let btnAction = `<td class="flex px-3 py-4 whitespace-no-wrap">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onclick="updateFunction(${data.id})" >Edit</button>
    <button id="deleteButton" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onclick="deleteFunction(${data.id})">Delete</button>
    </td>`;

      document.getElementById(
        "dataTable"
      ).innerHTML += `<tr>${Name}${bmi}${message}${btnAction}</tr>`;
    }
  } else {
    render();
    cetakData();
  }
}

function findName() {
  let searchData = document.getElementById("Search").value;
  // console.log(searchData.value);

  console.log(searchData, "<SEARCH");
  let object = dataShow.filter(function (data) {
    let lowerCase = data.name.toLowerCase();

    return lowerCase.includes(searchData);
  });

  if (object.length > 0) {
    // console.log("Jackpot");
    document.getElementById("dataTable").innerHTML = "";
    for (let i = 0; i < object.length; i++) {
      let data = object[i];
      console.log(object, "< object data");
      let Name = `<td class="px-6 py-4 whitespace-no-wrap">${data.name}</td>`;
      let bmi = `<td>${data.bmi}</td>`;
      let message = `<td class="px-8 py-4 whitespace-wrap">${data.message} </td>`;
      let btnAction = `<td class="flex px-3 py-4 whitespace-no-wrap">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" onclick="updateFunction(${data.id})" >Edit</button>
    <button id="deleteButton" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onclick="deleteFunction(${data.id})">Delete</button>
    </td>`;
      document.getElementById(
        "dataTable"
      ).innerHTML += `<tr>${Name}${bmi}${message}${btnAction}</tr>`;
    }

    document.getElementById("Search").value = "";
  } else {
    cetakData();
  }
}
