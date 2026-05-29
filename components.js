

// Floating message widget
document.body.insertAdjacentHTML('beforeend', `
  <button class="floating-msg-btn" onclick="toggleMsg()">💬 Bize Yazın</button>
  <div class="floating-msg-box" id="msgBox">
    <div class="floating-msg-header">
      <span> Mesaj Gönder</span>
      <button onclick="toggleMsg()">✕</button>
    </div>
    <form class="floating-msg-body" action="https://api.web3forms.com/submit" method="POST">
      <input type="hidden" name="access_key" value="5296c95f-c440-4fd2-8196-bbab98356d0d">
      <input type="hidden" name="subject" value="Bayraklı Ordu Eczanesi - Hızlı Mesaj">
      <input type="text" name="name" placeholder="Adınız Soyadınız" required>
      <input type="tel" name="phone" placeholder="Telefon" inputmode="numeric" pattern="[0-9]*" oninput="this.value = this.value.replace(/[^0-9]/g, '')">
      <input type="email" name="email" placeholder="E-posta">
      <textarea name="message" placeholder="Mesajınız..." rows="3" required></textarea>
      <button type="submit">Gönder</button>
    </form>
  </div>
`);

window.toggleMsg = function() {
  document.getElementById('msgBox').classList.toggle('open');
};

// Dark mode
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
}

window.toggleDark = function() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
};

