const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 15 * * 4', function (){
    console.log('executando tarefa 1', new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log('cancelando tarefa 1')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 15
regra.second = 15
const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('executando tarefa 2', new Date().getSeconds())

})