// Okul verileri (database yerine geçecek)
const schoolsData = {
    // Indigo Sapat Primary School
    "SCH-001": {
        id: "SCH-001",
        name: "Indigo Sapat Primary",
        logo: "assets/logos/spt.png",
        totalStudents: 358,
        previousYearStudents: 334,
        renewed: 242,
        newStudents: 79,
        leftStudents: 13,
        discountRate: "8%",
        totalFee: "000 сом",
        growthRate: "7,19%",
        reportPeriod: "Июль 2025",
        classes: [
            {
                name: "1-А Классы",
                capacity: 24,
                enrolled: 10,
                preRegistration: 3,
                available: 11,
                occupancy: "54%"
            },
            {
                name: "2-А Классы",
                capacity: 24,
                enrolled: 13,
                preRegistration: 7,
                available: 4,
                occupancy: "81%"
            },
            {
                name: "2-Б Классы",
                capacity: 24,
                enrolled: 11,
                preRegistration: 11,
                available: 2,
                occupancy: "75%"
            },
            {
                name: "2-В Классы",
                capacity: 24,
                enrolled: 16,
                preRegistration: 8,
                available: 0,
                occupancy: "100%"
            },
            {
                name: "2-Г Классы",
                capacity: 24,
                enrolled: 11,
                preRegistration: 0,
                available: 13,
                occupancy: "46%"
            },
            {
                name: "2-Д Классы",
                capacity: 24,
                enrolled: 24,
                preRegistration: 0,
                available: 0,
                occupancy: "100%"
            },
            {
                name: "2-Е Классы",
                capacity: 24,
                enrolled: 12,
                preRegistration: 4,
                available: 8,
                occupancy: "67%"
            },
            {
                name: "3-А Классы",
                capacity: 24,
                enrolled: 3,
                preRegistration: 7,
                available: 14,
                occupancy: "25%"
            },
            {
                name: "3-Б Классы",
                capacity: 24,
                enrolled: 15,
                preRegistration: 4,
                available: 5,
                occupancy: "79%"
            },
            {
                name: "3-В Классы",
                capacity: 24,
                enrolled: 8,
                preRegistration: 10,
                available: 6,
                occupancy: " 75%"
            },
            {
                name: "4-А Классы",
                capacity: 24,
                enrolled: 17,
                preRegistration: 5,
                available: 2,
                occupancy: "92%"
            },
            {
                name: "4-Б Классы",
                capacity: 24,
                enrolled: 10,
                preRegistration: 10,
                available: 4,
                occupancy: "75%"
            },
            {
                name: "4-В Классы",
                capacity: 24,
                enrolled: 16,
                preRegistration: 3,
                available: 5,
                occupancy: "83%"
            },
            {
                name: "4-Г Классы",
                capacity: 24,
                enrolled: 8,
                preRegistration: 7,
                available: 9,
                occupancy: "62%"
            },
            {
                name: "5-А Классы",
                capacity: 24,
                enrolled: 15,
                preRegistration: 4,
                available: 5,
                occupancy: "79%"
            },
            {
                name: "5-Б Классы",
                capacity: 24,
                enrolled: 15,
                preRegistration: 7,
                available: 2,
                occupancy: "88%"
            },
            {
                name: "5-В Классы",
                capacity: 24,
                enrolled: 17,
                preRegistration: 2,
                available: 5,
                occupancy: "92%"
            },
            {
                name: "6-А Классы",
                capacity: 24,
                enrolled: 11,
                preRegistration: 11,
                available: 2,
                occupancy: "75%"
            },
            {
                name: "6-Б Классы",
                capacity: 24,
                enrolled: 10,
                preRegistration: 13,
                available: 1,
                occupancy: "71%"
            }
        ],
        notes: [
            "Yeni kayıtların %30'u erken kayıt kampanyasından",
            "2 öğrenci burslu kayıt yaptırdı"
        ],
        goals: [
            "Nisan ayı için 20 yeni kayıt hedefi",
            "İndirim oranını %8'e düşürme"
        ],
        lastUpdate: "22.07.2025"
    },
    // Indigo Asylkech Girls School
    "SCH-002": {
        id: "SCH-002",
        name: "Indigo Asylkech Girls",
        logo: "assets/logos/asylkech.png",
        totalStudents: 91,
        previousYearStudents: 51,
        renewed: 47,
        newStudents: 44,
        leftStudents: 4,
        discountRate: "17,97%",
        totalFee: "000 coм",
        growthRate: "78.43%",
        reportPeriod: "Июль 2025",
        classes: [
            {
                name: "Grade 5-A",
                capacity: 18,
                enrolled: 9,
                preRegistration: 1,
                available: 8,
                occupancy: "50%"
            },
            {
                name: "Grade 6-A",
                capacity: 18,
                enrolled: 13,
                preRegistration: 5,
                available: 0,
                occupancy: "100%"
            },
            {
                name: "Grade 6-B",
                capacity: 18,
                enrolled: 3,
                preRegistration: 0,
                available: 15,
                occupancy: "17%"
            },
            {
                name: "Grade 7-A",
                capacity: 18,
                enrolled: 15,
                preRegistration: 3,
                available: 0,
                occupancy: "100%"
            },
            {
                name: "Grade 7-B",
                capacity: 18,
                enrolled: 12,
                preRegistration: 0,
                available: 6,
                occupancy: "67%"
            },
            {
                name: "Grade 8-A",
                capacity: 18,
                enrolled: 14,
                preRegistration: 4,
                available: 0,
                occupancy: "100%"
            },
            {
                name: "Grade 8-B",
                capacity: 18,
                enrolled: 2,
                preRegistration: 0,
                available: 16,
                occupancy: "11%"
            },
            {
                name: "Grade 9-A",
                capacity: 18,
                enrolled: 9,
                preRegistration: 1,
                available: 8,
                occupancy: "50%"
            }
        ],
        notes: [
            "Yeni kayıtların %40'ı referans yoluyla",
            "3 öğrenci tam burslu"
        ],
        goals: [
            "Nisan ayı için 25 yeni kayıt hedefi",
            "İndirim oranını %10'a düşürme"
        ],
        lastUpdate: "23.07.2025"
    },
    // Indigo Sapat International School
    "SCH-003": {
        id: "SCH-003",
        name: "Indigo Sapat International",
        logo: "assets/logos/int.png",
        totalStudents: 20,
        previousYearStudents: 0,
        renewed: 0,
        newStudents: 20,
        leftStudents: 0,
        discountRate: "8%",
        totalFee: "000 сом",
        growthRate: "100%",
        reportPeriod: "Июль 2025",
        classes: [
            {
                name: "Grade 7-A",
                capacity: 24,
                enrolled: 1,
                preRegistration: 0,
                available: 23,
                occupancy: "4%" 
            },
            {
                name: "Grade 7-Б",
                capacity: 24,
                enrolled: 6,
                preRegistration: 0,
                available: 18,
                occupancy: "25%"
            },
            {
                name: "Grade 8-Б",
                capacity: 24,
                enrolled: 6,
                preRegistration: 0,
                available: 18,
                occupancy: "25%"
            },
            {
                name: "Grade 9-Б",
                capacity: 24,
                enrolled: 1,
                preRegistration: 0,
                available: 23,
                occupancy: "4%"
            },
            {
                name: "Grade 10-Б",
                capacity: 24,
                enrolled: 3,
                preRegistration: 0,
                available: 17,
                occupancy: "12.5%"
            },
            {
                name: "Grade 11-Б",
                capacity: 24,
                enrolled: 2,
                preRegistration: 0,
                available: 22,
                occupancy: "8.3%"
            }
        ],
        notes: [
            "Yeni kayıtların %25'i yurtdışından",
            "5 öğrenci kısmi burslu"
        ],
        goals: [
            "Nisan ayı için 15 yeni kayıt hedefi",
            "İndirim oranını %7'ye düşürme"
        ],
        lastUpdate: "23.07.2025"
    },
    // Indigo Prime Academy
    "SCH-004": {
        id: "SCH-004",
        name: "Indigo Prime Academy",
        logo: "assets/logos/prime.png",
        totalStudents: 15,
        previousYearStudents: 0,
        renewed: 0,
        newStudents: 15,
        leftStudents: 0,
        discountRate: "5%",
        totalFee: "000 сом",
        growthRate: "100%",
        reportPeriod: "Июль 2025",
        classes: [
            {
                name: "Grade 7-A",
                capacity: 16,
                enrolled: 8,
                preRegistration: 1,
                available: 7,
                occupancy: "50%" 
            },
            {
                name: "Grade 8-А",
                capacity: 16,
                enrolled: 1,
                preRegistration: 0,
                available: 15,
                occupancy: "6.25%"
            },
            {
                name: "Grade 9-А",
                capacity: 16,
                enrolled: 2,
                preRegistration: 0,
                available: 14,
                occupancy: "12.5%"
            },
            {
                name: "Grade 10-А",
                capacity: 16,
                enrolled: 2,
                preRegistration: 1,
                available: 13,
                occupancy: "12.5%"
            },
            {
                name: "Grade 11-А",
                capacity: 16,
                enrolled: 1,
                preRegistration: 0,
                available: 15,
                occupancy: "6.25%"
            }
        ],
        notes: [
            "Yeni kayıtların %15'i erken kayıt kampanyasından",
            "1 öğrenci tam burslu"
        ],
        goals: [
            "Nisan ayı için 10 yeni kayıt hedefi",
            "İndirim oranını %4'e düşürme"
        ],
        lastUpdate: "23.07.2025"
    }
};

