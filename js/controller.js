// Get form imputs
function get_form_data(){
  console.log("User clicked Submit Form Button");
    
  console.log(month_enter.value);
    
  console.log(exposure_select.value);
    
  console.log(rotation_select.value);

  if(bw_edema_yes.checked == true){
      bw_edema = "yes";}
  else if(bw_edema_no.checked == true){
      bw_edema = "no";}
    
   console.log(bw_edema);
    
   console.log(bones_enter.value);
    
   console.log(heart_enter.value);
    
   console.log(diaphragm_enter.value);
    
   console.log(gas_enter.value);
    
   console.log(lung_enter.value);
    
   console.log(lines_enter.value);
    
   console.log(report_enter.value);
  
}