({

    "validateField": function (value, type) {
        let valid;
        let that = this;
        if (type == undefined || type.trim() == "") {
            type = "text";
        }
        switch (type.toLowerCase()) {
            case "text":
                valid = that.validateText(value);
                break;
            case "email":
                valid = that.validateEmail(value);
                break;
            case "phone":
                valid = that.validatePhone(value);
                break;
            case "number":
                valid = that.validateNumber(value);
                break;
            case "month":
                valid = that.validateMonth(value);
                break;
            case "name":
                valid = that.validateName(value);
                break;
            case "year":
                valid = that.validateYear(value);
                break;

            default:

        }
        return valid;
    },
    "validateText": function (value) {
        if (value == null || value == undefined || value.trim() == "") {
            return false;
        } else {
            return true;
        }
    },
    "validateEmail": function (email) {
        let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(String(email).toLowerCase());
    },
    "validatePhone": function (phone) {
        let pattern = /^[6-9]\d{9}$/;
        return pattern.test(phone);
    },
    "validateDate": function (date) {
        if (date == null || date == undefined || date.trim() == "") {
            return false;
        } else {
            return true;
        }
    },
    "validateNumber": function (number) {

        if (number == null || number == undefined || number.trim() == "") {
            return false;
        }
        let pattern = /^[0-9]*$/;
        return pattern.test(number);
    },
    "validateMonth": function (month) {
        if (month == null || month == undefined || month.trim() == "") {
            return false;
        }
        let pattern = /(^0?[0-9]$)|(^1[0-1]$)/;
        return pattern.test(month);
    },
    "validateYear": function (value) {
        if (value == null || value == undefined || value.trim() == "") {
            return false;
        }
        let pattern = /^(0?[0-9]|[0-9][0-9])$/;
        return pattern.test(value);
    },
    "validateName": function (value) {
        if (value == null || value == undefined || value.trim() == "") {
            return false;
        }
        let pattern = /^[a-zA-Z \.]*$/;
        return pattern.test(value);
    }

})