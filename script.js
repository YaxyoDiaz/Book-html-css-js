// Объект книги
const book = {
  title: 'IT',
  author: 'Stephen King',
  year: 2023,
  pages: 300,
  currentPage: 0,

  // Метод для чтения книги
  read(pages) {
    this.currentPage += pages;
    if (this.currentPage > this.pages) {
      this.currentPage = this.pages;
    }
    this.updateUI();
  },

  minus(pages) {
    this.currentPage -= pages;
    if (this.currentPage < 0) {
      this.currentPage = 0; // Corrected this line
    }
    this.updateUI();
  },

  // Метод для получения прогресса
  getProgress() {
    return (this.currentPage / this.pages) * 100;
  },

  // Метод обновления UI
  updateUI() {
    document.getElementById('bookCurrentPage').textContent = this.currentPage;
    document.getElementById('bookProgress').textContent =
      this.getProgress().toFixed(2) + '%';

    // Обновляем прогресс-бар
    document.getElementById('progressFill').style.width =
      this.getProgress() + '%';
  },
};

// Объект телефона
const phone = {
  brand: 'Samsung',
  model: 'Galaxy S21',
  battery: 100,

  // Метод для звонков
  call(minutes) {
    this.battery -= minutes;
    if (this.battery < 0) {
      this.battery = 0;
    }
    this.updateUI();
  },

  // Метод для зарядки телефона
  charge(percent) {
    this.battery += percent;
    if (this.battery > 100) {
      this.battery = 100;
    }
    this.updateUI();
  },

  // Метод для отображения статуса батареи
  getBatteryStatus() {
    return this.battery;
  },

  // Метод обновления UI
  updateUI() {
    document.getElementById('phoneBattery').textContent = this.battery + '%';
  },
};

// Функции для взаимодействия с HTML
function readBook(pages) {
  book.read(pages);
}

function minusBook(pages) {
  book.minus(pages);
}

function makeCall(minutes) {
  phone.call(minutes);
}

function chargePhone(percent) {
  phone.charge(percent);
}
