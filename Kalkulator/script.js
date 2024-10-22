let currentOperand = '';
let operation = null;

const currentDisplay = document.getElementById('current');

// Fungsi untuk menampilkan angka di layar
function appendNumber(number) {
    currentOperand += number;
    updateDisplay();
}

// Fungsi untuk menambahkan tanda desimal
function appendDecimal() {
    if (!currentOperand.includes('.')) {
        currentOperand += '.';
        updateDisplay();
    }
}

// Fungsi untuk membersihkan tampilan
function clearDisplay() {
    currentOperand = '';
    operation = null;
    updateDisplay();
}

// Fungsi untuk menghapus karakter terakhir
function deleteLast() {
    currentOperand = currentOperand.slice(0, -1);
    updateDisplay();
}

// Fungsi untuk mengatur operasi
function setOperation(op) {
    if (currentOperand === '') return;
    if (operation !== null) {
        calculate();
    }
    operation = op;
    currentOperand += ' ' + operation + ' '; // Tampilkan simbol operasi
    updateDisplay();
}

// Fungsi untuk menghitung hasil
function calculate() {
    let result;
    const parts = currentOperand.split(' ');
    if (parts.length < 3) return; // Pastikan ada 2 operand dan 1 operator

    const prev = parseFloat(parts[0]);
    const current = parseFloat(parts[2]);
    const op = parts[1];

    if (isNaN(prev) || isNaN(current)) return;

    switch (op) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentOperand = result.toString();
    updateDisplay();
}

// Fungsi untuk memperbarui tampilan layar
function updateDisplay() {
    currentDisplay.value = currentOperand;
}



    currentOperand = result.toString();
    updateDisplay();
