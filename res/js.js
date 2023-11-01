$(function(){
    $("#menu").on('click',function(){
        $("#menu>svg").toggleClass('open');
        $("#mm-div").toggleClass('nx-bg-transparent nx-fixed nx-inset-0 nx-z-10 nx-bg-black/80 dark:nx-bg-black/60');
        $("#mm-aside").toggleClass('max-md:[transform:translate3d(0,-100%,0)] max-md:[transform:translate3d(0,0,0)]')
    })
})

//motion-reduce:nx-transition-none [transition:background-color_1.5s_ease] nx-bg-transparent
//motion-reduce:nx-transition-none [transition:background-color_1.5s_ease] nx-fixed nx-inset-0 nx-z-10 nx-bg-black/80 dark:nx-bg-black/60

//nextra-sidebar-container nx-flex nx-flex-col md:nx-top-16 md:nx-shrink-0 motion-reduce:nx-transform-none nx-transform-gpu nx-transition-all nx-ease-in-out print:nx-hidden md:nx-w-64 md:nx-hidden max-md:[transform:translate3d(0,-100%,0)]
//nextra-sidebar-container nx-flex nx-flex-col md:nx-top-16 md:nx-shrink-0 motion-reduce:nx-transform-none nx-transform-gpu nx-transition-all nx-ease-in-out print:nx-hidden md:nx-w-64 md:nx-hidden max-md:[transform:translate3d(0,0,0)]
