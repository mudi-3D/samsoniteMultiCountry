/** Mudi Experience */
class MudiExperience {

    constructor() {
        this.color = "#1a4ea2";
        this.dataSever = null;
        this.skuNumber = null;
        this.fatherContainer = null;
        this.URLActual = null;
        this.valueRequest = 0
    };

    /** Conect mudiServer  ✔️ */
    async conectServer(skuNumber) {

        const myBody = { "skus": [skuNumber] };
        this.skuNumber = skuNumber;

        try {

            /** We make the request to the MUDI server */
            const
                request = await fetch('https://mudiview.mudi.com.co:7443/product/getProductsUrl', {
                    method: 'POST',
                    headers: {
                        "Content-type": "application/json",
                        "tokenapi": "iHQr38MWcxTpZtsQLRDk"
                    },
                    body: JSON.stringify(myBody)
                })
            const
                response = await request.json();
            this.dataServer = response.data[0];

        } catch (error) { console.error(`Mudi Error:\n${error}`) };

    };

    /** Create Styles ✔️ */
    createStyles() {

        /** Verify element HTML */
        if (document.head.querySelector('#stylesMudiGeneral')) { return }

        const
            link = document.createElement('LINK');
        link.setAttribute('rel', 'stylesheet');
        link.id = "stylesMudiGeneral";
        link.href = `https://cdn.jsdelivr.net/gh/mudi-3D/samsoniteMultiCountry@latest/index.css`; /* custom this path */

        document.head.appendChild(link)
    };

