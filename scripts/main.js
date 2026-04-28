const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX - 9 + 'px';
    cursor.style.top = e.clientY - 9 + 'px';
});