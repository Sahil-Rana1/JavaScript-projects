// Assignment Operators

// Build a salary calculator: input basic salary, calculate HRA (40%), DA (20%), PF deduction (12%), and net
// salary. Use assignment operators throughout

function calculate(salary) {
    let HRA
    let DA
    let PF_deduction
    let net_salary

    HRA = (salary * 40) / 100
    DA = (salary * 20) / 100
    PF_deduction = (salary * 12) / 100
    net_salary = (salary + (HRA + DA) - (PF_deduction))
    console.log(HRA)
    console.log(DA)
    console.log(PF_deduction)
    console.log(net_salary)

}


calculate(10000)