// 팝업 열기
function openPopup() {
    document.getElementById('popup').style.display = 'block';
}

// 팝업 닫기
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// 문의 버튼 클릭 시 팝업 열기
document.getElementById('inquiryButton').addEventListener('click', openPopup);

// 폼 제출 시 팝업 닫기
document.getElementById('inquiryForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 기본 동작 방지
    closePopup(); // 팝업 닫기
});

// 닫기 버튼 클릭 시 팝업 닫기
document.getElementById('closeButton').addEventListener('click', closePopup);
