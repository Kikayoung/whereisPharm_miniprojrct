//팝업 열고 닫기
function openPopup() {
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

document.getElementById('inquiryButton').addEventListener('click', openPopup);

document.getElementById('inquiryForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 기본 동작 방지
    closePopup(); 
});

document.getElementById('closeButton').addEventListener('click', closePopup);
