let characterSkin, characterEye, characterShirt, characterPants, characterShoes, characterHair, characterFace, characterAccessory;
let skinButton, skinList, skinNumber;
let eyeButton, eyeList, eyeNumber;
let shirtButton, shirtList, shirtNumber;
let pantsButton, pantsList, pantsNumber;
let shoesButton, shoesList, shoesNumber;
let hairButton, hairList, hairNumber;
let faceButton, faceList, faceNumber;
let accessoryButton, accessoryList, accessoryNumber;
let font;
let titleBlock1, titleBlock2, titleBlock3, nameBlock;
let characterBackground, backgroundButton, backgroundList, backgroundNumber;
let screen = 0;
let homeScreenText, homeScreenButton, nextButton;
let a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z;

function preload() {
	try {
		font = loadFont('https://kwong09.github.io/character-maker/assets/MotleyForces.ttf');
	} catch (e) {
		console.log("error loading the font", e);
	}
}

function setup() {
	new Canvas(1000, 500);
	displayMode('centered');
	textFont(font);

	characterSkin = new Sprite();
	characterSkin.collider = 's';
	characterSkin.image = "https://kwong09.github.io/character-maker/images/skinColor0.PNG";
	characterSkin.image.scale = 0.4;

	characterEye = new Sprite();
	characterEye.image = "https://kwong09.github.io/character-maker/images/eyeColor0.PNG";
	characterEye.image.scale = 0.4;
	characterEye.collider = 's';

	characterShirt = new Sprite();
	characterShirt.image = "https://kwong09.github.io/character-maker/images/shirtColor0.PNG";
	characterShirt.image.scale = 0.4;
	characterShirt.collider = 's';

	characterPants = new Sprite();
	characterPants.image = "https://kwong09.github.io/character-maker/images/pants0.PNG";
	characterPants.image.scale = 0.4;
	characterPants.collider = 's';

	characterShoes = new Sprite();
	characterShoes.image = "https://kwong09.github.io/character-maker/images/shoes0.PNG";
	characterShoes.image.scale = 0.4;
	characterShoes.collider = 's';

	characterHair = new Sprite();
	characterHair.image = "https://kwong09.github.io/character-maker/images/hair0.PNG";
	characterHair.image.scale = 0.4;
	characterHair.collider = 's';

	characterFace = new Sprite();
	characterFace.image = "https://kwong09.github.io/character-maker/images/face0.PNG";
	characterFace.image.scale = 0.4;
	characterFace.collider = 's';

	characterAccessory = new Sprite();
	characterAccessory.image = "https://kwong09.github.io/character-maker/images/accessory0.PNG";
	characterAccessory.image.scale = 0.4;
	characterAccessory.collider = 's';

	characterBackground = new Sprite();
	characterBackground.image = "https://kwong09.github.io/character-maker/images/background0.PNG";
	characterBackground.image.scale = 0.4;
	characterBackground.collider = 's';

	
	skinButton = new Sprite(720, 150, 120, 50, 's');
	skinButton.color = "white";
	skinButton.text = "Skin";
	skinButton.textSize = 20;

	eyeButton = new Sprite(720, 250, 120, 50, 's');
	eyeButton.color = "white";
	eyeButton.text = "Eye";
	eyeButton.textSize = 20;

	shirtButton = new Sprite(720, 350, 120, 50, 's');
	shirtButton.color = "white";
	shirtButton.text = "Shirt";
	shirtButton.textSize = 20;

	pantsButton = new Sprite(720, 450, 120, 50, 's');
	pantsButton.color = "white";
	pantsButton.text = "Pants";
	pantsButton.textSize = 20;

	shoesButton = new Sprite(900, 150, 120, 50, 's');
	shoesButton.color = "white";
	shoesButton.text = "Shoes";
	shoesButton.textSize = 20;

	hairButton = new Sprite(900, 250, 120, 50, 's');
	hairButton.color = "white";
	hairButton.text = "Hair";
	hairButton.textSize = 20;

	faceButton = new Sprite(900, 350, 120, 50, 's');
	faceButton.color = "white";
	faceButton.text = "Face";
	faceButton.textSize = 20;

	accessoryButton = new Sprite(900, 450, 120, 50, 's');
	accessoryButton.color = "white";
	accessoryButton.text = "Accessory";
	accessoryButton.textSize = 20;

	backgroundButton = new Sprite(500, 450, 130, 50, 's');
	backgroundButton.color = "white";
	backgroundButton.text = "Background";
	backgroundButton.textSize = 20;

	strokeWeight(0);

	
	skinList = ["https://kwong09.github.io/character-maker/images/skinColor0.PNG", "https://kwong09.github.io/character-maker/images/skinColor1.PNG", "https://kwong09.github.io/character-maker/images/skinColor2.PNG", "https://kwong09.github.io/character-maker/images/skinColor3.PNG", "https://kwong09.github.io/character-maker/images/skinColor4.PNG"];
	skinNumber = 1;

	eyeList = ["https://kwong09.github.io/character-maker/images/eyeColor0.PNG", "https://kwong09.github.io/character-maker/images/eyeColor1.PNG", "https://kwong09.github.io/character-maker/images/eyeColor2.PNG", "https://kwong09.github.io/character-maker/images/eyeColor3.PNG", "https://kwong09.github.io/character-maker/images/eyeColor4.PNG"];
	eyeNumber = 1;

	shirtList = ["https://kwong09.github.io/character-maker/images/shirtColor0.PNG", "https://kwong09.github.io/character-maker/images/shirtColor1.PNG", "https://kwong09.github.io/character-maker/images/shirtColor2.PNG", "https://kwong09.github.io/character-maker/images/shirtColor3.PNG", "https://kwong09.github.io/character-maker/images/shirtColor4.PNG", "https://kwong09.github.io/character-maker/images/shirtColor5.PNG", "https://kwong09.github.io/character-maker/images/shirtColor6.PNG"];
	shirtNumber = 1;

	pantsList = ["https://kwong09.github.io/character-maker/images/pants0.PNG", "https://kwong09.github.io/character-maker/images/pants1.PNG", "https://kwong09.github.io/character-maker/images/pants2.PNG", "https://kwong09.github.io/character-maker/images/pants3.PNG", "https://kwong09.github.io/character-maker/images/pants4.PNG"];
	pantsNumber = 1;

	shoesList = ["https://kwong09.github.io/character-maker/images/shoes0.PNG", "https://kwong09.github.io/character-maker/images/shoes1.PNG", "https://kwong09.github.io/character-maker/images/shoes2.PNG", "https://kwong09.github.io/character-maker/images/shoes3.PNG", "https://kwong09.github.io/character-maker/images/blank0.PNG"];
	shoesNumber = 1;

	hairList = ["https://kwong09.github.io/character-maker/images/hair0.PNG", "https://kwong09.github.io/character-maker/images/hair4.PNG", "https://kwong09.github.io/character-maker/images/hair2.PNG", "https://kwong09.github.io/character-maker/images/hair3.PNG", "https://kwong09.github.io/character-maker/images/hair5.PNG", "https://kwong09.github.io/character-maker/images/blank0.PNG"];
	hairNumber = 1;

	faceList = ["https://kwong09.github.io/character-maker/images/face0.PNG", "https://kwong09.github.io/character-maker/images/face1.PNG", "https://kwong09.github.io/character-maker/images/face2.PNG", "https://kwong09.github.io/character-maker/images/face3.PNG", "https://kwong09.github.io/character-maker/images/face4.PNG"];
	faceNumber = 1;

	accessoryList = ["https://kwong09.github.io/character-maker/images/blank0.PNG", "https://kwong09.github.io/character-maker/images/accessory0.PNG", "https://kwong09.github.io/character-maker/images/accessory1.PNG", "https://kwong09.github.io/character-maker/images/accessory2.PNG", "https://kwong09.github.io/character-maker/images/accessory3.PNG", "https://kwong09.github.io/character-maker/images/accessory4.PNG"];
	accessoryNumber = 1;

	backgroundList = ["https://kwong09.github.io/character-maker/images/background0.PNG", "https://kwong09.github.io/character-maker/images/background1.PNG", "https://kwong09.github.io/character-maker/images/background3.PNG", "https://kwong09.github.io/character-maker/images/background4.PNG", "https://kwong09.github.io/character-maker/images/blank0.PNG"];
	backgroundNumber = 1;

	nameList = [];



	homeScreenButton = new Sprite(500, 370, 100, 50, 's');
	homeScreenButton.color = "white";
	homeScreenButton.textSize = 30;
	homeScreenButton.text = "Start";

	textSize(30);

	q = new Sprite(-100, -100, 50, 50, 's');
	w = new Sprite(-100, -100, 50, 50, 's');
	e = new Sprite(-100, -100, 50, 50, 's');
	r = new Sprite(-100, -100, 50, 50, 's');
	t = new Sprite(-100, -100, 50, 50, 's');
	y = new Sprite(-100, -100, 50, 50, 's');
	u = new Sprite(-100, -100, 50, 50, 's');
	i = new Sprite(-100, -100, 50, 50, 's');
	o = new Sprite(-100, -100, 50, 50, 's');
	p = new Sprite(-100, -100, 50, 50, 's');
	
	a = new Sprite(-100, -100, 50, 50, 's');
	s = new Sprite(-100, -100, 50, 50, 's');
	d = new Sprite(-100, -100, 50, 50, 's');
	f = new Sprite(-100, -100, 50, 50, 's');
	g = new Sprite(-100, -100, 50, 50, 's');
	h = new Sprite(-100, -100, 50, 50, 's');
	j = new Sprite(-100, -100, 50, 50, 's');
	k = new Sprite(-100, -100, 50, 50, 's');
	l = new Sprite(-100, -100, 50, 50, 's');
	
	z = new Sprite(-100, -100, 50, 50, 's');
	x = new Sprite(-100, -100, 50, 50, 's');
	c = new Sprite(-100, -100, 50, 50, 's');
	v = new Sprite(-100, -100, 50, 50, 's');
	b = new Sprite(-100, -100, 50, 50, 's');
	n = new Sprite(-100, -100, 50, 50, 's');
	m = new Sprite(-100, -100, 50, 50, 's');	

	q.color = "white";
	w.color = "white";
	e.color = "white";
	r.color = "white";
	t.color = "white";
	y.color = "white";
	u.color = "white";
	i.color = "white";
	o.color = "white";
	p.color = "white";

	a.color = "white";
	s.color = "white";
	d.color = "white";
	f.color = "white";
	g.color = "white";
	h.color = "white";
	j.color = "white";
	k.color = "white";
	l.color = "white";

	z.color = "white";
	x.color = "white";
	c.color = "white";
	v.color = "white";
	b.color = "white";
	n.color = "white";
	m.color = "white";

	
	q.text = "q";
	w.text = "w";
	e.text = "e";
	r.text = "r";
	t.text = "t";
	y.text = "y";
	u.text = "u";
	i.text = "i";
	o.text = "o";
	p.text = "p";

	a.text = "a";
	s.text = "s";
	d.text = "d";
	f.text = "f";
	g.text = "g";
	h.text = "h";
	j.text = "j";
	k.text = "k";
	l.text = "l";

	z.text = "z";
	x.text = "x";
	c.text = "c";
	v.text = "v";
	b.text = "b";
	n.text = "n";
	m.text = "m";

	nextButton = new Sprite(-100, -100, 100, 50, 's');
	nextButton.text = "Next";
	nextButton.color = 'white';

}


