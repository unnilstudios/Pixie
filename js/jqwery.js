$(document).ready(function(){$(".mobile-nav").click(function(){$(".nav").toggle("500","swing"),$(".mobile-nav").toggleClass("x-anim span")}),$(function(){$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var n=$(this.hash);if(n=n.length?n:$("[name="+this.hash.slice(1)+"]"),n.length)return $("html, body").animate({scrollTop:n.offset().top},1e3),!1}})})});