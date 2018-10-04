window.onload = function () {
    let canvas = document.getElementById('c');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let c = canvas.getContext('2d');

    let Mouse = {
        x : undefined,
        y : undefined
    };

    let Colors = {
      first : 'rgb(201,255,222)',
      second : 'rgb(248,255,212)',
      third : 'rgb(255,213,239)',
      fourth : 'rgb(192,249,255)',
      fifth : 'rgb(212,204,255)'
    };

    // Create random color
    function color() {
        let rand = 1 - 0.5 + Math.random() * (5 - 1 + 1);
        rand = Math.round(rand)

        if(rand === 1){
            return Colors.first
        }

        if(rand === 2 ){
            return Colors.second
        }

        if(rand === 3){
            return Colors.third
        }

        if(rand === 4){
            return Colors.fourth
        }

        if(rand === 5){
            return Colors.fifth
        }

    }

    function rad() {
        let Radius = Math.random() * 20;
        Radius = Math.round(Radius);
        if(Radius < 10){
            Radius = 10;
        }

        return Radius;

    }

    function xSpeed() {
        let xv = Math.random() * 2;
        xv = Math.round(xv);
        if(xv < 1){
            xv = -2;
        }

        return xv;
    }

    function ySpeed() {
        let yv = Math.random() * 2;
        yv = Math.round(yv);
        if(yv < 1){
            yv = -2;
        }

        return yv
    }


    function Circle(x,y,xv,yv,radius) {
        this.x = x; // X position
        this.y = y; // y position
        this.xv = xv; // x Speed
        this.yv = yv; // y Speed
        this.radius = radius; // radius of the circkle
        this.color = color(); // color of the circle
        let xSpeed = this.xv;
        let ySpeed = this.yv;

        //Drawing the circle
        this.draw = function () {
            c.beginPath();
            c.fillStyle = this.color;
            c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
            c.fill();
        };

        //Move the circle
        this.update = function () {
            if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
                this.xv = -this.xv;
            }

            if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
                this.yv = -this.yv;
            }

            this.x += this.xv;
            this.y += this.yv;

            //Interactivity
            if (Mouse.x - this.x < 50 && Mouse.x - this.x > -50 && Mouse.y - this.y < 50 && Mouse.y - this.y > -50 && this.radius < 40 ){
                this.radius += 1;
                this.xv = 0.1;
                this.yv = 0.1
            } else if(this.radius > 5) {
                this.radius -= 1;
                this.xv = xSpeed;
                this.yv = ySpeed;

            }

            this.draw();
        }
    }

    let balls = []; // All circles

    //Creating all circles
    for(let i = 0; i < 500; i++){
        let radius = 5; // Circle radius

        let x = Math.random() * innerWidth; // x Position

        if(x < 30){
            x = 35
        }
        if(x > innerWidth - 30){
            x = innerWidth - 35;
        }

        let y = Math.random() * innerHeight; // y Position

        if(y < 30){
            y = 35;
        }
        if(y > innerHeight - 30){
            y = innerHeight - 35;
        }

        let xv = xSpeed(); // x Speed
        let yv = ySpeed(); // y SPeed

        balls.push(new Circle(x,y,xv,yv,radius));
    }



    window.addEventListener('mousemove',function (evt) {
        Mouse.x = event.x;
        Mouse.y = event.y;

        console.log(Mouse);
    });

    //Interactivity


    // Animate the screen
    function animate() {
        requestAnimationFrame(animate);
        c.fillStyle = 'black';
        c.fillRect(0,0,innerWidth,innerHeight);

        for(let i = 0;i < balls.length;i++){
            balls[i].update();
        }
    }

    animate();

};