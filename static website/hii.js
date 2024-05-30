document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const course = document.getElementById('course').value;
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;

    const feedbackItem = document.createElement('div');
    feedbackItem.className = 'feedbackItem';
    feedbackItem.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Rating:</strong> ${rating}</p>
        <p><strong>Comments:</strong> ${comments}</p>
    `;

    document.getElementById('feedbackList').appendChild(feedbackItem);

    document.getElementById('feedbackForm').reset();
});