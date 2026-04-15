var state = {
  name: 'Deborah Odekunle',
  role: 'Frontend Developer',
  bio: 'Passionate about building clean, accessible interfaces. I love turning complex problems into simple, beautiful solutions. Currently exploring design systems and component-driven development workflows.',
  location: 'Lagos, Nigeria',
  following: false
};

var bioEl     = document.getElementById('profile-bio');
var bioToggle = document.getElementById('bio-toggle');
var followBtn = document.getElementById('follow-button');
var epochEl   = document.getElementById('epoch-time');

function tickTime() {
  epochEl.textContent = Date.now();
  epochEl.setAttribute('datetime', new Date().toISOString());
}
tickTime();
setInterval(tickTime, 1000);

bioToggle.addEventListener('click', function () {
  var expanded = bioEl.classList.toggle('expanded');
  bioToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  bioToggle.textContent = expanded ? 'Show less' : 'Show more';
});

followBtn.addEventListener('click', function () {
  state.following = !state.following;
  followBtn.classList.toggle('following', state.following);
  followBtn.textContent = state.following ? 'Following' : 'Follow';
  followBtn.setAttribute('aria-pressed', state.following ? 'true' : 'false');

  var followerEl = document.getElementById('stat-followers');
  var raw = followerEl.textContent;
  var num = parseFloat(raw) * (raw.includes('k') ? 1000 : 1);
  num = state.following ? num + 1 : num - 1;
  followerEl.textContent = num >= 1000 ? (num / 1000).toFixed(1) + 'k' : String(num);
});

document.querySelector('.btn-message').addEventListener('click', function () {
  alert('Message feature coming soon!');
});