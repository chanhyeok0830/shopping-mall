document,addEventListener('DOMContentLoaded', ()=>{
  const buttons = document.querySelectorAll('.product button');
  buttons.forEach(button => {
    button.addEventListener('click', ()=>{
      alert('상품이 장바구니에 추가되었습니다.');
    });
  });
});