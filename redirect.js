let countdown = 5;
const countdownTimer = document.getElementById('countdown-timer');

function updateCountdown() {
    countdown--;
    countdownTimer.textContent = countdown;

    if (countdown === 0) {
        window.location.href = 'dashboard.html';
    } else {
        setTimeout(updateCountdown, 1000);
    }
}

setTimeout(updateCountdown, 1000);
