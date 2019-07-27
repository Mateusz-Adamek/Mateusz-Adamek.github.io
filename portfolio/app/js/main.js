const name = document.getElementById('name');
const mail = document.getElementById('mail');
const message = document.getElementById('message');
// const agreementOne = document.getElementById('zgoda-marketingowa-1');
const submit = document.getElementById('submit-message');

const validation = (e) => {
    const text1 = name.value;
    const text2 = mail.value;
    const text3 = message.value;
    // let check1 = agreementOne.checked;


    if (text1 == null || text2 == null ||  text3 == null ){ 
        setCustomValidity("Please enter any text into the input");
    // } else if (check3.checked) {
    //     let check1 = ;
    //     let check2 = ;
    } else {

    }
}

submit.addEventListener('click', validation);