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
  
  
  set diameter(d){
    this.radius=d/2;
  }
  
  set circumference(c){
    this.radius=c/(Math.PI*2);
   
  }
   /*set area(){
   
  }*/
  
}


/*
  describe( "sets", () => {
  

    it( "the radius using the pseudo-property `circle.circumference`", () => {
      circle.circumference = 100
      expect( circle.radius ).to.be.at.least( 15 )
      expect( circle.radius ).to.be.at.most( 16 )
    } )
  } )

} )*/