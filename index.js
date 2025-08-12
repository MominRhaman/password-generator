function gen() {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*';

    let pw='';
    for (let i = 0; i < 10; i++) pw += chars[Math.floor(Math.random() * chars.length)];
    
    document.getElementById('pw').value = pw;
    document.getElementById('msg').textContent = "This is your Password: ";
}