// Kullanıcı bilgileri
const users = {
    "admin": {
        password: "admin",
        role: "admin",
        name: "Admin"
    },
    "sapat": {
        password: "2526",
        role: "school",
        schoolId: "SCH-001",
        name: "Indigo Sapat Primary"
    },
    "asylkech": {
        password: "2526",
        role: "school",
        schoolId: "SCH-002",
        name: "Indigo Asylkech Girls"
    },
    "int": {
        password: "2526",
        role: "school",
        schoolId: "SCH-003",
        name: "Indigo Sapat International"
    },
    "prime": {
        password: "2526",
        role: "school",
        schoolId: "SCH-004",
        name: "Indigo Prime Academy"
    }
};

// Sayfa yüklendiğinde çalışacak fonksiyon
document.addEventListener('DOMContentLoaded', function() {
    // Giriş sayfası formu
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Dashboard sayfası yüklendiğinde
    if (document.querySelector('.schools-grid')) {
        loadDashboard();
    }
    
    // Okul detay sayfası yüklendiğinde
    if (document.querySelector('.school-detail-header')) {
        loadSchoolDetail();
    }
});

// Giriş işlemi
function handleLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Kullanıcı doğrulama
    if (users[username] && users[username].password === password) {
        // Giriş başarılı, kullanıcı bilgisini sessionStorage'a kaydet
        sessionStorage.setItem('currentUser', JSON.stringify({
            username: username,
            role: users[username].role,
            schoolId: users[username].schoolId,
            name: users[username].name
        }));
        
        // Dashboard sayfasına yönlendir
        window.location.href = 'dashboard.html';
    } else {
        alert('Колдонуучунун аты же сырсөз туура эмес!');
    }
}

