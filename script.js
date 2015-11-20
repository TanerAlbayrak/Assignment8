/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {


      $('.tabs a').click(function() {
        // save $(this) in a variable for efficiency
        var $this = $(this);

        // hide panels
        $('.panel').hide();
        $('.tabs a.active').removeClass('active');

        // add active state to new tab
        $this.addClass('active').blur();
        // retrieve href from link (is id of panel to display)
        var panel = $this.attr('href');
        // show panel
        $(panel).fadeIn(250);

        // don't follow link down page
        return(false);
      }); // end click

      // open first tab
      $('.tabs li:first a').click();
    }); // end ready
function makeTable() {
    //get all form data into variables
    var rStart = $("#rowStart").val();
    var rEnd = $("#rowEnd").val();
    var cStart = $("#colStart").val();
    var cEnd = $("#colEnd").val();
    var ans ;
    
    var numRows = rEnd - rStart ;
    var numCols = cEnd - cStart ;
    
    
    if ( parseInt(numRows) > 50 || parseInt(numCols) > 50) {
        $("#errors").html("Error: Please enter a smaller range of numbers.");
        return false ;
    }
    
    /*if ( isNaN(rStart) || isNaN(rEnd) || isNaN(cStart) || isNaN(cEnd)) {
        $("#errors").html("Error: Please enter only numbers.");
        return false ;
    }*/ // jQuery Validator takes care of this
    
    if ( parseInt(cEnd) < parseInt(cStart)) {
        $("#errors").html("Error: Multiplicand 2 is larger than multiplicand 1. The second number must be smaller than the first.");
        return false ;
    }
    
    if ( parseInt(rEnd) < parseInt(rStart)) {
        $("#errors").html("Error: Multiplier 2 is larger than multiplier 1. The second number must be smaller than the first.");
        
        return false ;
    }
    
    //the actual table string to be inserted into HTML
    var tableData = "<table class='tab'>" ;
    tableData += "<thead><tr><th></th>";
    
    //creates the first row in the table with data
    for ( var i = 1; i <= numRows + 1; i++ ) {
        ans = parseInt(rStart) + (i - 1) ;
        tableData += "<th>" + ans + "</th>" ;
    }
    
    tableData += "</tr></thead><tbody>" ;
    
        for ( var i = 0; i <= numCols; i++ ) {
            tableData += "<tr>" ;
            ans = parseInt(cStart) + i ;
            tableData += "<td>" + ans + "</td>" ;
            
            //Does the multiplication of corresponding values, then put into table
            for ( var j = 1; j <= numRows + 1; j++ ) {
                ans = parseInt(rStart) + (j - 1) ;
                ans *= (parseInt(cStart) + i) ;
                tableData += "<td>" + ans + "</td>" ;
            }
            tableData += "</tr>" ;
        }
        tableData += "</tbody></table>" ;
        
        document.getElementById("multTable").innerHTML = tableData ; // place the table in the HTML
    };

$(document).ready(function() {
    $("#tableForm").validate({
        rules: {
            rowStart: {
                required: true, // field is required
                number: true // must be a number
            },
            rowEnd: {
                required: true,
                number: true
            },
            colStart: { 
                required: true,
                number: true
            },
            colEnd: {
                required: true,
                number: true
            }
            },
            //error messages to be displayed if rules are broken
            messages: {
                rowStart: {
                    required: "Please fill out this field.",
                    number: "Please enter only numbers."
                },
                rowEnd: {
                    required: "Please fill out this field.",
                    number: "Please enter only numbers."
                },
                colStart: {
                    required: "Please fill out this field.",
                    number: "Please enter only numbers."
                },
                colEnd: {
                    required: "Please fill out this field.",
                    number: "Please enter only numbers."
                }
            }
        }
    )}
);
