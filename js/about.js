$("document").ready(function () {
    
    function skill(id, per){
        let bar = new ProgressBar.Line(id,{
            strokeWidth: 3.5,
            color: "#c97189",
            duration: 1800,
            step: function(state, circle){
                circle.setText(Math.round(circle.value() * 100) + "%")
            }    
        })
        bar.animate(per)
    }

    skill("#ps", 0.85)
    skill("#ai", 0.85)
    skill("#xd", 0.7)
    skill("#html", 0.85)
    skill("#css", 0.85)
    skill("#jquery", 0.55)
});