public class DateUtility{
	
	public static Date getMonthStartdate(){
	    Date todaysDate=Date.today();
        return todaysDate.toStartofMonth();
    }
    public static Date getMonthLastDate(){
    	Date todaysDate=Date.today();
        return todaysDate.addMonths(1).toStartofMonth().addDays(-1);
    }

	public static Date getNextMonthStartDate(){
    	Date todaysDate=Date.today();
         return todaysDate.addMonths(1).toStartofMonth();
    }
    public static Date getNextMonthLastDate(){
    	Date todaysDate=Date.today();
        return todaysDate.addMonths(2).toStartofMonth().addDays(-1);
    }

}