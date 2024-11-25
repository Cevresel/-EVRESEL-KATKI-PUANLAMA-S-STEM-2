let historyStack = []; // Geri dönüş için geçmişi tutar

function navigate(page) {
    const content = document.getElementById('content');
    const backButton = document.getElementById('backButton');
    
    // Sayfayı geçmişe kaydet
    historyStack.push(content.innerHTML);

    if (page === 'home') {
        content.innerHTML = `
            <h2>Hoş Geldiniz!</h2>
            <p>Çevresel katkınızı görmek için yukarıdaki menüyü kullanın.</p>`;
    } else if (page === 'info') {
        content.innerHTML = `
            <h2>Çevresel Katkı Puanlama Sistemi Nedir?</h2>
            <p>Bu proje, öğrencilerin geri dönüşüm bilinci kazanmasını sağlar...</p>`;
    } else if (page === 'login') {
        content.innerHTML = `
            <h2>Giriş Yap</h2>
            <form onsubmit="login(event)">
                <label>Kullanıcı Adı:</label><br>
                <input type="text" id="username" required><br><br>
                <label>Şifre:</label><br>
                <input type="password" id="password" required><br><br>
                <button type="submit">Giriş</button>
            </form>`;
    } else if (page === 'register') {
        content.innerHTML = `
            <h2>Kayıt Ol</h2>
            <form onsubmit="register(event)">
                <label>E-posta:</label><br>
                <input type="email" id="email" required><br><br>
                <label>Şifre:</label><br>
                <input type="password" id="newPassword" required><br><br>
                <button type="submit">Kayıt Ol</button>
            </form>`;
    }

    backButton.style.display = historyStack.length > 0 ? 'block' : 'none';
}

function goBack() {
    const content = document.getElementById('content');
    const backButton = document.getElementById('backButton');

    if (historyStack.length > 0) {
        content.innerHTML = historyStack.pop();
    }

    backButton.style.display = historyStack.length > 0 ? 'block' : 'none';
}

function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'Mustafa Kemal' && password === '1881') {
        alert('Giriş başarılı!');
    } else {
        alert('Hatalı kullanıcı adı veya şifre.');
    }
}

function register(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('newPassword').value;
    alert(`Kayıt başarılı! E-posta: ${email}`);
}
