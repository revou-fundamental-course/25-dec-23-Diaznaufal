// script.js
function calculate(event) {
    event.preventDefault();

    var category = document.getElementById('category').value;
    var base = parseFloat(document.getElementById('base').value);
    var height = parseFloat(document.getElementById('height').value);
    var perimeter = parseFloat(document.getElementById('perimeter').value);

    if (!isNaN(base) && !isNaN(height)) {
        var result = 0;

        if (category === 'area') {
            result = 0.5 * base * height; // Rumus luas segitiga
        } else if (category === 'perimeter') {
            // Tambahkan keliling jika kategori adalah keliling segitiga
            result = base + height + perimeter; // Rumus keliling segitiga
        }

        var resultContainer = document.getElementById('result');
        resultContainer.innerText = 'Hasil: ' + result;
        resultContainer.style.border = '1px solid #ccc';
        resultContainer.style.borderRadius = '8px';
        resultContainer.style.padding = '10px';
    } else {
        alert('Masukkan nilai yang valid untuk alas dan tinggi');
    }
}

function selectShape(shape) {
    console.log('Selected Shape:', shape);
}

function toggleInputs() {
    var category = document.getElementById('category').value;
    var perimeterInput = document.getElementById('perimeter');

    // Sembunyikan/munculkan input keliling berdasarkan kategori
    perimeterInput.style.display = category === 'area' ? 'none' : 'block';
}
