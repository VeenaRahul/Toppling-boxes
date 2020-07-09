class Ground {
    constructor(){
        var ground_options = {
            isStatic: true,
            density: 1,
            friction: 0.5
        }
        this.body = Bodies.rectangle(200, 380, 400, 40, ground_options);
        this.width = 400;
        this.height = 40;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push ();
        translate (pos.x, pos.y);
        rotate (angle);

        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop ();
    }
}