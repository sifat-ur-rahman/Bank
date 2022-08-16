
document.getElementById('btn-submit').addEventListener('click', function () {
    const emailFied = document.getElementById('user-email')
    const email = emailFied.value;

    const passwordFild = document.getElementById('user-password')
    const password = passwordFild.value

    if (email === 'sifat@rahman.com' && password === '27rahman') {
        window.location.href = 'bank.html'
    }
    else {
        alert('Input Right Passwort')
    }
})