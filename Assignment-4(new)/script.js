var names = new Array();
names[0] = "Jyoti";
names[1] = "Namita";
names[2] = "Puja";
names[3] = "Mama";
names[4] = "Jiti";
names[5] = "Sonali";
names[6] = "Pihu";
names[7] = "Gaju";
names[8] = "Ritik";
names[9] = "Jhon";

for (var i = 0; i < names.length; i++) {
    if (names[i].charAt(0) === 'J' || names[i].charAt(0) === 'j') {
        console.log("Goodbye J" + names[i]);
    } else {
        console.log("Hello" + names[i]);
    }
}