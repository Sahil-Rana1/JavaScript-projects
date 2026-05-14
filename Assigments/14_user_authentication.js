// Q24. Implement a function that uses logical AND/OR operators to build a complex user access rule system
// (role + age + subscription checks).

function authenticate(user, age, subscription){
    if(user=="Admin" || (age>18 && subscription===true)){
        console.log("Access Granted !")
    }else{
        console.log("Access Denied !")
    }
}

// authenticate("Admin",19,false)
authenticate("user",17,true)
