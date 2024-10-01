
    // Sticky Navbar
    $(window).scroll(function () {                    //Scroll is a event listener.
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//*******************************************************************************************************
//*******************************************************************************************************
//*******************************************************************************************************

    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {                  //load and resize are event listeners on window
        if (this.matchMedia("(min-width: 992px)").matches) {   // Checks the screen width is 992px or greater
            $dropdown.hover(                                       
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);                  //add show class to .dropdown element
                    $this.find($dropdownToggle).attr("aria-expanded", "true"); //Set aria-expanded to true
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);                      //Remove show class from .dropdown element
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false"); //Set aria-expanded to false
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");  //If screen width is less than 992px, removes mouse enter and mouse leave event handlers            
        }
    });


    
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//*******************************************************************************************************
//*******************************************************************************************************
//*******************************************************************************************************


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {     //Click event happens
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo'); //easeInOutExpo is a easing function for smooth scrolling
        return false;
    });





   



