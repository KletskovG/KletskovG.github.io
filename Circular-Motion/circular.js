window.onload = function () {
  const canvas = document.getElementById('c');
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  const c = canvas.getContext('2d');

  const mouse = {
      x : innerWidth / 2,
      y : innerHeight / 2
  };


  addEventListener('mousemove', event =>{
      mouse.x = event.clientX;
      mouse.y = event.clientY;
  });

  addEventListener('resize', () =>{
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      init();
  });

  function randomInt(min,max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function Color(colors) {
  }

  function Particle(x,y,radius) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = 'blue';
      this.radians = Math.random() * Math.PI*   2;
      this.velocity = 0.05;
      this.distanceFromCenter = randomInt(50,120);
      this.lastMouse = {
          x : x,
          y : y
      };

      this.update = () => {
          const lastPoint = {
              x : this.x,
              y : this.y
          };

          this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.05;
          this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.05;

          this.radians += this.velocity;

          this.x = this.lastMouse.x +  Math.cos(this.radians) * this.distanceFromCenter;
          this.y = this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter;
          this.draw(lastPoint);
      };

      this.draw = lastPoint =>{
        c.beginPath();
        c.storkeStyle =  'blue';
        c.lineWidth = this.radius;
        c.moveTo(lastPoint.x, lastPoint.y);
        c.lineTo(this.x,this.y);
        c.stroke();
        c.fillStyle = 'blue';
        c.fill();
        c.closePath();
      }
  }

  let particles;
  function init() {
      particles= [];
      
      for (let i = 0; i < 50; i++){
            const radius = (Math.random() * 5) + 1;
           particles.push(new Particle(canvas.width/2 ,canvas.height/2, radius));
      }

      console.log(particles)
  }
  
  function animate() {
      requestAnimationFrame(animate);
      c.fillStyle = 'rgba(255,255,255,0.05)';
      c.fillRect(0,0,canvas.width, canvas.height);
      particles.forEach(particle =>{
          particle.update();
      });
  }

  init();
  animate();

};