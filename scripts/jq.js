$(document).ready(
    function () {
        $(".eduh").click(
            function(){
                $("#edu").slideToggle(270)
                $("#skills, #act, #hob, #git").hide(270)
            }
        )

        $(".skillsh").click(
            function(){
                $("#skills").slideToggle(270)
                $("#edu, #act, #hob, #git").hide(270)
            }
        )

        $(".acth").click(
            function(){
                $("#act").slideToggle(270)
                $("#edu, #skills, #hob, #git").hide(270)
            }
        )

        $(".hobh").click(
            function(){
                $("#hob").slideToggle(270)
                $("#edu, #skills, #act, #git").hide(270)
            }
        )

        $(".gith").click(
            function(){
                $("#git").slideToggle(270)
                $("#edu, #skills, #hob, #act").hide(270)
            }
        )

        $(".allh").click(
            function(){
                $(".root").slideUp(1)
                $(".root").toggle(220)
            }
        )

        $("#about").fadeIn(1000)
        $(".headsjq, #edu, .panel, #footer, #end").fadeIn(1800)
    }
)