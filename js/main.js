 // kiểm tra sự click của người dùng
        // đặt biến , lấy ra cái class ở trên của mình
        const buyBtns = document.querySelectorAll('.js-buy-ticket')
        const modal = document.querySelector('.js-modal')
        const modalClose = document.querySelector('.js-modal-close')
        // tạo hàm để hiển thị modal mua vé
        function showBuyTickets(){
            modal.classList.add('open')
        }
        // hàm ẩn modal mua vé, gỡ bỏ class modal của modal
        function hideBuyTickets(){
            modal.classList.remove('open')
        }
        // vòng lặp -> có thể lặp qua hết các nút
        // tạo 1 biến mới có tên buyBtn 
        for (const buyBtn of buyBtns){
            // nghe hành vi của người dùng
            // nghe thằng click 
            buyBtn.addEventListener('click', showBuyTickets)
        }
        // nghe hànnh vi click vào close để đóng
        modalClose.addEventListener('click', hideBuyTickets)
        