const correctAnswers = ["B","A","B","A","A" ];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener('submit',e=>{
    e.preventDefault();

    let score = 0;

    // Get answers form the users
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value]

    userAnswers.forEach((answer,index) => {
        if(answer === correctAnswers[index]){
            score+=20;
        }
    });

    // show result in the dom
    scrollTo(0,0);
    result.querySelector("span").innerText = `${score}%`;
    result.classList.remove("d-none");

    // sequencial counter

    
    let point=0;
    const animation = setInterval(() => {

        result.querySelector("span").innerText = `${point}%`;
        if(point == score){
            // close loop function
            clearInterval(animation);
        }else{
            point++;
        }



    }, 12);


})