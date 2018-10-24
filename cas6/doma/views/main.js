    var larissa = "Larissa";
    var redsonja = "Red Sonja";    

    document.getElementById("bname").addEventListener("click",function(){
    var choosename = document.getElementById("name").innerHTML = prompt("Please enter your name");

    if(choosename == "Larissa"){
        document.getElementById("image").src="larissa.jpg";
        document.getElementById("race").innerHTML = "Race: Aquilonian"
        document.getElementById("fitness").innerHTML = "Fitness: 10"
        document.getElementById("bfitness").addEventListener("click",function(){
        var a = Math.floor((Math.random() * 11)+2);
        if(a<10){
            alert("You roll " + a + " your check was successful.");
        }else {
            alert("You roll " + a + " you have failed the fitness check");
        }
    });
    } 

    else if(choosename == "Red Sonja"){
        document.getElementById("image").src="redsonja.jpg";
        document.getElementById("race").innerHTML = "Race: Hyrkanian"
        document.getElementById("fitness").innerHTML = "Fitness: 9"

        document.getElementById("bfitness").addEventListener("click",function(){
        var a = Math.floor((Math.random() * 11)+2);
        if(a<9){
            alert("You roll " + a + " your check was successful.");

        }else {
            alert("You roll " + a + " you have failed the fitness check");
        }
    });
    }else{
        alert("Wrong name entered");
    }   
});


    document.getElementById("bage").addEventListener("click",function(){
    document.getElementById("age").innerHTML = "Age: " +prompt("Please enter your name");
});
    document.getElementById("bmelee").addEventListener("click", function(){
        var a = Math.floor((Math.random() * 16) + 3);
        document.getElementById("melee").innerHTML = "Melee Attack: "+ a;
    });
    document.getElementById("branged").addEventListener("click", function(){
        var a = Math.floor((Math.random() * 11) + 2);
        document.getElementById("ranged").innerHTML = "Ranged Attack: "+ a;
    });
    document.getElementById("bdefense").addEventListener("click", function(){
        var a = Math.floor((Math.random() * 11) + 4);
        document.getElementById("defense").innerHTML = "Defense: "+ a;
    });

    // document.getElementById("bfitness").addEventListener("click",function(){
    //     var a = Math.floor((Math.random() * 11)+2);
    //     if(a<10){
    //         alert("You roll " + a + " your check was successful.");
    //     }else {
    //         alert("You roll " + a + " you have failed the fitness check");
    //     }
    // });

    document.getElementById("bmale").addEventListener("click",function(){
    document.getElementById("gender").innerHTML = "Gender: Male"
});
    document.getElementById("bfemale").addEventListener("click",function(){
    document.getElementById("gender").innerHTML = "Gender: Female"
});

    var dice1 = Math.floor((Math.random() * 6)+1);
    var dice2 = Math.floor((Math.random() * 6)+1);
    var dice3 = Math.floor((Math.random() * 6)+1);
    var dice4 = Math.floor((Math.random() * 6)+1);
    var dice5 = Math.floor((Math.random() * 6)+1);
    var dice6 = Math.floor((Math.random() * 6)+1);

    // document.getElementById("monstatt").addEventListener("click",function(){
    //     var attack = Math.floor((Math.random() * 16)+3);
    //     var defense = Math.floor((Math.random() * 11) + 4);
    //     document.getElementById("monstresult").innerHTML = "The monster rolled " + attack;
    //     document.getElementById("defense").innerHTML = "Defense: " + defense;

    //     // var playerhp = document.getElementById("hp").innerHTML = "Hit Points: "+11;
        
    //     if(attack>defense){
    //         var hit = defense - attack;
    //         alert("The monster has hit you, and you lost " + hit + " Hit points.");
    //     }else{
    //         alert("The monster misses.")
    //     }
    // }); 

    var playerhp = document.getElementById("hp").innerHTML = "Hit Points: "+11;

    var d1 = dice1;
    var d2 = dice1+dice2;
    var d3 = dice1+dice2+dice3;
    var d4 = dice1+dice2+dice3+dice4;
    var d5 = dice1+dice2+dice3+dice4+dice5;
    var d6 = dice1+dice2+dice3+dice4+dice5+dice6;


            document.getElementById("bdice1").addEventListener("click",function(){
                var dice1 = Math.floor((Math.random() * 6)+1);
    document.getElementById("diceresult").innerHTML = "You Roll "+dice1+". Your result is " + dice1
});
        document.getElementById("bdice2").addEventListener("click",function(){
    var dice1 = Math.floor((Math.random() * 6)+1);
    var dice2 = Math.floor((Math.random() * 6)+1);
    var d2 = dice1+dice2;
    document.getElementById("diceresult").innerHTML = "You Roll "+dice1+ ", "+ dice2+
    ". Your result is " + d2
});

        document.getElementById("bdice3").addEventListener("click",function(){
    var dice1 = Math.floor((Math.random() * 6)+1);
    var dice2 = Math.floor((Math.random() * 6)+1);
    var dice3 = Math.floor((Math.random() * 6)+1);
    var d3 = dice1+dice2+dice3;
    document.getElementById("diceresult").innerHTML = "You Roll "+dice1+ ", "+ dice2+", "+dice3+". Your result is " + d3
});

        document.getElementById("bdice4").addEventListener("click",function(){
    var dice1 = Math.floor((Math.random() * 6)+1);
    var dice2 = Math.floor((Math.random() * 6)+1);
    var dice3 = Math.floor((Math.random() * 6)+1);
    var dice4 = Math.floor((Math.random() * 6)+1);
    var d4 = dice1+dice2+dice3+dice4;
    document.getElementById("diceresult").innerHTML = "You Roll "+dice1+ ", "+ dice2+", "+dice3+", "
    + dice4 +". Your result is " + d4
});

        document.getElementById("bdice5").addEventListener("click",function(){
    var dice1 = Math.floor((Math.random() * 6)+1);
    var dice2 = Math.floor((Math.random() * 6)+1);
    var dice3 = Math.floor((Math.random() * 6)+1);
    var dice4 = Math.floor((Math.random() * 6)+1);
    var dice5 = Math.floor((Math.random() * 6)+1);
    var d5 = dice1+dice2+dice3+dice4+dice5;
    document.getElementById("diceresult").innerHTML = "You Roll "+dice1+ ", "+ dice2+", "+dice3+", "
    + dice4 +", "+dice5+". Your result is " + d5
});   


        document.getElementById("bdice6").addEventListener("click",function(){
    var dice1 = Math.floor((Math.random() * 6)+1);
    var dice2 = Math.floor((Math.random() * 6)+1);
    var dice3 = Math.floor((Math.random() * 6)+1);
    var dice4 = Math.floor((Math.random() * 6)+1);
    var dice5 = Math.floor((Math.random() * 6)+1);
    var dice6 = Math.floor((Math.random() * 6)+1);
    var d6 = dice1+dice2+dice3+dice4+dice5+dice6;
    document.getElementById("diceresult").innerHTML = "You Roll "+dice1+ ", "+ dice2+", "+dice3+", "
    + dice4 +", "+dice5+", "+dice6+". Your result is " + d6
});  


        document.getElementById("monstname").addEventListener("click",function(){
            var monstername = document.getElementById("mname").innerHTML = 
            prompt("Please enter monster name");
            if (monstername == Enemy.name) {
                document.getElementById("mname").innerHTML = monstername;
            }else {
                alert("You entered incorect monster.");
            }
        });





/////////////////////////////////ENEMIES////////////////////////////////////
class Enemy {
    constructor(name, hp, attack, defense){
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
    }
}

var darkbeast = new Enemy ("Darkbeast","10","3d6","2d6");
var blightdog = new Enemy ("Blight Dog","7","2d6","2d6");
console.log(constructor.name);