// Dashboard yükleme
function loadDashboard() {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    
    if (!currentUser) {
        window.location.href = 'index.html';
        return;
    }
    
    // Header bilgilerini güncelle
    document.querySelector('.header-title').textContent = `Кош Келиңиз, ${currentUser.name}`;
    
    const schoolsGrid = document.querySelector('.schools-grid');
    schoolsGrid.innerHTML = '';
    
    // Okul kartlarını oluştur
    if (currentUser.role === 'admin') {
        // Admin tüm okulları görür
        for (const schoolId in schoolsData) {
            createSchoolCard(schoolsData[schoolId], schoolsGrid);
        }
    } else {
        // Okul kullanıcısı sadece kendi okulunu görür
        createSchoolCard(schoolsData[currentUser.schoolId], schoolsGrid);
    }
}

// Okul kartı oluşturma
function createSchoolCard(school, container) {
    // Değişim yüzdesini hesapla
    const change = ((school.totalStudents - school.previousYearStudents) / school.previousYearStudents * 100).toFixed(1);
    const isPositive = change > 0;
    const isNeutral = change == 0;
    
    const card = document.createElement('div');
    card.className = 'school-card';
    card.dataset.schoolId = school.id;
    
    card.innerHTML = `
        <div class="school-card-header">
            <div class="school-card-logo">
                <img src="${school.logo}" alt="${school.name} Logo">
            </div>
            <h3>${school.name}</h3>
        </div>
        <div class="school-card-body">
            <div class="comparison-stats">
                <div class="comparison-row">
                    <div>
                        <div class="comparison-label">Быйылкы жалпы каттоо саны</div>
                        <div class="comparison-value">${school.totalStudents}</div>
                    </div>
                    <div class="change-indicator ${isPositive ? 'positive' : isNeutral ? 'neutral' : 'negative'}">
                        ${change > 0 ? '↑' : change < 0 ? '↓' : '→'} ${Math.abs(change)}%
                    </div>
                </div>
                <div class="comparison-row">
                    <div>
                        <div class="comparison-label">Өткөн жылдагы жалпы каттоо саны</div>
                        <div class="comparison-value">${school.previousYearStudents}</div>
                    </div>
                    <div class="change-indicator neutral">
                        → 0%
                    </div>
                </div>
            </div>
            <button class="view-details-btn">Толугураак көрүү</button>
        </div>
    `;
    
    container.appendChild(card);
    
    // Detay butonuna tıklama olayı ekle
    card.querySelector('.view-details-btn').addEventListener('click', function() {
        viewSchoolDetails(school.id);
    });
}
// Okul detaylarını görüntüleme
function viewSchoolDetails(schoolId) {
    sessionStorage.setItem('selectedSchool', schoolId);
    window.location.href = 'school.html';
}

