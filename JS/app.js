const numPieces = document.querySelector(".number-pieces");
const shipmentServiceType = document.querySelector(".shipment-service-type");
const hsCodes = document.querySelector(".hs-codes");
const weight = document.querySelector(".weight");
const weightUnits = document.querySelector(".weight-units");
const hazardous = document.querySelector(".hazardous");
const checkbox = document.querySelector(".checkbox");
const fullName = document.getElementById("fullName");
const companyName = document.getElementById("companyName");
const pickupInfo = document.getElementById("pickupInfo");
const shippingInfo = document.getElementById("shippingInfo");
const numSkids = document.querySelector(".number-skids");
const skidDimensions = document.querySelector(".skid-dimensions");
const skidTypeWrapper = document.querySelector(".skid-type-wrapper");

let submitBtn = document.querySelector(".submit");
window.addEventListener("DOMContentLoaded", () => {
  let templateSkidTypes = `<input type="text" placeholder="Type: (Skid, Carton, Tube etc)" data-count="0" class="skid-type"><br>
                            <input type="text" placeholder="Type: (Skid, Carton, Tube etc)" data-count="1" class="skid-type"><br>
                            <input type="text" placeholder="Type: (Skid, Carton, Tube etc)" data-count="2" class="skid-type">`;

  let templateSkidDimensions = `<div class="dimensions-wrapper">
                                  <input type="text" placeholder="Length" class="dimensions-input length" data-count="0">
                                  <input type="text" placeholder="Width" class="dimensions-input width" data-count="0">
                                  <input type="text" placeholder="Height" class="dimensions-input height" data-count="0">
                                </div>
                                <div class="dimensions-wrapper">
                                  <input type="text" placeholder="Length" class="dimensions-input length" data-count="1">
                                  <input type="text" placeholder="Width" class="dimensions-input width" data-count="1">
                                  <input type="text" placeholder="Height" class="dimensions-input height" data-count="1">
                                </div>
                                <div class="dimensions-wrapper">
                                  <input type="text" placeholder="Length" class="dimensions-input length" data-count="2">
                                  <input type="text" placeholder="Width" class="dimensions-input width" data-count="2">
                                  <input type="text" placeholder="Height" class="dimensions-input height" data-count="2">
                                </div>`;

  skidTypeWrapper.insertAdjacentHTML("afterbegin", templateSkidTypes);
  skidDimensions.insertAdjacentHTML("afterbegin", templateSkidDimensions);

  displaySkidInputs();
});

function displaySkidInputs() {
  numSkids.addEventListener("input", () => {
    skidTypeWrapper.innerHTML = "";
    skidDimensions.innerHTML = "";
    for (let i = 0; i < numSkids.value; i++) {
      let templateSkidTypes = `<input type="text" placeholder="Type: (Skid, Carton, Tube etc)" data-count="${i}" class="skid-type">`;
      let templateSkidDimensions = `<div class="dimensions-wrapper">
                                    <input type="text" placeholder="Length" class="dimensions-input length" data-count="${i}">
                                    <input type="text" placeholder="Width" class="dimensions-input width" data-count="${i}">
                                    <input type="text" placeholder="Height" class="dimensions-input height" data-count="${i}">
                                  </div>`;
      skidTypeWrapper.insertAdjacentHTML("beforeend", templateSkidTypes);
      skidDimensions.insertAdjacentHTML("beforeend", templateSkidDimensions);
    }
  });
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let inputs = document.querySelectorAll(".dimensions-input");
  let skidTypes = document.querySelectorAll(".skid-type");

  let arrInput = [];
  inputs.forEach((input) => {
    skidTypes.forEach((type, i) => {
      if (input.dataset.count === type.dataset.count) {
        arrInput.push(
          `${type.value} ${i} - ${input.placeholder}: ${input.value}`
        );
      }
    });
  });
});
