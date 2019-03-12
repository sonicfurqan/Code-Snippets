/* Class to add prechat details
 * @param
 * @Constructor
 * label:
 * value:
 * transcriptFields:
 * displayToAgent:
 *
 * @method:setEntityMaps()
 * @param
 * entityName:
 * fieldName:
 * 
 */
public class prechatDetails {
 public String label {set;get;}
 public String value {set;get;}
 public String transcriptFields {set;get;}
 public Boolean displayToAgent {set;get;}
 public entityMaps entityMaps = new entityMaps();

  public prechatDetails(String label, String value, String transcriptFields, Boolean displayToAgent) {
  this.label = label;
  this.value = value;
  this.transcriptFields = transcriptFields;
  this.displayToAgent = displayToAgent;
 }
 
 
 
 public void setEntityMaps(String entityName, String fieldName) {
  entityMaps.entityName = entityName;
  entityMaps.fieldName = fieldName;
 }

}