function draw() {
	background('skyblue');
	fill('white');
	textSize(40);


	if (screen == 0) {
		background('skyblue');
        fill('white');
        textSize(70);
        text("make your\n  Lil' Dude", 350, 200);

		characterSkin.pos = {x: -100, y: -100};
		characterEye.pos = {x: -100, y: -100};
		characterShirt.pos = {x: -100, y: -100};
		characterPants.pos = {x: -100, y: -100};
		characterShoes.pos = {x: -100, y: -100};
		characterHair.pos = {x: -100, y: -100};
		characterFace.pos = {x: -100, y: -100};
		characterAccessory.pos = {x: -100, y: -100};
		characterBackground.pos = {x: -100, y: -100};

		skinButton.pos = {x: -100, y: -100};
		eyeButton.pos = {x: -100, y: -100};
		shirtButton.pos = {x: -100, y: -100};
		pantsButton.pos = {x: -100, y: -100};
		shoesButton.pos = {x: -100, y: -100};
		hairButton.pos = {x: -100, y: -100};
		faceButton.pos = {x: -100, y: -100};
		accessoryButton.pos = {x: -100, y: -100};
		backgroundButton.pos = {x: -100, y: -100};

		if (homeScreenButton.mouse.presses()) {
			screen += 1;
		}
	}

	if (screen == 1) {
		background('skyblue');

		nameBlock = new Sprite(500, 50, 1000, 100, 's');
		nameBlock.text = nameList.join("");
		nameBlock.color = 'skyblue';

		nextButton.pos = {x: 500, y: 450};

		q.pos = {x: 90.91, y: 150};
		w.pos = {x: 181.82, y: 150};
		e.pos = {x: 272.73, y: 150};
		r.pos = {x: 363.64, y: 150};
		t.pos = {x: 454.55, y: 150};
		y.pos = {x: 545.46, y: 150};
		u.pos = {x: 636.36, y: 150};
		i.pos = {x: 727.27, y: 150};
		o.pos = {x: 818.18, y: 150};
		p.pos = {x: 909.09, y: 150};

		a.pos = {x: 100, y: 250};
		s.pos = {x: 200, y: 250};
		d.pos = {x: 300, y: 250};
		f.pos = {x: 400, y: 250};
		g.pos = {x: 500, y: 250};
		h.pos = {x: 600, y: 250};
		j.pos = {x: 700, y: 250};
		k.pos = {x: 800, y: 250};
		l.pos = {x: 900, y: 250};

		z.pos = {x: 125, y: 350};
		x.pos = {x: 250, y: 350};
		c.pos = {x: 375, y: 350};
		v.pos = {x: 500, y: 350};
		b.pos = {x: 625, y: 350};
		n.pos = {x: 750, y: 350};
		m.pos = {x: 875, y: 350};


		homeScreenButton.pos = {x: -100, y: -100};

		if (a.mouse.presses()) {
			nameList.push("a");
		}

		if (b.mouse.presses()) {
			nameList.push("b");
		}

		if (c.mouse.presses()) {
			nameList.push("c");
		}

		if (d.mouse.presses()) {
			nameList.push("d");
		}

		if (e.mouse.presses()) {
			nameList.push("e");
		}

		if (f.mouse.presses()) {
			nameList.push("f");
		}

		if (g.mouse.presses()) {
			nameList.push("g");
		}

		if (h.mouse.presses()) {
			nameList.push("h");
		}

		if (i.mouse.presses()) {
			nameList.push("i");
		}

		if (j.mouse.presses()) {
			nameList.push("j");
		}

		if (k.mouse.presses()) {
			nameList.push("k");
		}

		if (l.mouse.presses()) {
			nameList.push("l");
		}

		if (m.mouse.presses()) {
			nameList.push("m");
		}

		if (n.mouse.presses()) {
			nameList.push("n");
		}

		if (o.mouse.presses()) {
			nameList.push("o");
		}

		if (p.mouse.presses()) {
			nameList.push("p");
		}

		if (q.mouse.presses()) {
			nameList.push("q");
		}

		if (r.mouse.presses()) {
			nameList.push("r");
		}

		if (s.mouse.presses()) {
			nameList.push("s");
		}

		if (t.mouse.presses()) {
			nameList.push("t");
		}

		if (u.mouse.presses()) {
			nameList.push("u");
		}

		if (v.mouse.presses()) {
			nameList.push("v");
		}

		if (w.mouse.presses()) {
			nameList.push("w");
		}

		if (x.mouse.presses()) {
			nameList.push("x");
		}

		if (y.mouse.presses()) {
			nameList.push("y");
		}

		if (z.mouse.presses()) {
			nameList.push("z");
		}

		if (nextButton.mouse.presses()) {
			screen += 1;
		}
	}

	if (screen == 2) {
		background('skyblue');

		keysOffscreen();

		characterSkin.pos = {x: 500, y: 250};
		characterEye.pos = {x: 500, y: 250};
		characterShirt.pos = {x: 500, y: 250};
		characterPants.pos = {x: 500, y: 250};
		characterShoes.pos = {x: 500, y: 250};
		characterHair.pos = {x: 500, y: 250};
		characterFace.pos = {x: 500, y: 250};
		characterAccessory.pos = {x: 500, y: 250};
		characterBackground.pos = {x: 500, y: 250};

		skinButton.pos = {x: 720, y: 150};
		eyeButton.pos = {x: 720, y: 250};
		shirtButton.pos = {x: 720, y: 350};
		pantsButton.pos = {x: 720, y: 450};
		shoesButton.pos = {x: 900, y: 150};
		hairButton.pos = {x: 900, y: 250};
		faceButton.pos = {x: 900, y: 350};
		accessoryButton.pos = {x: 900, y: 450};
		backgroundButton.pos = {x: 500, y: 450};

		titleBlock1 = new Sprite(100, 250, 130, 70, 's');
		titleBlock1.color = '#390099';
		titleBlock1.text = "Make";
		titleBlock1.textColor = "white";
		titleBlock1.rotation = -10;
		titleBlock1.textSize = 35;

		titleBlock2 = new Sprite(200, 300, 130, 70, 's');
		titleBlock2.color = "#FFBD00";
		titleBlock2.text = "Your";
		titleBlock2.textColor = "white";
		titleBlock2.rotation = 10;
		titleBlock2.textSize = 35;

		titleBlock3 = new Sprite(170, 390, 300, 100, 's');
		titleBlock3.color = "#FF0054";
		titleBlock3.text = "Lil' Dude";
		titleBlock3.textColor = "white";
		titleBlock3.rotation = 3;
		titleBlock3.textSize = 75;

		nameBlock.text = nameList.join("");
		nameBlock.color = 'skyblue';




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

		if (shirtButton.mouse.presses()) {
			if (shirtNumber <= 6) {
				characterShirt.image = shirtList[shirtNumber];
				characterShirt.image.scale = 0.4;
				shirtNumber += 1;
			} else {
				shirtNumber = 0;
			}
		}

		if (pantsButton.mouse.presses()) {
			if (pantsNumber <= 4) {
				characterPants.image = pantsList[pantsNumber];
				characterPants.image.scale = 0.4;
				pantsNumber += 1;
			} else {
				pantsNumber = 0;
			}
		}

		if (shoesButton.mouse.presses()) {
			if (shoesNumber <= 4) {
				characterShoes.image = shoesList[shoesNumber];
				characterShoes.image.scale = 0.4;
				shoesNumber += 1;
			} else {
				shoesNumber = 0;
			}
		}

		if (hairButton.mouse.presses()) {
			if (hairNumber <= 5) {
				characterHair.image = hairList[hairNumber];
				characterHair.image.scale = 0.4;
				hairNumber += 1;
			} else {
				hairNumber = 0;
			}
		}

		if (faceButton.mouse.presses()) {
			if (faceNumber <= 4) {
				characterFace.image = faceList[faceNumber];
				characterFace.image.scale = 0.4;
				faceNumber += 1;
			} else {
				faceNumber = 0;
			}
		}

		if (accessoryButton.mouse.presses()) {
			if (accessoryNumber <= 5) {
				characterAccessory.image = accessoryList[accessoryNumber];
				characterAccessory.image.scale = 0.4;
				accessoryNumber += 1;
			} else {
				accessoryNumber = 0;
			}
		}

		if (backgroundButton.mouse.presses()) {
			if (backgroundNumber <= 4) {
				characterBackground.image = backgroundList[backgroundNumber];
				characterBackground.image.scale = 0.4;
				backgroundNumber += 1;
			} else {
				backgroundNumber = 0;
			}
		}

	}
}

function keysOffscreen() {
	q.pos = {x: 0, y: 0};
	w.pos = {x: 0, y: 0};
	e.pos = {x: 0, y: 0};
	r.pos = {x: 0, y: 0};
	t.pos = {x: 0, y: 0};
	y.pos = {x: 0, y: 0};
	u.pos = {x: 0, y: 0};
	i.pos = {x: 0, y: 0};
	o.pos = {x: 0, y: 0};
	p.pos = {x: 0, y: 0};

	a.pos = {x: 0, y: 0};
	s.pos = {x: 0, y: 0};
	d.pos = {x: 0, y: 0};
	f.pos = {x: 0, y: 0};
	g.pos = {x: 0, y: 0};
	h.pos = {x: 0, y: 0};
	j.pos = {x: 0, y: 0};
	k.pos = {x: 0, y: 0};
	l.pos = {x: 0, y: 0};

	z.pos = {x: 0, y: 0};
	x.pos = {x: 0, y: 0};
	c.pos = {x: 0, y: 0};
	v.pos = {x: 0, y: 0};
	b.pos = {x: 0, y: 0};
	n.pos = {x: 0, y: 0};
	m.pos = {x: 0, y: 0};

	nextButton.pos = {x: 0, y: 0};
}
