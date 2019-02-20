export class Result {
    ageDict: {};
    rentDict: {};
    zipDict: {};
    answersDict: {};

    constructor() {
        this.ageDict = {"18-24": 0, "25-34": 0, "35-44": 0, "45+": 0};
        this.rentDict = {"less than $1000": 0, "$1000-$1499": 0, "$1500-$1999": 0, "$2000-$2499": 0, "$2500+": 0};
        this.zipDict = {};
        this.answersDict = {'1': 0, '2': 0, '3': 0, '4': 0, '5': 0};
    }
}