// to get the input field value from all the cart input field
function getElement(elementId) {
    const elementInputField = document.getElementById(elementId);
    const elementInputString = elementInputField.value;
    const elementInputValue = parseFloat(elementInputString);
    elementInputField.value = '';
    return elementInputValue;
}
// to display the area calculation value in the area calculation area
function areaDisplay(count, area, title) {
    const areaField = document.getElementById('area-table');
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td><span>${count}</span>.</td>
    <td>${title}</td>
    <td><span>${area}</span>cm<sup>2</sup></td>
    <td>
    <button class="bg-sky-600 text-white px-2 py-1 rounded-lg">Covert to m<sup>2</sup></button>
    </td>    
  `;
    areaField.appendChild(tr);
}