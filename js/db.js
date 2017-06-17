function DB () {
    "use strict";

    this.config = getConfig();

    if (this.config.mock) {
        this.database = true;
    }
    else {
        //init firebase
        firebase.initializeApp(getConfig().firebase);

        this.database = firebase.database().ref();
    }
};

DB.prototype.addModel = function(key, className) {
    "use strict";

    if ("function" !== typeof className) {
        throw "Supplied class is not a function";
    }

    this[key] = new className(this.database);
};
