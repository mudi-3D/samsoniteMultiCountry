/** Send Event Interacción  ✔️ */
function sendEventInteraction(eventName, sku) {

    let OSdevice;

    if (navigator.userAgent.includes('Android')) OSdevice = 'Android';
    else if (navigator.userAgent.includes('iPhone') || navigator.userAgent.includes('iPad')) OSdevice = "IOS";
    else OSdevice = 'DESK';

    window.dataLayer && dataLayer.push({
        event: `${eventName}`,
        valorMudi: 1,
        sku: sku,
        sistemaOperativo: OSdevice
    })
};

/** Modal Mudi */
class ModalMudi {

    constructor(data, color, currentSKU) {

        this.dataServer = data;
        this.color = color;

        this.modalMudi = document.createElement("DIV");

        this.currentSize = null;
        this.currentColor = null;
        this.currentSKU = currentSKU
    };

    /** Creación HTML del modal y sus componentes fijos ( btn salida y el iframe)  ✔️ */
    createModal() {

        const verifyModal = document.querySelector('#modalMudi');
        verifyModal && verifyModal.remove();

        this.modalMudi.id = `modalMudi`;
        this.modalMudi.classList.add(`mudiModal`);
        this.modalMudi.innerHTML = `
        <div class="iframeMudi3D">
            <button class="closeModalMudi" style="color:${this.color}">X</button>  
            <iframe class="modelMudi" src="${this.dataServer.URL_WEB}"></iframe>
        </div>
      `;

        /** We close the MUDI modal*/
        this.modalMudi.querySelector(`.closeModalMudi`).addEventListener("click", () => document.body.querySelector("#modalMudi").remove());
    };

