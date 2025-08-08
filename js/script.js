// Okul verileri (database yerine geçecek)
const schoolsData = {
    // Indigo Sapat Primary School
    "SCH-001": {
        id: "SCH-001",
        name: "Indigo Sapat Primary",
        logo: "assets/logos/spt.png",
        totalStudents: 365,
        previousYearStudents: 334,
        renewed: 172,
        newStudents: 92,
        preRegistration: 8,
        notconfirmed: 94,
        leftStudents: 13,
        discountRate: "8%",
        contractAverage: "3 861 $",
        growthRate: "9.3%",
        reportPeriod: "Август 2025",
        classes: [
            {
                name: "1-А Классы",
                capacity: 24,
                enrolled: 13,
                preRegistration: 3,
                notconfirmed: 0,
                available: 8
            },
            {
                name: "2-А Классы",
                capacity: 24,
                enrolled: 13,
                preRegistration: 0,
                notconfirmed: 5,
                available: 6
            },
            {
                name: "2-Б Классы",
                capacity: 24,
                enrolled: 13,
                preRegistration: 0,
                notconfirmed: 9,
                available: 2
            },
            {
                name: "2-В Классы",
                capacity: 24,
                enrolled: 17,
                preRegistration: 0,
                notconfirmed: 6,
                available: 1
            },
            {
                name: "2-Г Классы",
                capacity: 24,
                enrolled: 12,
                preRegistration: 0,
                notconfirmed: 0,
                available: 12
            },
            {
                name: "2-Д Классы",
                capacity: 24,
                enrolled: 24,
                preRegistration: 0,
                notconfirmed: 0,
                available: 0
            },
            {
                name: "2-Е Классы",
                capacity: 24,
                enrolled: 16,
                preRegistration: 0,
                notconfirmed: 4,
                available: 4
            },
            {
                name: "3-А Классы",
                capacity: 24,
                enrolled: 5,
                preRegistration: 0,
                notconfirmed: 7,
                available: 12
            },
            {
                name: "3-Б Классы",
                capacity: 24,
                enrolled: 16,
                preRegistration: 0,
                notconfirmed: 5,
                available: 3
            },
            {
                name: "3-В Классы",
                capacity: 24,
                enrolled: 9,
                preRegistration: 0,
                notconfirmed: 6,
                available: 9
            },
            {
                name: "4-А Классы",
                capacity: 24,
                enrolled: 18,
                preRegistration: 0,
                notconfirmed: 4,
                available: 2
            },
            {
                name: "4-Б Классы",
                capacity: 24,
                enrolled: 12,
                preRegistration: 0,
                notconfirmed: 7,
                available: 5
            },
            {
                name: "4-В Классы",
                capacity: 24,
                enrolled: 16,
                preRegistration: 0,
                notconfirmed: 5,
                available: 3
            },
            {
                name: "4-Г Классы",
                capacity: 24,
                enrolled: 8,
                preRegistration: 0,
                notconfirmed: 6,
                available: 10
            },
            {
                name: "5-А Классы",
                capacity: 24,
                enrolled: 15,
                preRegistration: 0,
                notconfirmed: 3,
                available: 6
            },
            {
                name: "5-Б Классы",
                capacity: 24,
                enrolled: 15,
                preRegistration: 0,
                notconfirmed: 7,
                available: 2
            },
            {
                name: "5-В Классы",
                capacity: 24,
                enrolled: 17,
                preRegistration: 0,
                notconfirmed: 2,
                available: 5
            },
            {
                name: "6-А Классы",
                capacity: 24,
                enrolled: 13,
                preRegistration: 0,
                notconfirmed: 10,
                available: 1
            },
            {
                name: "6-Б Классы",
                capacity: 24,
                enrolled: 11,
                preRegistration: 1,
                notconfirmed: 12,
                available: -1
            }
        ],
        notes: [
            ""
        ],
        goals: [
            "The school's total student count must exceed 380 by August 30th."
        ],
        lastUpdate: "08.08.2025"
    },
    // Indigo Asylkech Girls School
    "SCH-002": {
        id: "SCH-002",
        name: "Indigo Asylkech Girls",
        logo: "assets/logos/asylkech.png",
        totalStudents: 92,
        previousYearStudents: 51,
        renewed: 38,
        newStudents: 43,
        preRegistration: 1,
        notconfirmed: 10,
        leftStudents: 3,
        discountRate: "19.24%",
        contractAverage: "4 442 $",
        growthRate: "80.4%",
        reportPeriod: "Август 2025",
        classes: [
            {
                name: "Grade 5-A",
                capacity: 18,
                enrolled: 10,
                preRegistration: 1,
                notconfirmed: 0,
                available: 7
            },
            {
                name: "Grade 6-A",
                capacity: 18,
                enrolled: 14,
                preRegistration: 0,
                notconfirmed: 4,
                available: 0
            },
            {
                name: "Grade 6-B",
                capacity: 18,
                enrolled: 2,
                preRegistration: 0,
                notconfirmed: 0,
                available: 16
            },
            {
                name: "Grade 7-A",
                capacity: 18,
                enrolled: 11,
                preRegistration: 0,
                notconfirmed: 3,
                available: 4
            },
            {
                name: "Grade 7-B",
                capacity: 18,
                enrolled: 13,
                preRegistration: 0,
                notconfirmed: 0,
                available: 5
            },
            {
                name: "Grade 7-C",
                capacity: 18,
                enrolled: 18,
                preRegistration: 0,
                notconfirmed: 0,
                available: 0
            },
            {
                name: "Grade 8-A",
                capacity: 18,
                enrolled: 14,
                preRegistration: 0,
                notconfirmed: 3,
                available: 1
            },
            {
                name: "Grade 8-B",
                capacity: 18,
                enrolled: 3,
                preRegistration: 0,
                notconfirmed: 0,
                available: 15
            },
            {
                name: "Grade 9-A",
                capacity: 18,
                enrolled: 9,
                preRegistration: 0,
                notconfirmed: 0,
                available: 9
            }
        ],
        notes: [
            "...."
        ],
        goals: [
            "The school's total student count must exceed 120 by August 30th."
        ],
        lastUpdate: "08.08.2025"
    },
    // Indigo Sapat International School
    "SCH-003": {
        id: "SCH-003",
        name: "Indigo Sapat International",
        logo: "assets/logos/int.png",
        totalStudents: 25,
        previousYearStudents: 0,
        renewed: 0,
        newStudents: 25,
        leftStudents: 0,
        discountRate: "12,51%",
        contractAverage: "3 937 $",
        growthRate: "100%",
        reportPeriod: "Август 2025",
        classes: [
            {
                name: "Grade 7-A",
                capacity: 24,
                enrolled: 1,
                preRegistration: 0,
                available: 23
            },
            {
                name: "Grade 7-Б",
                capacity: 24,
                enrolled: 7,
                preRegistration: 0,
                available: 17
            },
            {
                name: "Grade 8-Б",
                capacity: 24,
                enrolled: 6,
                preRegistration: 0,
                available: 18
            },
            {
                name: "Grade 9-Б",
                capacity: 24,
                enrolled: 1,
                preRegistration: 0,
                available: 23
            },
            {
                name: "Grade 10-Б",
                capacity: 24,
                enrolled: 6,
                preRegistration: 0,
                available: 20
            },
            {
                name: "Grade 11-Б",
                capacity: 24,
                enrolled: 3,
                preRegistration: 0,
                available: 21
            }
        ],
        notes: [
            "...."
        ],
        goals: [
            "The school's total student count must exceed 150 by August 30th."
        ],
        lastUpdate: "08.08.2025"
    },
    // Indigo Prime Academy
    "SCH-004": {
        id: "SCH-004",
        name: "Indigo Prime Academy",
        logo: "assets/logos/prime.png",
        totalStudents: 20,
        previousYearStudents: 2,
        renewed: 0,
        newStudents: 18,
        leftStudents: 0,
        discountRate: "7,22%",
        contractAverage: "4 501$",
        growthRate: "100%",
        reportPeriod: "Август 2025",
        classes: [
            {
                name: "Grade 7-A",
                capacity: 16,
                enrolled: 10,
                preRegistration: 1,
                available: 5 
            },
            {
                name: "Grade 8-А",
                capacity: 16,
                enrolled: 3,
                preRegistration: 0,
                available: 13
            },
            {
                name: "Grade 9-А",
                capacity: 16,
                enrolled: 2,
                preRegistration: 0,
                available: 14
            },
            {
                name: "Grade 10-А",
                capacity: 16,
                enrolled: 2,
                preRegistration: 1,
                available: 13
            },
            {
                name: "Grade 11-А",
                capacity: 16,
                enrolled: 1,
                preRegistration: 0,
                available: 15
            }
        ],
        notes: [
            "...."
        ],
        goals: [
            "The school's total student count must exceed 74 by August 30th."
        ],
        lastUpdate: "08.08.2025"
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
            <div class="metric-value">${school.notconfirmed}</div>
            <div class="metric-label">Каттоону жаңыртпагандар</div>
        </div>
        <div class="metric-card">
            <div class="metric-value">${school.leftStudents}</div>
            <div class="metric-label">Кеткендер</div>
        </div>
        <div class="metric-card">
            <div class="metric-value">${school.discountRate}</div>
            <div class="metric-label">Арзандатуу пайызы </div>
        </div>

        <div class="metric-card">
            <div class="metric-value">${school.growthRate}</div>
            <div class="metric-label">Жылдык өсүү пайызы</div>
        </div>
        <div class="metric-card">
            <div class="metric-value">${school.reportPeriod}</div>
            <div class="metric-label">Эсеп берүү мезгили</div>
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
                    <div class="stat-value">${cls.notconfirmed}</div>
                    <div class="stat-label">Каттоону жаңыртпагандар</div>
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