// Okul detay sayfasını yükleme
function loadSchoolDetail() {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    const schoolId = sessionStorage.getItem('selectedSchool');
    
    if (!currentUser || !schoolId) {
        window.location.href = 'index.html';
        return;
    }
    
    const school = schoolsData[schoolId];
    
    // Header bilgilerini güncelle
    document.querySelector('.header-title').textContent = school.name;
    document.querySelector('.header-logo img').src = school.logo;
    document.querySelector('.last-update').textContent = `Акыркы жаңыртуу: ${school.lastUpdate}`;
    
    // Okul bilgilerini doldur
    document.querySelector('.school-detail-title h1').textContent = school.name;
    document.querySelector('.school-detail-title img').src = school.logo;
    
    // Metrikleri doldur
    const metricsGrid = document.querySelector('.metrics-grid');
    metricsGrid.innerHTML = `
        <div class="metric-card">
            <div class="metric-value">${school.totalStudents}</div>
            <div class="metric-label">Жалпы каттоо</div>
        </div>
        <div class="metric-card">
            <div class="metric-value">${school.renewed}</div>
            <div class="metric-label">Каттоо жаңыртуу</div>
        </div>
        <div class="metric-card">
            <div class="metric-value">${school.newStudents}</div>
            <div class="metric-label">Жаңы каттоо</div>
        </div>
        <div class="metric-card">
            <div class="metric-value">${school.leftStudents}</div>
            <div class="metric-label">Кеткендер</div>
        </div>
        <div class="metric-card">
            <div class="metric-value">${school.discountRate}</div>
            <div class="metric-label">Скидок</div>
        </div>
        <div class="metric-card">
            <div class="metric-value">${school.totalFee}</div>
            <div class="metric-label">Toplam Ücret</div>
        </div>
        <div class="metric-card">
            <div class="metric-value">${school.growthRate}</div>
            <div class="metric-label">Büyüme Oranı</div>
        </div>
        <div class="metric-card">
            <div class="metric-value">${school.reportPeriod}</div>
            <div class="metric-label">Отчет мезгили</div>
        </div>
    `;
    
    // Sınıf bilgilerini doldur
    const classesContainer = document.querySelector('.classes-container');
    classesContainer.innerHTML = '';
    
    school.classes.forEach(cls => {
        const classItem = document.createElement('div');
        classItem.className = 'class-item';
        classItem.innerHTML = `
            <h3 class="class-title">${cls.name}</h3>
            <div class="class-stats">
                <div class="class-stat">
                    <div class="stat-value">${cls.occupancy}</div>
                    <div class="stat-label">Толуу деңгээли</div>
                </div>
                <div class="class-stat">
                    <div class="stat-value">${cls.capacity}</div>
                    <div class="stat-label">Класстын сыйымдуулугу</div>
                </div>
                <div class="class-stat">
                    <div class="stat-value">${cls.enrolled}</div>
                    <div class="stat-label">Активдүү окуучу</div>
                </div>
                <div class="class-stat">
                    <div class="stat-value">${cls.preRegistration}</div>
                    <div class="stat-label">Алдын ала каттоо</div>
                </div>
                <div class="class-stat">
                    <div class="stat-value">${cls.available}</div>
                    <div class="stat-label">Бош орундар</div>
                </div>
            </div>
        `;
        classesContainer.appendChild(classItem);
    });
    
    // Notları doldur
    const notesList = document.querySelector('.notes-list');
    notesList.innerHTML = '';
    school.notes.forEach(note => {
        const li = document.createElement('li');
        li.textContent = note;
        notesList.appendChild(li);
    });
    
    // Hedefleri doldur
    const goalsList = document.querySelector('.goals-list');
    goalsList.innerHTML = '';
    school.goals.forEach(goal => {
        const li = document.createElement('li');
        li.textContent = goal;
        goalsList.appendChild(li);
    });
}

// Çıkış işlemi
function handleLogout() {
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('selectedSchool');
    window.location.href = 'index.html';
}

// Global olarak erişilebilir hale getir
window.handleLogout = handleLogout;