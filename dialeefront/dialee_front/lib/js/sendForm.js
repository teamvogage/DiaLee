import axios from 'axios';
export default function sendForm(formID){
    var myForm = document.getElementById(formID);
    formData = new FormData(myForm);
    console.log(formData);
} 