    /** Creación del boton AR ✔️ */
    addBtnAR() {

        let flagAR = false;

        const ARButon = document.createElement('DIV');
        ARButon.classList.add('containerBtnsActions')
        ARButon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" id="imgARBtn" class="imgBtnAR" viewBox="0 0 317 112">
        <defs>
            <style>
            .cls-1_modal{fill:${this.color};stroke:${this.color};stroke-miterlimit:10;stroke-width:3px;}
  
            .cls-2_modal{font-family:FrutigerBold, Frutiger;font-size:19.04px;fill:white}
            .cls-3_modal{stroke-width:0px;fill:white;}
            </style>
        </defs>
        
        <rect class="cls-1_modal" x="9.52" y="9" width="292.07" height="87" rx="40" ry="40"/>
            <path class="cls-3_modal" d="m42.64,46.07c.66,0,1.19-.53,1.19-1.19v-8.1c0-.66-.53-1.19-1.19-1.19s-1.19.53-1.19,1.19v8.04c0,.66.53,1.19,1.19,1.19"/>
            <path class="cls-3_modal" d="m59.58,28.25c.21,0,.42-.06.6-.16l6.4-3.67,6.4,3.68c.57.33,1.31.13,1.64-.44.33-.57.13-1.31-.44-1.64h0l-7.13-4.01c-.37-.21-.83-.21-1.19,0l-6.94,4.02c-.57.34-.75,1.07-.41,1.64.23.38.64.6,1.08.58"/>
            <path class="cls-3_modal" d="m66.5,59.88c.66,0,1.19-.53,1.19-1.19v-8.03c0-.66-.54-1.2-1.2-1.2s-1.2.54-1.2,1.2v8.04c0,.66.53,1.19,1.19,1.19"/>
            <path class="cls-3_modal" d="m90.39,46.07c.66,0,1.19-.53,1.19-1.19,0,0,0,0,0-.01v-8.09c0-.66-.53-1.19-1.19-1.19s-1.19.53-1.19,1.19v8.04c0,.66.53,1.19,1.19,1.19"/>
            <path class="cls-3_modal" d="m42.64,65.58c.66,0,1.19-.53,1.19-1.19v-7.99c0-.66-.53-1.19-1.19-1.19s-1.19.53-1.19,1.19v8.04c.03.64.56,1.14,1.19,1.14Z"/>
            <path class="cls-3_modal" d="m90.39,65.58c.64,0,1.17-.5,1.19-1.14v-8.04c0-.66-.53-1.19-1.19-1.19s-1.19.53-1.19,1.19h0v8.04c.03.64.56,1.14,1.19,1.14"/>
            <path class="cls-3_modal" d="m66.5,33.02c.66,0,1.19-.53,1.19-1.19v-8.77c0-.66-.54-1.2-1.2-1.2s-1.2.54-1.2,1.2v8.77c0,.66.53,1.19,1.19,1.19"/>
            <path class="cls-3_modal" d="m66.5,79.45c.66,0,1.19-.53,1.19-1.19h0v-8.04c0-.66-.54-1.2-1.2-1.2s-1.2.54-1.2,1.2v8.04c0,.66.53,1.19,1.19,1.19,0,0,0,0,.01,0"/>
            <path class="cls-3_modal" d="m66.5,79.45c.21,0,.42-.06.6-.16l7-4.04c.57-.33.77-1.06.44-1.64-.33-.57-1.06-.77-1.64-.44h0l-6.4,3.7-6.3-3.66c-.57-.33-1.31-.14-1.64.44s-.14,1.31.44,1.64l6.91,4c.18.11.39.16.6.16"/>
            <path class="cls-3_modal" d="m66.5,51.83c.19,0,.37-.04.54-.12l6.97-4.02c.57-.33.77-1.06.44-1.64-.33-.57-1.06-.77-1.64-.44l-6.4,3.68-6.4-3.68c-.57-.33-1.31-.14-1.64.44s-.14,1.31.44,1.64h0l7.08,4.02c.18.11.39.16.6.16"/>
            <path class="cls-3_modal" d="m49.61,42.05c.66.01,1.2-.52,1.21-1.18,0-.44-.23-.85-.62-1.06l-6.95-4.02c-.59-.3-1.31-.07-1.61.52-.28.54-.1,1.2.4,1.54l6.95,4.02c.18.1.39.16.6.16"/>
            <path class="cls-3_modal" d="m42.65,38.03c.21,0,.42-.06.6-.16l6.97-4.02c.57-.33.77-1.06.44-1.64s-1.06-.77-1.64-.44h0l-6.97,4.02c-.58.32-.79,1.05-.47,1.62.21.39.62.62,1.06.62"/>
            <path class="cls-3_modal" d="m83.42,42.05c.21,0,.42-.06.6-.16l6.97-4.04c.57-.33.77-1.06.44-1.64-.33-.57-1.06-.77-1.64-.44l-6.95,4.02c-.58.32-.79,1.05-.47,1.62.21.39.62.62,1.06.62"/><path class="cls-3_modal" d="m90.39,38.03c.66.01,1.2-.52,1.21-1.18,0-.44-.23-.85-.62-1.06l-6.95-4.01c-.57-.33-1.31-.13-1.64.44-.33.57-.13,1.31.44,1.64l6.95,3.99c.18.1.39.16.6.16"/>
            <path class="cls-3_modal" d="m49.62,69.66c.66.01,1.2-.52,1.21-1.18,0-.44-.23-.85-.62-1.06l-6.98-3.97c-.57-.33-1.31-.13-1.64.44s-.13,1.31.44,1.64h0l6.98,3.97c.18.1.39.16.6.16"/>
            <path class="cls-3_modal" d="m42.64,65.58c.21,0,.42-.06.6-.16l6.97-4.02c.57-.33.77-1.06.44-1.64-.33-.57-1.06-.77-1.64-.44h0l-6.97,4.13c-.58.32-.79,1.05-.47,1.62.21.39.62.62,1.06.62"/>
            <path class="cls-3_modal" d="m83.42,69.66c.21,0,.42-.06.6-.16l6.97-4.02c.51-.42.57-1.18.15-1.68-.33-.39-.87-.53-1.35-.34l-6.95,4.02c-.58.32-.79,1.05-.47,1.62.21.39.62.62,1.06.62"/>
            <path class="cls-3_modal" d="m90.39,65.58c.66.01,1.2-.52,1.21-1.18,0-.44-.23-.85-.62-1.06l-6.94-4.02c-.57-.33-1.31-.14-1.64.44-.33.57-.14,1.31.44,1.64l6.94,4.07c.18.1.39.16.6.16"/>
    
            <text class="cls-2_modal" transform="translate(103.37 58.47)"><tspan x="0" y="0">VER EN TU ESPACIO</tspan></text>
        </svg>
  
        <div id="containerQR" class="containerQRMudi" style="background-color:${this.color}">
            <img class="mudiQR" src="${this.dataServer.URL_QR}" >
  
            <div class="containerText">
                <div class="titleContainer">
                    <h4>ESCANÉAME PARA <br><b>VER EN TU ESPACIO</b></h4>
                    <hr class="hrTitle">
                </div>
  
                <div class="titleContainer">
                    <div class="iconTitle">
                        <img class="stepMudi step1" src="https://cdn.jsdelivr.net/gh/RodriguezJose92/amoblando@latest/assets/step3amoblando.webp">
                    </div>
                    <p class="textInfoMudi">Apunta el teléfono al piso.</p>
                </div>
  
                <div class="titleContainer">
                    <div class="iconTitle">
                        <img class="stepMudi step2" src="https://cdn.jsdelivr.net/gh/RodriguezJose92/amoblando@latest/assets/step4amoblando.webp">
                    </div>
                    <p class="textInfoMudi">Desplaza para visualizar.</p>
                </div>
  
                <div class="titleContainer">
                    <div class="iconTitle">
                        <img class="stepMudi step3" src="https://cdn.jsdelivr.net/gh/RodriguezJose92/amoblando@latest/assets/step2amoblando.webp">
                    </div>
                    <p class="textInfoMudi">Amplia y detalla el producto.</p>
                </div>
  
                <div class="titleContainer">
                    <div class="iconTitle">
                        <img class="stepMudi step4" src="https://cdn.jsdelivr.net/gh/RodriguezJose92/amoblando@latest/assets/step1amoblando.webp">
                    </div>
                    <p class="textInfoMudi">Toca dos veces para restablecer.</p>
                </div>
  
            </div>
        </div>
      `;

        /** Verify Style Bttn AR  */
        function changeStyleBtnAR(flagAR, color) {
            let icon = document.body.querySelectorAll(".cls-3_modal");

            flagAR
                ? ((document.body.querySelector(".cls-1_modal").style.fill = color),
                    icon.forEach((icon) => (icon.style.fill = "white")),
                    (document.body.querySelector(".cls-2_modal").style.fill = "white"))
                : ((document.body.querySelector(".cls-1_modal").style.fill = "white"),
                    icon.forEach((icon) => (icon.style.fill = color)),
                    (document.body.querySelector(".cls-2_modal").style.fill = color));
        };

        ARButon.querySelector(`#imgARBtn`).addEventListener("click", () => {
            if (window.innerWidth > 1000) {
                !flagAR
                    ? ((document.body.querySelector(".containerQRMudi").style.right =
                        "15%"),
                        changeStyleBtnAR(flagAR, this.color),
                        (flagAR = !flagAR))
                    : ((document.body.querySelector(".containerQRMudi").style.right =
                        "-150%"),
                        changeStyleBtnAR(flagAR, this.color),
                        (flagAR = !flagAR));
            } else {
                window.open(`${this.dataServer.URL_AR}`, "_BLANK");
            }
            flagAR && sendEventInteraction("Evento de interaccion AR", this.currentSKU);
        });

        /** Agregamos al modal  */
        this.modalMudi.querySelector('.iframeMudi3D') && this.modalMudi.querySelector('.iframeMudi3D').appendChild(ARButon)

    };

    /** Método para creación del Modal de la PDP✔️ */
    createModalPDP() {

        this.createModal();
        this.addBtnAR();

        document.body.appendChild(this.modalMudi)
    };

};

