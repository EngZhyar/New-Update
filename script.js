window.addEventListener('load', function() {
    // Simulate loading time (adjust as needed)
    setTimeout(function() {
        const loading = document.getElementById('loading-screen');
        if (loading) {
            loading.style.display = 'none';
        }
    }, 2000); // 2 seconds delay
});