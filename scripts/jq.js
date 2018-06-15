$(document).ready(
    function () {
        $(".eduh").click(
            function(){
                $(".eduh").toggleClass("opa")
                $("#edu").slideToggle(250)
                $("#skills, #act, #hob, #git, #con").hide(250)
                $(".skillsh, .hobh, .acth, .gith, .conh").removeClass("selected")
                $(".eduh").addClass("selected")
            }
        )

        $(".skillsh").click(
            function(){
                $(".skillsh").toggleClass("shrink")
                $("#skills").slideToggle(250)
                $("#edu, #act, #hob, #git, #con").hide(250)
                $(".eduh, .hobh, .acth, .gith, .conh").removeClass("selected")
                $(".skillsh").addClass("selected")
            }
        )

        $(".acth").click(
            function(){
                $(".acth").toggleClass("shrink")
                $("#act").slideToggle(250)
                $("#edu, #skills, #hob, #git, #con").hide(250)
                $(".eduh, .hobh, .skillsh, .gith, .conh").removeClass("selected")
                $(".acth").addClass("selected")
            }
        )

        $(".hobh").click(
            function(){
                $(".hobh").toggleClass("shrink")
                $("#hob").slideToggle(250)
                $("#edu, #skills, #act, #git, #con").hide(250)
                $(".eduh, .skillsh, .acth, .gith, .conh").removeClass("selected")
                $(".hobh").addClass("selected")
            }
        )

        $(".gith").click(
            function(){
                $(".gith").toggleClass("shrink")
                $("#git").slideToggle(250)
                $("#edu, #skills, #hob, #act, #con").hide(250)
                $(".eduh, .hobh, .acth, .skillsh, .conh").removeClass("selected")
                $(".gith").addClass("selected")
            }
        )

        $(".conh").click(
            function(){
                $(".conh").toggleClass("shrink")
                $("#con").slideToggle(250)
                $("#edu, #skills, #hob, #act, #git").hide(250)
                $(".eduh, .hobh, .acth, .gith, .skillsh").removeClass("selected")
                $(".conh").addClass("selected")
            }
        )

        $(".skillsh, .hobh, .acth, .gith, .conh").removeClass("selected")
        $(".eduh").addClass("selected")
        $("#edu").toggle(250)
    }
)