// Javascript skeleton.
// Edit and adapt to your needs.
// The documentation of the NeoLoad Javascript API
// is available in the appendix of the documentation.
// Get variable value from VariableManager
var cat = context.variableManager.getValue("cat_name");
var product_name = context.variableManager.getValue("product_name");
var product_id = context.variableManager.getValue("product_id");
var time = context.variableManager.getValue("time");
if (cat==null) {
context.fail("Variable 'item' not found");
}
if (product_name==null) {
context.fail("Variable 'item' not found");
}
if (product_id==null) {
context.fail("Variable 'item' not found");
}
// Do some computation using the methods
// you defined in the JS Library
logger.debug("The category is : "+cat+" The product name is: "+product_id+" The item is :"+product_name+" The time is: "+time+" The LG is: "+context.currentLG.name);