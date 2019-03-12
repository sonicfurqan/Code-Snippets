 /* Class to add prechatEntities details
 * @param
 * @Constructor
 * fieldName:
 * label:
 * doCreate:
 * doFind:
 *
 * @method:prechatEntities()
 * @param
 * entityName:
 * linkToEntityField:
 * saveToTranscript:
 * showOnCreate:
 * 
 */
 public class prechatEntities {
  public String entityName {set;get;}
  public Boolean showOnCreate {set;get;}
  public String linkToEntityField {set;get;}
  public String saveToTranscript {set;get;}
  List < entityFieldsMaps > entityFieldsMaps = new List < entityFieldsMaps > ();

  public void addEntityFieldsMaps(String fieldName, String label, Boolean doCreate, Boolean doFind) {
   entityFieldsMaps x = new entityFieldsMaps();
   x.fieldName = fieldName;
   x.label = label;
   x.doFind = doFind;
   x.isExactMatch = doFind;
   x.doCreate = doCreate;
   entityFieldsMaps.add(x);
  }
  
  public prechatEntities(String entityName, String linkToEntityField, String saveToTranscript, Boolean showOnCreate) {
   this.entityName = entityName;
   this.linkToEntityField = linkToEntityField;
   this.saveToTranscript = saveToTranscript;
   this.showOnCreate = showOnCreate;
  }
 }