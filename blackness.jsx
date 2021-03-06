/*Copyright 2018 Tomilola Adewale
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/ 

{
    
var space =3;
var movementAmp = 90;
var startMov = -90;
var endMov = 990;
var powersFunction =7;
var expressionString ='space='+space+';// space is the hold time \nmovementAmp='+movementAmp+';//movementAmp is the speed when were cruisin \nt=time-inPoint;turningPoint =1.667;h=0; \n \nif ( t <= turningPoint){x=t-2;h='+startMov+'*Math.pow(x, '+powersFunction+')+transform.position[0]+(t* movementAmp);} \nelse if ( t > turningPoint && t < turningPoint +space){h=0+transform.position[0]+(t* movementAmp);} \nelse if ( t >= turningPoint){x=t-1.38-space;h='+endMov+'*Math.pow(x, '+powersFunction+')+transform.position[0]+(t* movementAmp);} \n[h,value[1]];';


function myScript(thisObj) {
          function myScript_buildUI(thisObj) {
                    var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "My Panel Name", [0, 0, 300, 300]);


function myFocusFunction()
{if (this.text ===this.text) {this.text=""}
    }


function myBlurFunction()
{if (this.text ==="") {this.text=this.text}
    }

 

 
 var pan1 = myPanel.add ("panel");
pan1.spacing =5;
pan1.alignChildren = "fill";

var st_getHoldTime = pan1.add ("statictext", undefined, "Define Hold Time");
var et_getHoldTime = pan1.add ("edittext", undefined, "1");
var st_powersFunction = pan1.add ("statictext", undefined, "Define Powers Function");
var et_powersFunction = pan1.add ("edittext", undefined, "7");
var st_getHoldRate = pan1.add ("statictext", undefined, "Define Hold Rate");
var et_getHoldRate = pan1.add ("edittext", undefined, "100");
var st_startMoveSpeed = pan1.add ("statictext", undefined, "Define Initial Move Speed");
var et_startMoveSpeed = pan1.add ("edittext", undefined, "900");
var st_endMoveSpeed = pan1.add ("statictext", undefined, "Define Final Move Speed");
var et_endMoveSpeed = pan1.add ("edittext", undefined, "90");



var radiogroup = pan1.add ("group"); 
radiogroup.label = "Horiz or Vert";
var rb_horizontal = radiogroup.add ("radiobutton", undefined, "horizontal");
var rb_vertical = radiogroup.add ("radiobutton", undefined, "vertical");
radiogroup.children[0].value = true;

var bt_produceScript = myPanel.add ("button", undefined, "ProduceScript");

et_getHoldTime.addEventListener("focus", function() {if (this.text ===this.text) {this.text=""}});
et_powersFunction.addEventListener("focus", function() {if (this.text ===this.text) {this.text=""}});
et_getHoldRate.addEventListener("focus", function() {if (this.text ===this.text) {this.text=""}});
et_startMoveSpeed.addEventListener("focus", function() {if (this.text ===this.text) {this.text=""}});
et_endMoveSpeed.addEventListener("focus", function() {if (this.text ===this.text) {this.text=""}});

et_getHoldTime.addEventListener("blur", function() {if (this.text ==="") {this.text="1";}});
et_powersFunction.addEventListener("blur", function() {if (this.text ==="") {this.text="7";}});
et_getHoldRate.addEventListener("blur", function() {if (this.text ==="") {this.text="100";}});
et_startMoveSpeed.addEventListener("blur", function() {if (this.text ==="") {this.text="900";}});
et_endMoveSpeed.addEventListener("blur", function() {if (this.text ==="") {this.text="90"}});





function mainScript ()
{
var space =et_getHoldTime.text;
var movementAmp =et_getHoldRate.text;
var startMov = et_startMoveSpeed.text;
var endMov = et_endMoveSpeed.text;
var powersFunction =et_powersFunction.text;

if (radiogroup.children[0].value == true)
{
expressionString ='space='+space+';// space is the hold time \nmovementAmp='+movementAmp+';\n//movementAmp is the speed when were cruisin \nt=time-inPoint;\nturningPoint =1.667;\nh=0; \n \nif ( t <= turningPoint){x=t-2;h='+startMov+'*Math.pow(x, '+powersFunction+')+transform.position[0]+(t* movementAmp);} \nelse if ( t > turningPoint && t < turningPoint +space){h=0+transform.position[0]+(t* movementAmp);} \nelse if ( t >= turningPoint){x=t-1.38-space;h='+endMov+'*Math.pow(x, '+powersFunction+')+transform.position[0]+(t* movementAmp);} \n[h,value[1]];';
}
if (radiogroup.children[1].value == true)
{
expressionString ='space='+space+';// space is the hold time\nmovementAmp='+movementAmp+';\n//movementAmp is the speed when were cruisin\nt=time-inPoint;\nturningPoint =1.667;\nh=0; \nif ( t <= turningPoint)\n{\nx=t-2;\nh='+startMov+'*Math.pow(x, '+powersFunction+')+position[1]+(t* movementAmp);}\nelse if ( t > turningPoint && t < turningPoint +space){h=0+position[1]+(t* movementAmp);}\nelse if ( t >= turningPoint){x=t-1.38-space;\nh='+endMov+'*Math.pow(x, '+powersFunction+')+position[1]+(t* movementAmp);} \n[value[0],h];';
}



var myComp = app.project.activeItem;
var selectedLayers = myComp.selectedLayers;


    for (m = 0; m<selectedLayers.length; m++)
      {
            var myLayerPosition=selectedLayers[m].property("position");
            myLayerPosition.expression=expressionString;      
        }

}


bt_produceScript.onClick = mainScript




 
                    // DropDownList default selection
                    //myPanel.grp.myDropDownList.selection = 2;//Item index starts at 0
 
 
                    //Setup panel sizing and make panel resizable
                    myPanel.layout.layout(true);
                    //myPanel.pan1.minimumSize = myPanel.pan1.size;
                    myPanel.layout.resize();
                    myPanel.onResizing = myPanel.onResize = function () {this.layout.resize();}
 
                    return myPanel;
          }
 
 
          var myScriptPal = myScript_buildUI(thisObj);
 
 
          if ((myScriptPal != null) && (myScriptPal instanceof Window)) {
                    myScriptPal.center();
                    myScriptPal.show();
                    }
          }

          myScript(this);
}
 
