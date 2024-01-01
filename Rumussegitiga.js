function calculate(event) {
    event.preventDefault();

    var category = document.getElementById('category').value;
    var base = parseFloat(document.getElementById('base').value);
    var height = parseFloat(document.getElementById('height').value);
    var perimeter = parseFloat(document.getElementById('perimeter').value);

    if (!isNaN(base) && !isNaN(height)) {
        var result = 0;
        var resultContainer = document.getElementById('result');

        if (category === 'area') {
            result = 0.5 * base * height; 
            resultContainer.innerText = 'Hasil Luas Segitiga: ' + result;
        } else if (category === 'perimeter') {
            if (!isNaN(perimeter)) {
                result = base + height + perimeter; 
                resultContainer.innerText = 'Hasil Keliling Segitiga: ' + result;
            } else {
                resultContainer.innerText = 'Masukkan nilai yang valid untuk keliling';
            }
        }

        resultContainer.style.border = '1px solid #ccc';
        resultContainer.style.borderRadius = '8px';
        resultContainer.style.padding = '10px';
    } else {
        alert('Masukkan nilai yang valid untuk alas dan tinggi');
    }
}

function resetForm() {
    document.getElementById('categoryForm').reset();
    document.getElementById('result').innerText = ''; 
}

function selectShape(shape) {
    console.log('Selected Shape:', shape);
}
