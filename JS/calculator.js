window.addEventListener('load', function init() {
    let body = document.querySelector('body');
    let currentTarget;
    let result = document.getElementById('result');
    let currentTargetVal;
    
    //Creates an event listener for every button by using bubbling on the body to access all inputs
    
    body.addEventListener('click', function (e) {
        //Will grab the button element when clicked
        currentTarget = e.target;
        currentTargetVal = e.target.value
        
        //ifs determining buttons when clicked, weather it is a number, operation,  decimal, or equal sign
        console.log(currentTargetVal)
        if(currentTarget.classList.contains("operation")) {
            console.log('operation')
            enter();
        } else if(currentTarget.id === 'period') {
            console.log('decimal')
            enter();
        } else if(currentTarget.id === 'equal') {
            console.log('equal');
            calculate();
        } else if(!currentTarget.classList.contains("operation")) {
            console.log('number')
            enter();
        }
         else {
            console.log('error')
        }
        
        
    });

    //This will be applied to all buttons minus the equal sign
    function enter () {
        console.log('enter fn is working')
        //If the currently displayed input(button) value is 0, display the currently clicked input(button) value in the result input box
        if(parseInt(result.value) === 0) {
            result.value = currentTargetVal;
        } else {
            result.value = result.value + currentTargetVal;
        }
        
    }
    function calculate(nums) {
        //nums are the values getting passed into result.value(input)
        nums = result.value;
        nums = eval(nums);
        result.value = nums;
    }

    //Helper function
    let $ = function(id) {
        return document.getElementById(id);
    };
});