    /** Create button only 3D  ✔️*/
    createBtns() {

        /** Verify btns */
        document.body.querySelector('.btnsMudiContainer') && document.body.querySelector('.btnsMudiContainer').remove();

        /** Create Fragment */
        const fragment = document.createDocumentFragment();

        /** Create containers */
        const
            containerBtns = document.createElement('DIV');
        containerBtns.classList.add('btnsMudiContainer');
        containerBtns.id = 'btnsModule3D'
        containerBtns.appendChild(this.createTooltip());
        containerBtns.setAttribute('sku', this.skuNumber)
        containerBtns.innerHTML += `
        <?xml version="1.0" encoding="UTF-8"?>
    
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="img3DBtn" class="btnMudi3D" viewBox="0 0 300 300">
                <defs>
                    <style>
                        .cls-1{filter:url(#drop-shadow-11);}
                        .cls-2{fill:#1A4EA2;opacity:.5;}
                        .cls-2,.cls-3{stroke-width:0px;}
                        .cls-4{fill:#eeeeee;stroke:#fff;stroke-miterlimit:10;stroke-width:7.53px;}
                        .cls-3{fill:#1a4ea2;}
                    </style>
                    
                    <filter id="drop-shadow-11" filterUnits="userSpaceOnUse">
                        <feOffset dx="0" dy="0"/><feGaussianBlur result="blur" stdDeviation="12"/>
                        <feFlood flood-color="#000" flood-opacity=".08"/>
                        <feComposite in2="blur" operator="in"/><feComposite in="SourceGraphic"/>
                    </filter>
                    
                </defs>
                <g class="cls-1"><circle class="cls-4" cx="150" cy="150" r="142.54"/>
                    <path id="Shape" class="cls-2" d="M255.16,149.99c0-21.39-23.28-39.47-57.84-48.14-8.46-35.37-26.16-59.18-47.05-59.18s-38.58,23.85-47.06,59.25c-4.89,1.25-9.62,2.68-14.12,4.32-1.95.72-2.97,2.91-2.26,4.9.7,1.99,2.85,3.03,4.8,2.33,3.16-1.15,6.45-2.16,9.82-3.1-.43,2.36-.8,4.71-1.15,7.11h.2c-3.46,23.05-3.24,46.53.63,69.5h-.09c.16.84.29,1.71.45,2.59v.04c-28.77-8.09-48.52-22.96-48.53-39.55,0-8.74,5.64-17.44,16.01-24.94l-1.19,6.29h0c-.2,1.01,0,2.05.56,2.9.56.85,1.42,1.43,2.41,1.63h0c.24.05.48.07.72.07,1.79-.02,3.32-1.31,3.68-3.11l3.01-15.96h0c.19-1-.01-2.03-.57-2.87-.55-.84-1.41-1.42-2.39-1.61h0l-15.65-3.23c-2.02-.43-4,.87-4.47,2.93-.1.5-.1,1.02,0,1.52.27,1.52,1.4,2.73,2.88,3.06h.18l7.32,1.45c-12.92,9.13-20.06,20.25-20.06,31.79h0c0,21.39,23.28,39.47,57.84,48.15,8.48,35.36,26.16,59.17,47.04,59.17,11.61,0,22.78-7.75,31.8-21.69l.93,7.65c.25,2.1,2.12,3.59,4.17,3.34,2.06-.26,3.51-2.16,3.26-4.27h0l-1.89-16.14c-.11-1.01-.62-1.93-1.4-2.56-.78-.63-1.78-.91-2.76-.79h0l-15.78,1.94c-2.05.26-3.51,2.17-3.26,4.26h0c.25,2.1,2.11,3.59,4.17,3.34l6.22-.77c-7.54,11.58-16.45,17.98-25.4,17.98-16.21,0-30.73-20.21-38.65-49.62,12.75,2.46,25.69,3.69,38.65,3.65,12.99.04,25.96-1.19,38.72-3.67-.92,3.44-1.89,6.81-3.02,10.03-.17.49-.24,1-.2,1.51.09,1.83,1.43,3.32,3.2,3.58,1.77.26,3.47-.8,4.06-2.52h0c1.6-4.6,3-9.44,4.23-14.45,34.6-8.67,57.91-26.76,57.91-48.15h0l-.03.03-.03-.03ZM199.09,189.56c2.44-13.04,3.66-26.28,3.63-39.56h0c.04-13.26-1.15-26.5-3.56-39.53,28.76,8.1,48.51,22.96,48.52,39.55,0,16.59-19.79,31.44-48.57,39.55h-.01ZM111.61,100.05c7.9-29.45,22.44-49.68,38.66-49.68s30.73,20.2,38.65,49.63c-1.16-.23-2.31-.43-3.47-.64v.15c-11.62-2.09-23.4-3.15-35.2-3.15-11.33.03-22.63,1.04-33.8,3l.07-.21c-1.63.29-3.27.59-4.91.91h0ZM190.93,108.39c2.88,13.67,4.31,27.63,4.28,41.61.04,13.97-1.36,27.92-4.21,41.59-13.39,2.95-27.05,4.43-40.74,4.38-13.67.04-27.31-1.43-40.67-4.37v-.16c-5.69-27.4-5.69-55.73,0-83.14,26.82-5.75,54.52-5.73,81.33.07h0Z"/>
                    
                    <path id="Path" class="cls-3" d="M105.12,158.96c3.98,3.9,9.31,6.1,14.87,6.15,6.54,0,10.18-2.82,10.18-6.95,0-4.37-3.32-6.39-10.83-6.39-2.26,0-5.91,0-6.71.09v-10.03c.97.08,4.6.08,6.71.08,5.98,0,9.94-1.94,9.94-5.98,0-4.28-4.37-6.47-10.02-6.47-5.14,0-10.09,2.03-13.74,5.65l-5.66-7.11c5.28-5.75,12.81-8.88,20.61-8.58,12.61,0,20.37,5.65,20.37,14.62-.43,6.42-5.4,11.61-11.8,12.29,6.89.45,12.32,6.03,12.61,12.93,0,9.29-8.32,15.84-21.25,15.84-8.02.44-15.82-2.73-21.26-8.64l5.99-7.52v.02Z"/><path id="Shape-2" class="cls-3" d="M150.3,120.25h21.26c16.89,0,28.61,10.75,28.61,27s-11.72,26.92-28.61,26.92h-21.26v-53.92h0ZM171.57,164.06c4.53.22,8.94-1.48,12.16-4.68,3.21-3.2,4.93-7.61,4.73-12.13.34-4.57-1.34-9.07-4.57-12.31-3.24-3.25-7.74-4.92-12.31-4.58h-9.78v33.71h9.78Z"/>
    
                </g>
            </svg>
        `;

        containerBtns.querySelector('#img3DBtn').addEventListener('click', () => {
            this.createModal();
            this.sendEventInteraction('3D');
        });

        fragment.appendChild(containerBtns)

        /** Add DOM */
        this.fatherContainer.appendChild(fragment)
    };

