function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

const employeeMethods = {
    addBenefits : function addBenefits(nomebenef){
        return this.benfeficios.push(nomebenef);
     },

    removeBenefits :function removeBenefits(nomebenef){
        // remover o ultimo  return this.benfeficios.pop(nomebenef);
        const index = this.benfeficios.indexOf(nomebenef);
        this.benfeficios.splice(index,1);
        return this.benfeficios
        },

    listBenfefits:function listBenfefits(){
        return this.benfeficios ;
     },
     raiseSalary: function raiseSalary(perc) {
        return this.salary += this.salary*perc;
     }
 
} 

function employee ( firstname, lastName, age , salary){
    let employee ={};
   
    //floor é arredondar pra baixo , ceil é arredondar pra cima
  //  employee.id = Math.floor(Math.random() * 10)    ;
    employee.id = create_UUID();
    employee.firstname = firstname;
    employee.lastName = lastName;
    employee.age = age ;
    employee.salary = salary;
    employee.benfeficios = [];
    employee.raiseSalary = employeeMethods.raiseSalary;
    employee.addBenefits = employeeMethods.addBenefits;
    employee.removeBenefits =employeeMethods.removeBenefits;
    employee.listBenfefits = employeeMethods.listBenfefits;
 
    return employee;
    
    }
    
 
    const  Emprego  = new employee('Anna Maria', 'Rodrigues',40, 4000)
    const Emprego2 = new employee('Viviane', 'Bittencourt', 42, 3467)
    console.log(Emprego)
    // console.log(Emprego.id)
    // console.log(Emprego.raiseSalary(0.15))
    
    console.log(Emprego2)
    // console.log(Emprego2.id)
    // console.log(Emprego2.raiseSalary(0.15))
    
    console.log(Emprego.addBenefits('vr'))
    console.log(Emprego.listBenfefits())
    console.log(Emprego.addBenefits('gypas'))
    console.log(Emprego.listBenfefits())
    console.log(Emprego.removeBenefits('vr'))
    console.log(Emprego.listBenfefits())  
  
