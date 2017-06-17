function AllPlayersModel (database) {
    "use strict";

    this.config = getConfig();

    this.database = database;
};

AllPlayersModel.prototype.getHighScores = function (number_of_scores) {
    "use strict";

    var scores = [];

    if (this.config.mock) {
    }
    else {
        scores = this.database.child("players").orderByChild("max_score").limitToLast(number_of_scores);
    }

    return scores;
};
