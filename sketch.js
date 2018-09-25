x=100;

function setup() {
	// define artboard size
	createCanvas(500,500);
	// Set here the values that are not changing all over the sketch
	strokeWeight(2);
	stroke(170);
}

function draw() {
	background(x,80,108);

	//prova a fare qualcosa
	x=x+1;
  if (x<200){x+1} else {x=100};

//Head
	//part light blue
	fill(162,217,224);
	noStroke()
	ellipse(250,192.41,121.619)

	//part red
	fill(239,103,100);
	noStroke();
  rect(189.19,192.41,121.619,65.905);

  //Eye1
	fill(162,217,224);
  ellipse(225.287,225.363,31.273,31.273);
  fill(8,82,112);
  ellipse(225.287,225.363,18.748);
  fill(255,90);
  ellipse(218.891,218.754,12.816);

	//Eye2
	fill(162,217,224);
	ellipse(274.713,225.363,31.273);
  fill(8,82,112);
  ellipse(274.713,225.363,18.748);
  fill(255,90);
  ellipse(268.317,218.754,12.816);

	//Neck
	fill(34,49,53);
	rect(220.368,258.315,62.201,14.507);

//Arms
  //Arm 1
	fill(8,82,112);
	rect(165.866,380.836,23.324,6.219);
	rect(165.866,286.95,6.219,100.105);
  rect(124.094,308.351,65.096,6.219);
	rect(124.097,251.664,6.219,62.907);
	rect(124.097,251.664,25.377,6.219);
	rect(143.252,198.367,6.219,59.315);

	stroke(239,103,100);
	strokeWeight(7);
	noFill();
	ellipse(146.362,183.769,30.877);

	ellipse(168.975,272.822,30.877);


//Arm2
fill(8,82,112);
noStroke();
rect(310.81,380.836,23.324,6.219);
rect(327.915,286.95,6.219,100.105);
rect(310.81,308.351,65.096,6.219);
rect(369.687,251.664,6.219,62.907);
rect(350.529,251.664,25.377,6.219);
rect(350.529,198.567,6.219,59.315);

stroke(239,103,100);
strokeWeight(7);
noFill();
ellipse(353.638,183.7,30.877);
ellipse(331.025,272.822,30.877);



  //Body
	fill(239,103,100);
	noStroke();
  rect(189.19,272.822,121.619,170.173);

	fill(202,83,89);
	rect(195.88,278.953,29.136,157.912);

	//Base, red
  fill(34,49,53);
	rect(198.092,442.995,103.815,7.254)
	fill(239,103,100);
	ellipse(185.407,474.922,49.348,49.348);
	rect(185.407,450.248,129.186,49.348)
	ellipse(314.593,474.922,49.348,49.348);

	//base, light blue
	fill(162,217,224);
	ellipse(185.407,474.922,31.927);
	rect(185.407,458.959,129.186,31.927);
	ellipse(314.593,474.922,31.927)

	//base mini circle
  noFill();
  stroke(34,49,53);
	strokeWeight(3);
	ellipse(203.404,474.922,21.641);
	ellipse(234.568,474.922,21.641);
	ellipse(265.432,474.922,21.641);
	ellipse(296.296,474.922,21.641);
}
