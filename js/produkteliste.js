const opendate = new Date(2022,11,10,8);
const closedate = new Date(2026,11,15,17);
const orgaemail = "fab.schul4@outlook.de"

// Abholung
const abholort = " vor dem Zimmer 018 im Effner"
const abholdatum1 = formatDate(new Date(2023,11,20))
const abholdatum2 = formatDate(new Date(2023,12,1))


const pickuptxt = `Vom ${abholdatum1} bis ${abholdatum2} könnensie eine Anfrage in den Ordern ${abholort} werfen. Sie werden vorher per Schulcloud informiert über das eingehen ihrere Bestellung und erst dann kommt der Kaufvertrag zu stande. 
Bei der Abholung wird ebenfalls bezahlt. Ihre Anfragenr. wird dabei als Nachweis benötigt. Sie finden diese in der Email erhalten oder auf dieser Seite oben.`
    

const emailtxt = `
Guten Tag
Danke für ihre Bestellung 😊

Bitte drücken sie auf senden, damit wir ihre Bestelllung registrieren können. 

***automatisch generiert - Bitte Nicht ändern!***
`
const produkt_liste = {
    // "0": {

    //     "id": "a57305c5efc4d3aac8b9ab991454d7fad46a90b71dfc97a530bb1ad3c7c83192",
    //     "productname": "Fallback",
    //     "productimage": {    
    //         "imagebits": "./Img/Fallback.png",
    //         "imagebgc" : "rgba(255,255,255,1)"
    //         },
    //     "isinitial":false,
    //     "organic" : "",
    //     },


    // "1": {

    //     "id": "8de8a8686077ef9a708f5a005d86900c4a1f49ffe88592350624b41e90f73b47",
    //     "productname": "Eisbären Bild",
    //     "productimage": {    
    //         "imagebits": "./Img/Eisbär_1.png",
    //         "imagebgc" : "rgba(255,255,255,1)"
    //         },
    //     "isinitial":false,
    //     "organic" : "",
    //     },

    // "2": {

    //     "id": "973124ffc4a03e66d6a4458e587d5d6146f71fc57f359c8d516e0b12a50ab0d9",
    //     "productname": "Delphin Bild",
    //     "productimage": {    
    //         "imagebits": "./Img/Delphin_1.png",
    //         "imagebgc" : "rgba(255,255,255,1)"
    //         },
    //     "isinitial":false,
    //     "organic" : "",
    //     },

    // "3": {

    //     "id": "91a7c943b89adee00c3a4b5133ee0d31447a2d2cad54c39e51280ad07fb56bcb",
    //     "productname": "Affen Bild",
    //     "productimage": {    
    //         "imagebits": "./Img/Affe_1.png",
    //         "imagebgc" : "rgba(255,255,255,1)"
    //         },
    //     "isinitial":false,
    //     "organic" : "",
    //     },
    // "4": {

    //     "id": "ff960d45385399a21f683a31616b2ed4ef55263f3827031c0c0a15d2cfaf0857",
    //     "productname": "Elephant Bild",
    //     "productimage": {    
    //         "imagebits": "./Img/Elephant_2.png",
    //         "imagebgc" : "rgba(255,255,255,1)"
    //         },
    //     "isinitial":false,
    //     "organic" : "",
    //     },
    "5": {

        "id": "07b4186b38fe145108da1ed7a2b8b49975a7eb033bd32f2e785ab5a0e2673262",
        "productname": "Standard Hintergrund",
        "productimage": {    
            "imagebits": "./Img/Fuchs_3.png",
            "imagebgc" : "rgba(255,255,255,1)"
            },
        "isinitial":true,
        "organic" : "",
        },
    // "6": {

    //     "id": "11766acf37477319cc6a7a44341a5301b858d2014f76b1e64a19bf173b9008db",
    //     "productname": "Igel Bild",
    //     "productimage": {    
    //         "imagebits": "./Img/Igel_1.png",
    //         "imagebgc" : "rgba(255,255,255,1)"
    //         },
    //     "isinitial":false,
    //     "organic" : "",
    //     },
    // "7": {

    //     "id": "3373fc9283e59e4d437a420cf036f223c1d6b45a613d8d043b1a95fa27ae01fd",
    //     "productname": "Igel Bild",
    //     "productimage": {    
    //         "imagebits": "./Img/Igel_2.png",
    //         "imagebgc" : "rgba(255,255,255,1)"
    //         },
    //     "isinitial":false,
    //     "organic" : "",
    //     },
    // "8": {

    //     "id": "f55c0f98de59532f70665b700bd6bde8d09a87f9a8e406500628ca64c1850844",
    //     "productname": "Robbe Bild",
    //     "productimage": {    
    //         "imagebits": "./Img/Robbe_1.png",
    //         "imagebgc" : "rgba(255,255,255,1)"
    //         },
    //     "isinitial":false,
    //     "organic" : "",
    //     },
    // "9": {

    //     "id": "ea6e5374084490f14112e45aec36fa60d7836b640060aea277cd356c1ec38112",
    //     "productname": "Vogel Bild",
    //     "productimage": {    
    //         "imagebits": "./Img/Vogel_1.png",
    //         "imagebgc" : "rgba(255,255,255,1)"
    //         },
    //     "isinitial":false,
    //     "organic" : "",
    //     },

}
// Wir versuchen unser Bestes sie möglichst schnell abzuschließen. 
// Bei Fragen oder Bitten schreiben sie bitte eine separate E-Mail an ${orgaemail}. 

// !! Bitte halten sie ihre Kundennummer bereit als Verifizierung. !! 

// Wenn sie ihre Bestellung ab dem Abholdatum nicht innerhalb von 7 Tagen abholen und/oder bezahlen, behalten wir uns das Recht vor ihre Bestellung zu stornieren.

// ${pickuptxt}

// Danke für ihre Unterstützung. 
// Der Gewinn geht zu 100% an den Abi-Ball 2024 

// *Folgende Daten wurden automatisch generiert*
 

