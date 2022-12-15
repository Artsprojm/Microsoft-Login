const iconKey = document.getElementById("about-login-key");
const keymodal = document.getElementById("key-modal");
const closeModal = document.getElementById("close-modal");
const textEmailAlert = document.getElementById("alert-text-email");
const siguiente = document.getElementById("siguiente");
const loginContainer = document.getElementById("login");
const detailsOptionsButt = document.getElementById("detailsOptions");
const detailsCont = document.getElementById("details");
const CloseDetailsButt = document.getElementById("close-Details");
const login = document.getElementById("login");

const DetailsFun = () => {
    function timestampfun(){
        let date = new Date();
        let current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
        let random = Math.floor(Math.random() * 100) + 1;
        let fullText = (current_date + "T00:" + (random +":") + (Math.floor(Math.random() * 100) + 1) + ".") + (Math.floor(Math.random() * 1000) + 1 + "Z");
        document.getElementById("timestamp").innerHTML = fullText;
    }; 
    timestampfun();
}
const detailFun = () => {
    login.classList.toggle("login-section-details");
    detailsOptionsButt.addEventListener("click", () => {
        login.classList.toggle("login-section-details");
        detailsCont.classList.toggle("hidden");
        CloseDetailsButt.addEventListener("click", () => {
            detailsCont.classList.add("hidden"); 
            login.classList.toggle("login-section-details");
        })
    })
};
const iconKeyFun = () => {
    iconKey.addEventListener("click", () => {
        keymodal.classList.toggle("hidden");
        closeModal.addEventListener("click", () => {
            keymodal.classList.add("hidden");
        })
    })
};
const validation = () => {
    siguiente.addEventListener("click", (e) => {
        e.preventDefault();
        const email = document.getElementById("email-input").value;
        validarCorreo(email);
    });
    const validarCorreo = (correo) => {
        let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        let verified = expReg.test(correo);
        if(verified){
            textEmailAlert.classList.add("hidden");
            loginContainer.style.height = "345px";
        } else {
            textEmailAlert.classList.toggle("hidden");
            loginContainer.style.height = "375px";
            loginContainer.classList.toggle("transform");
        }
    } 
}
detailFun();
DetailsFun();
validation();
iconKeyFun(); 