    /** Create Modal ✔️ */
    createModal() {

        /** create variables */
        let flagAR = false;

        /** We create a shell for the MUDI modal */
        const
            modalMudi = document.createElement('DIV');
        modalMudi.id = `modalMudi`;
        modalMudi.classList.add(`mudiModal`);
        modalMudi.innerHTML = `
            <div class="iframeMudi3D">
                <button class="closeModalMudi" style="color:${this.color}">X</button>
                <iframe class="modelMudi" src="${this.dataServer.URL_WEB}"></iframe>
                <div class="containerBtnsActions">
                    <svg xmlns="http://www.w3.org/2000/svg" id="imgARBtn" class="imgBtnAR" viewBox="0 0 317 112">
                    <defs>
                        <style>
                        .cls-1_modal{fill:${this.color};stroke:${this.color};stroke-miterlimit:10;stroke-width:3px;}
                        .cls-2_modal{font-family:FrutigerBold, Frutiger;font-size:19.04px;fill:white}
                        .cls-3_modal{stroke-width:0px;fill:white;}
                        </style>
                    </defs>
                    
                    <rect class="cls-1_modal" x="9.52" y="9" width="292.07" height="87" rx="5" ry="5"/>
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
                                    <img class="stepMudi step1" src="https://cdn.jsdelivr.net/gh/RodriguezJose92/pepeganga@latest/assets/step3pepeganga.webp">
                                </div>
                                <p class="textInfoMudi">Apunta el teléfono al piso.</p>
                            </div>
    
                            <div class="titleContainer">
                                <div class="iconTitle">
                                    <img class="stepMudi step2" src="https://cdn.jsdelivr.net/gh/RodriguezJose92/pepeganga@latest/assets/step4pepeganga.webp">
                                </div>
                                <p class="textInfoMudi">Desplaza para visualizar.</p>
                            </div>
    
                            <div class="titleContainer">
                                <div class="iconTitle">
                                    <img class="stepMudi step3" src="https://cdn.jsdelivr.net/gh/RodriguezJose92/pepeganga@latest/assets/step2pepeganga.webp">
                                </div>
                                <p class="textInfoMudi">Amplia y detalla el producto.</p>
                            </div>
    
                            <div class="titleContainer">
                                <div class="iconTitle">
                                    <img class="stepMudi step4" src="https://cdn.jsdelivr.net/gh/RodriguezJose92/pepeganga@latest/assets/step1pepeganga.webp">
                                </div>
                                <p class="textInfoMudi">Toca dos veces para restablecer.</p>
                            </div>
    
                        </div>
                    </div>
                </div>
            </div>
        `;

        /** We close the MUDI modal*/
        modalMudi.querySelector(`.closeModalMudi`).addEventListener('click', () => {
            document.body.querySelector('#modalMudi').remove();
        });

        /** Init ARExperience */
        modalMudi.querySelector(`#imgARBtn`).addEventListener('click', () => {

            if (window.innerWidth > 1000) {
                !flagAR
                    ? (
                        document.body.querySelector('.containerQRMudi').style.right = "-11%",
                        changeStyleBtnAR(flagAR, this.color),
                        flagAR = !flagAR
                    )
                    : (
                        document.body.querySelector('.containerQRMudi').style.right = "-150%",
                        changeStyleBtnAR(flagAR, this.color),
                        flagAR = !flagAR
                    )
            }
            else {
                window.open(`${this.dataServer.URL_AR}`, "_BLANK");
            }
            flagAR && this.sendEventInteraction('AR')
        });

        /** Verify Style Bttn AR  */
        function changeStyleBtnAR(flagAR, color) {

            let icon = document.body.querySelectorAll('.cls-3_modal')

            flagAR
                ? (
                    document.body.querySelector('.cls-1_modal').style.fill = color,
                    icon.forEach((icon) => icon.style.fill = "white"),
                    document.body.querySelector('.cls-2_modal').style.fill = "white"
                )
                : (
                    document.body.querySelector('.cls-1_modal').style.fill = "white",
                    icon.forEach((icon) => icon.style.fill = color),
                    document.body.querySelector('.cls-2_modal').style.fill = color
                )
        };

        document.body.appendChild(modalMudi)
    };

