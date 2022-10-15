function employee (firstName, lastName, salary, benefits = {VA, VR, planoDeSaude}) {
    let employee = {}

    employee.id = Math.floor(Math.random()* 100).toString()
    employee.firstName = firstName
    employee.lastName = lastName
    employee.salary = salary
    employee.benefits = benefits = {
        VR: VR,
        VA: VA,
        planoDeSaude: planoDeSaude,
    }

    employee.raiseSalary = function raiseSalary(percent){
        const newSalary = this.salary * percent + this.salary
        this.salary = newSalary
        return newSalary
    }

    employee.listBenefits = function listBenefits( ){
        return this.listBenefits
    }

    employee.addBenefits = function addBenefits(type, value ){
        const newBenfits = this.benefits[type] = value
        
        return newBenfits
    }

    employee.removeBenefits = function removeBenefits(type, value ){
        this.benefits[type] = value
        
        return this.benefits
    }




}