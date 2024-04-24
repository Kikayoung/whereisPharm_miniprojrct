// function openPopup() {
//     $('#popup').show();
// }

// function closePopup() {
//     $('#popup').hide();
// }

// $('#inquiryButton').on('click', openPopup);

// $('#inquiryForm').on('submit', function(event) {
//     $('#popup').hide();
// });

// $('#closeButton').on('click', closePopup);






function openPopup() {
    document.getElementById('inquiryPopup').style.display = 'block'; 
}

function closePopup() {
    document.getElementById('inquiryPopup').style.display = 'none'; 
}

document.getElementById('inquiryButton').addEventListener('click', openPopup); 
document.getElementById('closePopupButton').addEventListener('click', closePopup); 

document.getElementById('inquiryForm').addEventListener('submit', function(event) {
    if (!this.checkValidity()) {
        event.preventDefault(); 
        event.stopPropagation();
    }
    this.classList.add('was-validated'); 
});




function displayFormattedTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    
    const period = hours >= 12 ? '오후' : '오전';
    hours = hours % 12;
    if (hours === 0) {
        hours = 12; 
    }
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

    const formattedTime = ` ${period} ${hours}시 ${formattedMinutes}분입니다.`;
    document.getElementById('currentTime').textContent = formattedTime;
}

document.addEventListener("DOMContentLoaded", displayFormattedTime);

setInterval(displayFormattedTime, 1000);


$('input[name="category"]').change(function() {
    var category = $(this).val();

    pharmacyMarkers.forEach(function(marker) {
        marker.setMap(null);
    });

    if (category === 'pharmacy') {
        pharmacyMarkers.forEach(function(marker) {
            marker.setMap(map);
        });
    }
});