// index.js

const readline = require('readline');

// Tạo interface để đọc dữ liệu từ terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Mảng để lưu 5 số
const numbers = [];

// Hàm đệ quy để nhập 5 số từ người dùng
function inputNumbers(index) {
  rl.question(`Nhập số thứ ${index + 1}: `, (input) => {
    const number = parseFloat(input);

    // Kiểm tra xem đầu vào có phải là số hợp lệ hay không
    if (!isNaN(number)) {
      numbers.push(number);

      // Nếu đã nhập đủ 5 số, thì sắp xếp và hiển thị kết quả
      if (numbers.length === 5) {
        sortAndDisplayNumbers();
        rl.close();
      } else {
        // Nếu chưa đủ, tiếp tục nhập số tiếp theo
        inputNumbers(index + 1);
      }
    } else {
      console.log('Vui lòng nhập một số hợp lệ.');
      // Nếu đầu vào không hợp lệ, yêu cầu nhập lại số đó
      inputNumbers(index);
    }
  });
}

// Hàm sắp xếp và hiển thị số
function sortAndDisplayNumbers() {
  const sortedNumbers = numbers.sort((a, b) => a - b);
  console.log('Số đã sắp xếp từ nhỏ đến lớn:', sortedNumbers);
}

// Bắt đầu nhập số
inputNumbers(0);
