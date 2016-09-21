var FruitNinja = FruitNinja || {};

// Initialize Firebase
firebase.initializeApp(getConfig().firebase);
var database = firebase.database().ref();

var game = new Phaser.Game("100%", "100%", Phaser.CANVAS);
game.state.add("BootState", new FruitNinja.BootState());
game.state.add("LoadingState", new FruitNinja.LoadingState());
game.state.add("GameState", new FruitNinja.LevelState());
game.state.add("TitleState", new FruitNinja.TitleState());
game.state.add("StoreState", new FruitNinja.StoreState());
game.state.add("LoginState", new FruitNinja.LoginState());
game.state.start("BootState", true, false, "assets/levels/login_screen.json", "LoginState");
