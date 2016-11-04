var classes = ["Basic Tank", "Twin", "Machine Gun", "Sniper", "Flank Guard", "Triple Shot", "Twin Flank", "Quad Tank", "Destroyer", "Gunner", "Assasin", "Overseer", "Hunter", "Trapper", "Auto 3", "Triangle", "Triplet", "Pentashot", "Spreadshot", "Triple Twin", "Battleship", "Octotank", "Auto 5", "Annihilator", "Hybrid", "Auto Gunner", "Gunner Trapper", "Streamliner", "Ranger", "Stalker", "Overlord", "Necromancer", "Overtrapper", "Manager", "Predator", "Auto Trapper", "Mega Trapper", "Booster", "Fighter", "Tri-trapper", "Sprayer", "Smasher", "Landmine", "Spike", "Auto Smasher"];
var randomClass = Math.floor(Math.exp(Math.random()*Math.log(44-0+1)));
var sum;
var build;
while (sum != 33) {
	var hpregen = Math.floor(Math.exp(Math.random()*Math.log(7-0+1)));
	var maxhp = Math.floor(Math.exp(Math.random()*Math.log(7-0+1)));
	var bodydmg = Math.floor(Math.exp(Math.random()*Math.log(7-0+1)));
	var bspeed = Math.floor(Math.exp(Math.random()*Math.log(7-0+1)));
	var bpen = Math.floor(Math.exp(Math.random()*Math.log(7-0+1)));
	var bdmg = Math.floor(Math.exp(Math.random()*Math.log(7-0+1)));
	var reload = Math.floor(Math.exp(Math.random()*Math.log(7-0+1)));
	var movespd = Math.floor(Math.exp(Math.random()*Math.log(7-0+1)));
	build = hpregen + "/" + maxhp + "/" + bodydmg + "/" + bspeed + "/" + bpen + "/" + bdmg + "/" + reload + "/" + movespd;
	sum = hpregen + maxhp + bodydmg + bspeed + bpen + bdmg + reload + movespd;
}
var classtell = confirm("Your random class is: " + classes[randomClass] + "\nYour build is: " + build);

