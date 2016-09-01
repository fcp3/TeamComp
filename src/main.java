
public class main {
  /*
   * 1. Genji
   * 2. McCree
   * 3. Pharah
   * 4. Reaper
   * 5. Soldier: 76
   * 6. Tracer
   * 7. Bastion
   * 8. Hanzo
   * 9. Junkrat
   * 10. Mei
   * 11. Torbjorn
   * 12. Widowmaker
   * 13. D.Va
   * 14. Reinhardt
   * 15. Roadhog
   * 16. Winston
   * 17. Zarya
   * 18. Ana
   * 19. Lucio
   * 20. Mercy
   * 21. Symmetra
   * 22. Zenyata
   * 
   */
  
  public static String[] heroes = {
       "Genji",
       "McCree",
       "Pharah",
       "Reaper",
       "Soldier: 76",
       "Tracer",
       "Bastion",
       "Hanzo",
       "Junkrat",
       "Mei",
       "Torbjorn",
       "Widowmaker",
       "D.Va",
       "Reinhardt",
       "Roadhog",
       "Winston",
       "Zarya",
       "Ana",
       "Lucio",
       "Mercy",
       "Symmetra",
       "Zenyata"
  };
  
  public static String[][] counters = {
      {"Winston", "Mei"},
      {"Widowmaker", "Hanzo"},
      {"Soldier: 76", "Widowmaker"},
      {"Pharah", "McCree"},
      {"Roadhog", "Reinhardt"},
      {"McCree", "Roadhog"},
      {"Genji", "Junkrat"},
      {"Widowmaker", "Tracer"},
      {"Winston", "Pharah"},
      {"Tracer", "Pharah"},
      {"Widowmaker", "D.Va"},
      {"D.Va", "Genji"},
      {"Mei", "Zenyatta"},
      {"Symmetra", "Genji"},
      {"Mei", "Reaper"},
      {"Reaper", "Bastion"},
      {"Junkrat", "Pharah"},
      {"D.Va", "Genji"},
      {"Mei", "McCree"},
      {"Soldier: 76", "Genji"},
      {"Roadhog", "Pharah"},
      {"Widowmaker", "Genji"},  
  };  
  
  public static String[] team = new String[6];
  
  public static int ind = 0;
  
  public static void main(String[]args){
    
    //Test enemy team
    String[]otherTeam = {"Reinhardt","Mercy", "Zenyata", "McCree", "Tracer", "Roadhog"};
    
    team = createTeam(otherTeam);
    
    for(int i=0; i<6; i++){
      System.out.print(team[i]+",");
    }
  }
  
  
  public static String[] createTeam(String[]otherTeam){
    
    for(int i=0; i<6; i++){
      team[i] = addCounter(otherTeam[i]);
    }
    
    return team;
  }
  
  //method to add counter hero to enemy hero (takes in enemy hero as parameter)
  public static String addCounter(String enemyHero){
    for(int i=0; i<22; i++){
      if(team.length == 0){
    	  if(enemyHero.equals(heroes[i])){
    		  ind++;
    	  return counters[i][0];
    	  }
      }
      if(enemyHero.equals(heroes[i])){
        if(checkDupes(counters[i][0])){
        	ind++;
          return counters[i][0];
        }else{
        	ind++;
          return counters[i][1];
        }
      }
    }
    return null;
  }
  
  //method to check for duplicates in generated team
  public static boolean checkDupes(String counterHero){
    if(ind==0)return true;
    for(int i=0; i<ind; i++){
    	System.out.println(team[i]);
    	System.out.println(counterHero);
    	System.out.println("false");
      if(team[i].equals(counterHero))return false;
    }
    return true;
  }
  
  public static String matchHero(String hero){
    
    System.out.println("test");
    return null;
  
  }
}