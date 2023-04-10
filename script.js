function validate_account(account){
    const pattern = /^[_a-z0-9]{6,}$/;
    if (pattern.test(account)==true){
        console.log("Account hop le")
    }
    else{
        console.log("Account khong hop le")
    }
}
