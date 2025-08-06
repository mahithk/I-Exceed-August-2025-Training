interface one
{
    static void display()
	{
	  System.out.println("inside the static method");
	}
     public void show();
}
 
class sample implements one
{
    void sample()
	{
	   System.out.println("inside the constructor");
	}
 
    
    public void show()
	{
	   System.out.println("Inside the show");
	}
}
 
class demointerface2
{
   static public void main(String[] asd)
	{
	   sample obj=new sample();
	   obj.show();
	   one.display();
	   obj.sample();
 
	}
}
