//1.Class-Movie

Template: 

class Movie{
  constructor(title,studio,rating){

       this.title=title;
       this.studio=studio;
       this.rating=rating;
}
}
var c=new Movie("t","s","PG");

//to print:
console.log(C);

//o/p:

//Movie{title='t',studio='s',rating='PG'}

//Accessing using methods:

class Movie{
  constructor(title,studio,rating){

       this.title=title;
       this.studio=studio;
       this.rating=rating;
}

getPG(){
return this.title+" is created in a studio "+this.studio+" got the rating "+this.rating;
}
}
var c1=new Movie("Casino Royale","Eon Productions","PG­13");
console.log(c1);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//2.Class-Circle:

const pi=3.14159;
class Circle{
  
  constructor(radius,color){

       this.radius=radius;
       this.color=color;
}

getarea(){
return "The area of circle is:"+pi*this.radius*this.radius+" The color of circle is:"+this.color;
}
}
var are=new Movie("1.0","Red");
console.log(are);
