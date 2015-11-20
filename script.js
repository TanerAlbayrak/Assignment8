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
