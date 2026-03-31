document.addEventListener('DOMContentLoaded', () => {
    function createSnow() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        
        // Randomize size between 2px and 7px
        const size = Math.random() * 5 + 2 + 'px';
        snowflake.style.width = size;
        snowflake.style.height = size;
        
        // Randomize horizontal position
        snowflake.style.left = Math.random() * 100 + 'vw';
        
        // Randomize fall duration between 5s and 10s
        const duration = Math.random() * 5 + 5 + 's';
        snowflake.style.animationName = 'fall';
        snowflake.style.animationDuration = duration;
        snowflake.style.animationTimingFunction = 'linear';
        snowflake.style.animationIterationCount = 'infinite';
        
        // Randomize starting delay so they don't all fall at once
        snowflake.style.animationDelay = Math.random() * 5 + 's';
        
        document.body.appendChild(snowflake);
    }

    // Create 50 snowflakes
    for (let i = 0; i < 50; i++) {
        createSnow();
    }
});
