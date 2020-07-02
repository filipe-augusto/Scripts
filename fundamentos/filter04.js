let  notebooks = [
    {id:01, bateriaVidaUtil:63.5, temSSD:true, sala:01 },
    {id:02, bateriaVidaUtil:73.5, temSSD:true, sala:02 },
    {id:03, bateriaVidaUtil:93.0, temSSD:false, sala:03 },
    {id:04, bateriaVidaUtil:48.5, temSSD:true, sala:04 },
    {id:05, bateriaVidaUtil:33.8, temSSD:true, sala:05 },
    {id:06, bateriaVidaUtil:53.5, temSSD:false, sala:01 }]
    //bateria acima de 60
const bateria = notebook => notebook.bateriaVidaUtil>50
//tem ssd
const ssd = notebook => notebook.temSSD
oncsole.log(notebooks.filter(bateria).filter(ssd))