    /** create tooltip ✔️ */
    createTooltip() {
        const
            tooltip = document.createElement('P');
        tooltip.classList.add('tooltipMudi');
        tooltip.innerHTML = `<b>¡Nuevo!</b> Descubre como se ve este producto en 3D y realidad aumentada en tu espacio`;

        setTimeout(() => {
            document.body.querySelector('.tooltipMudi').remove();
        }, 9000)

        return tooltip;
    };

    /** Send Evnt Interacción  ✔️ */
    sendEventInteraction(eventName) {

        let OSdevice;

        if (navigator.userAgent.includes('Android')) OSdevice = 'Android';
        else if (navigator.userAgent.includes('iPhone') || navigator.userAgent.includes('iPad')) OSdevice = "IOS";
        else OSdevice = 'DESK';

        window.dataLayer && dataLayer.push({
            event: `Evento de interaccion ${eventName}`,
            valorMudi: 1,
            sku: this.skuNumber,
            sistemaOperativo: OSdevice
        })
    };

    /** viewer event Mudi GTM  */
    sendEventViewer() {
        let OSdevice;

        if (navigator.userAgent.includes('Android')) OSdevice = 'Android';
        else if (navigator.userAgent.includes('iPhone') || navigator.userAgent.includes('iPad')) OSdevice = "IOS";
        else OSdevice = 'DESK';

        window.dataLayer && dataLayer.push({
            event: `visualizacion_botones`,
            valorMudi: 1,
            sku: this.skuNumber,
            sistemaOperativo: OSdevice
        })
    };

    /** verifyExperience  ✔️ */
    async experienceOn(skuNumber, fatherContainer) {

        /** Verify father Container */
        fatherContainer && (this.fatherContainer = fatherContainer);

        /** Response Mudi server */
        await this.conectServer(skuNumber);

        /** verify process */
        if (!this.dataServer) {
            document.body.querySelector('.btnsMudiContainer') && document.body.querySelector('.btnsMudiContainer').remove();
            console.warn(`El sku: ${skuNumber} no posee experiencias de 3D  y AR`)
            return;
        }

        /** Create Styles */
        this.createStyles();
        /** Create Buttons */
        this.createBtns();
        /** Create eventView*/
        this.sendEventViewer()

    };

    /** Petición para renderizar los elementos Mudi */
    mudiRequest(skuNumber) {

        let container = document.querySelector('.buttonMudiExperience');
        if (container) {
            this.experienceOn('8622910411U_MEX', container)
        }
        else if (this.valueRequest > 5000) { return }
        else {
            requestAnimationFrame(this.mudiRequest);
            this.valueRequest++;
        }
    };

};

const mudiExperience = new MudiExperience();
window.mudiExperience = mudiExperience;
