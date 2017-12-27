class ValidatePassengers {
    constructor() {

    }


    validate(papList) {
        console.log('Validator Passengers');
        console.log(papList.length);
    }


    validateNameSurname(input) {

        return input.search(/[^a-zA-Z]+/) === -1;
    }

    valDate() {

    }
}

export default ValidatePassengers;