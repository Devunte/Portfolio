// Get references to the button and the form
const addTaskBtn = document.getElementById('addTaskBtn');
const taskForm = document.getElementById('taskForm');

// Add event listener to the button
addTaskBtn.addEventListener('click', function() {
  // Toggle the visibility of the form
  if (taskForm.style.display === 'none') {
    taskForm.style.display = 'block';
  } else {
    taskForm.style.display = 'none';
  }
});
