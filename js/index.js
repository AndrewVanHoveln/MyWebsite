console.log("hello world");

const resumeButton = document.getElementById('resume-button');

resumeButton.addEventListener('click', function() {
    window.location.href = './resume.html';
});

const githubButton = document.getElementById('github-button');
githubButton.addEventListener('click', function() {
    window.location.href = 'https://github.com/AndrewVanHoveln/';
});