function isNumeric(input) {
    // Regular expression to match only digits
    var regex = /^\d+$/;
    return regex.test(input);
}


const errorIconIdByFieldName = {
    'annualIncome': 'annualIncomeErrorIcon',
    'grossIncome': 'grossIncomeErrorIcon',
    'deduction': 'deductionErrorIcon',
    'age': 'ageErrorIcon'
}

const deductionPercentByAge = {
    'age < 40': 30,
    'age ≥ 40 but < 60': 40,
    'age ≥ 60': 10
}

function getOverallIncome(event) {

    event.preventDefault();
    // stop default form submission ans reload

    const NO_DEDUCTION_INCOME = 8000

    formData = new FormData(event.target);
    // form data 
    var formObject = {};

    formData.forEach(function (value, key) {
        // creating data object as form data is not directly readable .
        formObject[key] = value;
    });

    const numberKeys = ['annualIncome', 'grossIncome', 'deduction']
    // this are the nuber fields that we need to check having number value or not
    numberKeys?.forEach(key => {
        // if any fo this field not having the nuber value then we will show that field's error icon
        if (!formObject?.[key] || !isNumeric(formObject?.[key])) {
            document.getElementById(errorIconIdByFieldName?.[key]).style.opacity = 1
            return
        }
    })

    if (!formObject.age) {
        //  id age is not selcted the will shoe age error icon
        document.getElementById(errorIconIdByFieldName?.['age']).style.opacity = 1
        return
    }

    // tax calculation 
    let totalAnnualIncome = Number(formObject.annualIncome) + Number(formObject.grossIncome) - Number(formObject.deduction)
    let isDeductionApplied = false
    
    if (totalAnnualIncome > NO_DEDUCTION_INCOME) {
        isDeductionApplied = true
        const totalDeduction = ((totalAnnualIncome - NO_DEDUCTION_INCOME) * deductionPercentByAge?.[formObject.age]) / 100
        //  total deduction = (totalIncom - NO_DEDUCTION_INCOME) * deduction percent by age /100
        totalAnnualIncome = Math.round(totalAnnualIncome - totalDeduction)
        
    }

    //  showing the result div and ading all valid info in it .
    document.getElementById('result').style.display = 'flex'
    document.getElementById('resultText').innerHTML = `Your Overall Income will be ${totalAnnualIncome}`
    document.getElementById('taxDeductionStatus').innerHTML = isDeductionApplied ? 'After tax deduction' : 'no tax'

}
function handleOnChange(errorIconId) {
    document.getElementById(errorIconId).style.opacity = 0;
    // to hide error icon on adding new value
}

function closeModal() {
    //  close result modal
    document.getElementById('result').style.display = 'none'
    var form = document.getElementById("myForm");
    // Reset the form
    form.reset();
}