/** Verificador de dispositivo x ancho de la pantalla */
class verifyDevice {
    constructor() { };

    static verifyDevice() {

        if (window.innerWidth <= 600) {
            return "mobile"
        } else if (window.innerWidth > 600 && window.innerWidth <= 1024) {
            return "tablet"
        } else if (window.innerWidth > 1025) {
            return "desk"
        }

    }
}

/** Consulta al servidor y creación de estilos */
class MudiExperiencePDP {

    constructor() {

        /** Reference node HTML father , node Container Btn 3D  */
        this.fatherContainer;

        /** Response Mudi-Server*/
        this.dataServer;

        this.colorClient = "#03457c";
    };

    /** Conect mudiServer  ✔️ */
    async conectServer(skuNumber) {

        const myBody = { skus: [skuNumber] };
        this.skuNumber = skuNumber;

        try {
            /** We make the request to the MUDI server */
            const request = await fetch(
                "https://mudiview.mudi.com.co:7443/product/getProductsUrl",
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                        tokenapi: "8rgqK6qF2esaiBtRCxKK",
                    },
                    body: JSON.stringify(myBody),
                }
            );
            const response = await request.json();

            if (response.data.length == 0) {
                console.warn(`El sku ${this.skuNumber} no existe en la base de datos de Mudi`);
            };

            this.dataServer = response.data[0];

        } catch (error) {
            throw error
        };

    };

    /** Create Styles ✔️ */
    createStyles() {
        /** Verify element HTML */
        if (document.head.querySelector("#stylesMudiGeneral")) { return }

        const link = document.createElement("LINK");
        link.setAttribute("rel", "stylesheet");
        link.id = "stylesMudiGeneral";
        link.href = `https://cdn.jsdelivr.net/gh/mudi-3D/samsoniteMultiCountry@latest/index.css`; /* custom this path */

        document.head.appendChild(link);
    };

    async experienceOn(skuNumber, fatherContainer = { desk, tablet, mobile }) {

        const sizeDevice = verifyDevice.verifyDevice();
        /** Verify father Container */
        this.fatherContainer = fatherContainer

        try {
            await this.conectServer(`${skuNumber}_MEX`);
            if( this.dataServer.length == 0 ) { fatherContainer[sizeDevice].style.display = "none"; return }
            this.createStyles();
            fatherContainer[sizeDevice].style.display = "flex";
            fatherContainer[sizeDevice].addEventListener('click', () => {
                const modal = new ModalMudi(data, this.color, this.skuNumber);
                modal.createModalPDP()

                /** Enviamos el evento al GTM */
                sendEventInteraction("Evento de interaccion 3D", this.skuNumber);
            })

        } catch (error) {
            console.error(`Mudi Error:\n${error}`);
        }

    };

};

const mudiExperience = new MudiExperiencePDP();
window.mudiExperience = mudiExperience;
