
const stars = document.querySelectorAll('.stars i');

stars.forEach((star, index1) => {
    star.addEventListener('click', () => {
        stars.forEach((star, index2) => {
            star.classList.toggle('active', index1 >= index2);

let respond = document.querySelector('.rate-respond')
        if (index1 <= 1){
        respond.innerHTML='Weak';
        }else if(index1 == 2) {
            respond.innerHTML='Ok';
        }else if(index1 == 3){
            respond.innerHTML='Good';
        }else{
            respond.innerHTML='Super';
        }
            
        });
    });
});
