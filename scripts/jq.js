$(document).ready(
    function () {
        $(".eduh").click(
            function(){
                $(".eduh").toggleClass("opa")
                $("#edu").slideToggle(270)
                $("#skills, #act, #hob, #git").hide(270)
                $(".skillsh, .hobh, .acth, .gith, .allh").removeClass("selected")
                $(".eduh").addClass("selected")
            }
        )

        $(".skillsh").click(
            function(){
                $(".skillsh").toggleClass("shrink")
                $("#skills").slideToggle(270)
                $("#edu, #act, #hob, #git").hide(270)
                $(".eduh, .hobh, .acth, .gith, .allh").removeClass("selected")
                $(".skillsh").addClass("selected")
            }
        )

        $(".acth").click(
            function(){
                $(".acth").toggleClass("shrink")
                $("#act").slideToggle(270)
                $("#edu, #skills, #hob, #git").hide(270)
                $(".eduh, .hobh, .skillsh, .gith, .allh").removeClass("selected")
                $(".acth").addClass("selected")
            }
        )

        $(".hobh").click(
            function(){
                $(".hobh").toggleClass("shrink")
                $("#hob").slideToggle(270)
                $("#edu, #skills, #act, #git").hide(270)
                $(".eduh, .skillsh, .acth, .gith, .allh").removeClass("selected")
                $(".hobh").addClass("selected")
            }
        )

        $(".gith").click(
            function(){
                $(".gith").toggleClass("shrink")
                $("#git").slideToggle(270)
                $("#edu, #skills, #hob, #act").hide(270)
                $(".eduh, .hobh, .acth, .skillsh, .allh").removeClass("selected")
                $(".gith").addClass("selected")
            }
        )

        $(".allh").click(
            function(){
                $(".allh").toggleClass("shrink")
                $(".root").slideUp(1)
                $(".root").toggle(220)
                $(".eduh, .hobh, .acth, .gith, .skillsh").removeClass("selected")
                $(".allh").addClass("selected")
            }
        )

        $(".skillsh, .hobh, .acth, .gith, .allh").removeClass("selected")
        $(".eduh").addClass("selected")
        $(".card-header, #edu, .panel, #footer, #end").fadeIn(1800)
    }
)