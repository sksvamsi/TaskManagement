document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
  
    taskForm.addEventListener('submit', async function(event) {
      event.preventDefault();
  
      const formData = new FormData(taskForm);
      const taskData = {};
      formData.forEach((value, key) => {
        taskData[key] = value;
      });
  
      try {
        const response = await fetch('/submitTask', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(taskData)
        });
        if (!response.ok) {
          throw new Error('Failed to submit task');
        }
        alert('Task submitted successfully!');
        taskForm.reset();
      } catch (error) {
        console.error('Error submitting task:', error);
        alert('Failed to submit task. Please try again later.');
      }
    });
  });
  