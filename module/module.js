const module = (function() {
    const privateInfo = 'Anton Burchak';
    const privateSalary = 99999;

    const getInfo = () => {
        console.log(this);
        console.log(privateInfo + ' ' + privateSalary)
    }

    return {
        getInfo
    }
})();
module.getInfo();
