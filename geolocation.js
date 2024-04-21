var mapContainer = document.getElementById('map'),
    mapOption = {
        center: new kakao.maps.LatLng(37.484190, 126.896923),
        level: 3
    };

var map = new kakao.maps.Map(mapContainer, mapOption);

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude; // 위도
        var lon = position.coords.longitude; // 경도

        var locPosition = new kakao.maps.LatLng(lat, lon);
        var message = '<div style="padding:5px;">여기에 계신가요?!</div>';

        displayMarker(locPosition, message);
    });
} else {
    var locPosition = new kakao.maps.LatLng(37.484190, 126.896923);
    var message = 'geolocation을 사용할 수 없습니다.';
    displayMarker(locPosition, message);
}

function displayMarker(locPosition, message) {
    var marker = new kakao.maps.Marker({
        map: map,
        position: locPosition,
    });

    var iwContent = message;
    var iwRemoveable = true;

    var infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable,
    });

    infowindow.open(map, marker);
    map.setCenter(locPosition);
}
function loadExternalData() {
    $.ajax({
        url: 'https://apis.data.go.kr/B552657/ErmctInsttInfoInqireService/getParmacyFullDown?serviceKey=H3wVXR0ZoSWzmNinpKwJD5vBljllCZT25lNyCirNGkcArIM0%2FTZF7MhC1Dg9JlRV65mUTwCE88ea6kdoTee46g%3D%3D&pageNo=1&numOfRows=10',
        dataType: 'xml',
        success: function (data) {
            $(data).find('item').each(function () {
                var latitude = parseFloat($(this).find('wgs84Lat').text());
                var longitude = parseFloat($(this).find('wgs84Lon').text());
                var name = $(this).find('dutyName').text();
                var address = $(this).find('dutyAddr').text();
                var phone = $(this).find('dutyTel1').text();
                var mondayStart = $(this).find('dutyTime1s').text();
                var mondayEnd = $(this).find('dutyTime1c').text();

                var latLng = new kakao.maps.LatLng(latitude, longitude);
                var marker = new kakao.maps.Marker({
                    position: latLng,
                    map: map,
                });

                var infoContent = `<div>
                    <strong>${name}</strong><br>
                    ${address}<br>
                    전화: ${phone}<br>
                    <strong>운영 시간:</strong> 월요일 ${mondayStart} - ${mondayEnd}
                </div>`;

                var infoWindow = new kakao.maps.InfoWindow({
                    content: infoContent,
                });

                kakao.maps.event.addListener(marker, 'click', function () {
                    infoWindow.open(map, marker);
                });
            });
        },
        error: function (xhr, status, error) {
            console.error("외부 데이터 로드 실패:", error);
        },
    });
}

loadExternalData();



// 로컬에 저장된 XML 
// function loadExternalData() {
//     $.ajax({
//         url: 'http://localhost:8080/koreapharm.xmls', // XML 파일의 URL
//         dataType: 'xml',
//         success: function (data) {
//             $(data).find('item').each(function () {
//                 var longitude = parseFloat($(this).find('좌표(X)').text());
//                 var latitude = parseFloat($(this).find('좌표(Y)').text());
//                 var name = $(this).find('요양기관명').text();
//                 var address = $(this).find('주소').text();
//                 var phone = $(this).find('전화번호').text();

//                 var latLng = new kakao.maps.LatLng(latitude, longitude);
//                 var marker = new kakao.maps.Marker({
//                     position: latLng,
//                     map: map,
//                 });

//                 var infoContent = `<div>
//                     <strong>${name}</strong><br>
//                     ${address}<br>
//                     전화: ${phone}
//                 </div>`;

//                 var infoWindow = new kakao.maps.InfoWindow({
//                     content: infoContent,
//                 });

//                 kakao.maps.event.addListener(marker, 'click', function () {
//                     infoWindow.open(map, marker);
//                 });
//             });
//         },
//         error: function (xhr, status, error) {
//             console.error("외부 데이터 로드 실패:", error);
//         },
//     });
// }

// loadExternalData();
