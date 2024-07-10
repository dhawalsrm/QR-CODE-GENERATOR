const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');

const qrContainer = document.querySelector('.qr-body'); // all the queries are to generated in the body

let size = sizes.value;// variable creation > same as root in CSS
generateBtn.addEventListener('click',(e)=>{
    e.preventDefault(); //prevents the page from refreshing on each click event
    generateQRCode(); // function call
    isEmptyInput();// to check empty status
});
//to help in changing the size of QR on runtime
sizes.addEventListener('change',(e)=>{
    size = e.target.value;
    generateQRCode();
    isEmptyInput();// to check empty status
});
// to perform download operation 
// "()=>" tells that execute the given commands on a "click" event
downloadBtn.addEventListener('click', ()=>{
    let img = document.querySelector('.qr-body img');

    if(img !== null){
        let imgAtrr = img.getAttribute('src');
        downloadBtn.setAttribute("href", imgAtrr);
    }
    else{
        downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
});

function isEmptyInput(){ // a function to handle empty input

    // if(qrText.value.length > 0){
    //     generateQRCode();
    // }
    // else{
    //     alert("Enter the text or URL to generate your QR code");
    // }

    // a better approach than if-else using Ternary Operators
    qrText.value.length > 0 ? generateQRCode() : alert("Enter the text or URL to generate your QR code");;
}
function generateQRCode(){
    qrContainer.innerHTML = ""; // it helps to avoid storage of previously generated QR & thus merging of two different QRs on back to back generation is avoided
    //used a js library (qr.js) and its a copy paste code
    new QRCode(qrContainer, {
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    });
}