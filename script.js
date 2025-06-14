document.getElementById('dob').addEventListener('change', function () {
  const dob = new Date(this.value);
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  document.getElementById('age').value = age > 0 ? age : '';
});

document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('fullName').value.trim();
  const dob = document.getElementById('dob').value;
  const address = document.getElementById('address').value.trim();
  const branch = document.getElementById('branch').value;
  const age = document.getElementById('age').value;
  const message = document.getElementById('message');

  const nameRegex = /^[A-Za-z ]+$/;
  if (!name || !nameRegex.test(name)) {
    return showMessage('Name must only contain alphabets.', 'error');
  }

  if (!dob || new Date(dob) >= new Date()) {
    return showMessage('Enter a valid past date for DOB.', 'error');
  }

  if (address.length < 10) {
    return showMessage('Address must be at least 10 characters.', 'error');
  }

  if (!branch) {
    return showMessage('Please select a branch.', 'error');
  }

  showMessage(`Successfully Registered! Age: ${age}`, 'success');

  // Clear form after success
  this.reset();
  document.getElementById('age').value = '';
});

function showMessage(msg, type) {
  const message = document.getElementById('message');
  message.textContent = msg;
  message.className = type;
}
