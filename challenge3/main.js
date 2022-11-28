

//input is requred for the results
function speedDetector(){
    const prompt = require('prompt-sync')();
    let speed = parseInt(prompt('Enter: '))
const grossalary = () => {
    nssf();
    nhif();
    payee();
    tax();
    nsalary();
    // KRA CALCULATIONS 
    function tax() {
        let tax1 = salary - nssf();
        let tax = tax1 - nhif();
        if (salary >= 1) {
            return `${tax}`;
        }
        else if (salary <= 0) {
            return "";
        }
    };
​
    // PAYEE CALCULATIONS 
    function payee() {
​
​
        const insuranceRelief = nhif() * 0.15;
        const taxablePay = salary - nssf();
        const personalRelief = 2400;
        if (taxablePay >= 0 && taxablePay <= 24000) {
            let paye = ((taxablePay * 0.1) - personalRelief - insuranceRelief);
            return paye;
        } else if (taxablePay > 24000 && taxablePay <= 32333) {
            let paye1 = ((taxablePay - 24000) * 0.25) + ((24000 * 0.1)) - personalRelief - insuranceRelief;
            return paye1;
        } else if (taxablePay > 32333) {
            let paye2 = ((24000 * 0.1) + (8333 * 0.25) + ((taxablePay - 32333) * 0.3) - personalRelief - insuranceRelief);
            return paye2;
        } else {
            return "";
        }
    };
    // NHIF CALCULATIONS 
    function nhif() {
        if (salary >= 1 && salary <= 5999) {
            return 150;
        }
        else if (salary >= 6000 && salary <= 7999) {
            return 300;
        }
        else if (salary >= 8000 && salary <= 11999) {
            return 400;
        }
        else if (salary >= 12000 && salary <= 14999) {
            return 500;
        }
        else if (salary >= 15000 && salary <= 19999) {
            return 600;
        }
        else if (salary >= 20000 && salary <= 24999) {
            return 750;
        }
        else if (salary >= 25000 && salary <= 29999) {
            document.getElementById("nhif").innerHTML = "850";
            return 850;
        }
        else if (salary >= 30000 && salary <= 34999) {
            return 900;
        }
        else if (salary >= 35000 && salary <= 39999) {
            return 950;
        }
        else if (salary >= 40000 && salary <= 44999) {
            return 1000;
        }
        else if (salary >= 45000 && salary <= 49999) {
            return 1100;
        }
        else if (salary >= 50000 && salary <= 59999) {
            return 1200;
        }
        else if (salary >= 60000 && salary <= 69999) {
            return 1300;
        }
        else if (salary >= 70000 && salary <= 79999) {
            return 1400;
        }
        else if (salary >= 80000 && salary <= 89999) {
            return 1500;
        }
        else if (salary >= 90000 && salary <= 99999) {
            return 1600;
        }
        else if (salary >= 100000) {
            return 1700;
        }
        else {
            return ""
        }
​
    };
    // NSSF CALCULATIONS
    function nssf() {
        let nss = (salary / 100) * 6;
        let tier1 = 360;
        let tier2 = 720;
        let total = tier1 + tier2;
        if (salary >= 1 && salary <= 17999) {
            return nss;
        }
        else if (salary >= 18000) {
            return total;
        }
        else {
            return "";
        }
​
    };
    // net salary calculation 
    function nsalary() {
        let itax = tax();
        let over = itax - payee();
​
        if (salary >= 1) {
            return over;
​
        }
        else {
            return "";
        }
    };
​
}
};