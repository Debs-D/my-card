var state = {
  name: 'Deborah Adeyemi',
  role: 'Frontend Developer',
  bio: 'Passionate about building clean, accessible interfaces. I love turning complex problems into simple, beautiful solutions. Currently exploring design systems and component-driven development workflows.',
  location: 'Lagos, Nigeria',
  status: 'online',
  following: false
};

var nameEl          = document.getElementById('profile-name');
var bioEl           = document.getElementById('profile-bio');
var bioToggle       = document.getElementById('bio-toggle');
var roleEl          = document.querySelector('[data-testid="test-profile-role"]');
var locationEl      = document.querySelector('[data-testid="test-profile-location"] span:last-child');
var statusDot       = document.getElementById('status-indicator');
var followBtn       = document.getElementById('follow-button');
var editBtn         = document.getElementById('edit-button');
var editForm        = document.getElementById('edit-form');
var editCancelBtn   = document.getElementById('edit-cancel-button');
var editSaveBtn     = document.getElementById('edit-save-button');
var editNameInput   = document.getElementById('edit-name-input');
var editRoleInput   = document.getElementById('edit-role-input');
var editBioInput    = document.getElementById('edit-bio-input');
var editLocationInput = document.getElementById('edit-location-input');
var editStatusSelect  = document.getElementById('edit-status-select');

function applyStatus(status) {
  state.status = status;
  statusDot.className = 'status-dot ' + status;
  var labels = { online: 'Online', busy: 'Busy', away: 'Away', offline: 'Offline' };
  statusDot.setAttribute('aria-label', 'Status: ' + (labels[status] || status));
  statusDot.title = labels[status] || status;
}

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
  var current = followerEl.textContent;
  var num = parseFloat(current) * (current.includes('k') ? 1000 : 1);
  num = state.following ? num + 1 : num - 1;
  followerEl.textContent = num >= 1000 ? (num / 1000).toFixed(1) + 'k' : String(num);
});

document.querySelector('[data-testid="test-profile-message-button"]').addEventListener('click', function () {
  alert('Message feature coming soon!');
});

editBtn.addEventListener('click', function () {
  editNameInput.value = state.name;
  editRoleInput.value = state.role;
  editBioInput.value = state.bio;
  editLocationInput.value = state.location;
  editStatusSelect.value = state.status;
  editForm.classList.remove('hidden');
  editBtn.hidden = true;
  editNameInput.focus();
});

editCancelBtn.addEventListener('click', function () {
  editForm.classList.add('hidden');
  editBtn.hidden = false;
  editBtn.focus();
});

editSaveBtn.addEventListener('click', function () {
  var newName     = editNameInput.value.trim();
  var newRole     = editRoleInput.value.trim();
  var newBio      = editBioInput.value.trim();
  var newLocation = editLocationInput.value.trim();
  var newStatus   = editStatusSelect.value;

  if (newName)     { state.name = newName;         nameEl.textContent = newName; }
  if (newRole)     { state.role = newRole;         roleEl.textContent = newRole; }
  if (newBio)      { state.bio  = newBio;          bioEl.textContent  = newBio; }
  if (newLocation) { state.location = newLocation; locationEl.textContent = newLocation; }

  applyStatus(newStatus);

  bioEl.classList.remove('expanded');
  bioToggle.setAttribute('aria-expanded', 'false');
  bioToggle.textContent = 'Show more';

  editForm.classList.add('hidden');
  editBtn.hidden = false;
  editBtn.focus();
});

applyStatus(state.status);