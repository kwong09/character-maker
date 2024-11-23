let characterSkin, characterEye;
let skinButton, skinList, skinNumber;
let eyeButton, eyeList, eyeNumber;

function setup() {
	new Canvas(1000, 500);
	displayMode('centered');

	characterSkin = new Sprite();
	characterSkin.image = "skinColor0.PNG";
	characterSkin.image.scale = 0.4;
	characterSkin.collider = 's';

	characterEye = new Sprite();
	characterEye.image = "eyeColor0.PNG";
	characterEye.image.scale = 0.4;
	characterEye.collider = 's';

	skinButton = new Sprite(700, 125, 120, 50, 's');
	skinButton.color = "white";
	skinButton.text = "Skin Color";
	skinButton.textSize = 20;

	eyeButton = new Sprite(700, 250, 120, 50, 's');
	eyeButton.color = "white";
	eyeButton.text = "Eye Color";
	eyeButton.textSize = 20;

	skinList = ["skinColor0.PNG", "skinColor1.PNG", "skinColor2.PNG", "skinColor3.PNG", "skinColor4.PNG"];
	skinNumber = 1;

	eyeList = ["eyeColor0.PNG", "eyeColor1.PNG", "eyeColor2.PNG", "eyeColor3.PNG", "eyeColor4.PNG"];
	eyeNumber = 1;
}

function draw() {
	background('skyblue');

	if (skinButton.mouse.presses()) {
		if (skinNumber <= 4) {
			characterSkin.image = skinList[skinNumber];
			characterSkin.image.scale = 0.4;
			skinNumber += 1;
		} else {
			skinNumber = 0;
		}
	}

	if (eyeButton.mouse.presses()) {
		if (eyeNumber <= 4) {
			characterEye.image = eyeList[eyeNumber];
			characterEye.image.scale = 0.4;
			eyeNumber += 1;
		} else {
			eyeNumber = 0;
		}
	}
}
