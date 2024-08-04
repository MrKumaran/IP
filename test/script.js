document.getElementById('promptField').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        this.value = '';
    }
});
