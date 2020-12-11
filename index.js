// Add your Circle class here

class Circle{
  constructor(radius) {
    this.radius=radius;
  } 
  
  get diameter(){
    return this.radius*2;
  }
  
  get circumference(){
    return 2*Math.PI*this.radius;
  }
   get area(){
    return Math.PI*this.radius**2;
  }
  
  
  set diameter(r){
    this.radius=r/2
  }
  
  /*set circumference(){
   
  }
   set area(){
   
  }*/
  
}

/*
  describe( "sets", () => {
    it( "the radius using the pseudo-property `circle.diameter`", () => {
      circle.diameter = 36
      expect( circle.radius ).to.eq( 18 )
    } )

    it( "the radius using the pseudo-property `circle.circumference`", () => {
      circle.circumference = 100
      expect( circle.radius ).to.be.at.least( 15 )
      expect( circle.radius ).to.be.at.most( 16 )
    } )
  } )

} )*/