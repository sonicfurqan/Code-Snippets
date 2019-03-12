public with sharing class dataTable {
    @AuraEnabled
    public static List<Account> getAllAccounts(){
        return [Select id,Name,Phone,Type FROM Account];

    }
    
}
