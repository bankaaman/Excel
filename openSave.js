let downloadBtn = document.querySelector(".download");
let openBtn = document.querySelector(".open");

//Download task

downloadBtn.addEventListener("click",(e)=>{
    let jsonData = JSON.stringify([sheetDB]);
    let file = new Blob([jsonData],{type: "application/json"});

    let a = document.createElement("a");
    a.href = URL.createObjectURL(file);
    a.download = "SheetData.json";
    a.click();
})

//open task
openBtn.addEventListener("click",(e)=>{
    //opens file explorer
    let input = document.createElement("input");
    input.setAttribute("type","file");
    input.click();

    input.addEventListener("click",(e)=>{
        let fr =  new FileReader();
        let files = input.files;
        let fileObj = files[0];

        fr.readAsText(fileObj);
        fr.addEventListener("load",(e)=>{
            let readSheetData = JSON.parse(fr.result);

            addSheetBtn.click();

            sheetDB= readSheetData[0];
            collectedSheetDB[collectedSheetDB.length-1] = sheetDB;
            handleSheetProperties();
        })
    })
})