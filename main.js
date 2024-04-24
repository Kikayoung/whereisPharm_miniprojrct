function openPopup() {
    $('#popup').show();
}

function closePopup() {
    $('#popup').hide();
}

$('#inquiryButton').on('click', openPopup);

$('#inquiryForm').on('submit', function(event) {
    $('#popup').hide();
});

$('#closeButton').on('click', closePopup);





function displayCurrentTime() {
    var now = new Date(); 
    var hours = now.getHours(); 
    var minutes = now.getMinutes(); 
    var seconds = now.getSeconds(); 

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var timeString = `${hours}:${minutes}:${seconds}`; // 시:분:초
    document.getElementById('currentTime').textContent = timeString;
}

// 매 초마다 현재 시간 갱신
setInterval(displayCurrentTime, 1000);


function displayCurrentTime() {
    var now = new Date(); 
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds(); 

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var timeString = hours + ':' + minutes + ':' + seconds; // 시:분:초
    document.getElementById('currentTime').textContent = timeString;
}
setInterval(displayCurrentTime, 1000); // 1000ms = 1초


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