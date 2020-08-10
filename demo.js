const infinite = [
    'bars',
    'squares',
    'circles',
    'dots',
    'spinner',
    'dashed',
    'line',
    'bordered_line'
];
const finite = [
    'spinner2',
    'line2',
    'bordered_line2'
];

function resetInfinite() {
    for (let i = 0; i < infinite.length; i++){
        $("#" + infinite[i]).attr("hidden", true);
    }
}

function resetFinite() {
    for (let i = 0; i < finite.length; i++){
        $("#" + finite[i]).attr("hidden", true);
    }
}
$(document).ready(function() {

    let loader = new lv();
    loader.initLoaderAll();
    loader.startObserving();

    for (let i = 0; i < infinite.length; i++){
        let element = infinite[i];
        
        $("#" + element + "_button").unbind().click(function(event) {
            event.preventDefault();
            resetInfinite();
            $("#" + element).attr("hidden", false);
        });
    }
    for (let i = 0; i < finite.length; i++) {
        let element = finite[i];
        
        $("#" + element + "_button").unbind().click(function(event) {
            event.preventDefault();
            resetFinite();
            $("#" + element).attr("hidden", false);
        });
    }
    $("#finite").unbind().click(function(event) {
        resetInfinite();
        $("#infinite_container").attr("hidden", true);
        $("#infinite").removeClass("active");
        $("#finite").addClass("active");
        $("#finite_container").attr("hidden", false);
    });
    $("#infinite").unbind().click(function(event) {
        resetFinite();
        $("#finite_container").attr("hidden", true);
        $("#finite").removeClass("active");
        $("#infinite").addClass("active");
        $("#infinite_container").attr("hidden", false);
    });
    
    let spinners = document.getElementsByClassName("lv-determinate_circle");
    let lines = document.getElementsByClassName("lv-determinate_line");
    let borderedLines = document.getElementsByClassName("lv-determinate_bordered_line");

    $("#fill_spinner").unbind().click(function(event) {
        event.preventDefault();
        for(let i = 0; i < spinners.length; i++) {
            let circle = lv.create(spinners[i]);
            circle.fill(200);
        }
    });
    $("#add_spinner").unbind().click(function (event) {
       event.preventDefault();
       for(let i = 0; i < spinners.length; i++) {
           let circle = lv.create(spinners[i]);
           circle.add(5, 200);
       }
    });
    $("#remove_spinner").unbind().click(function (event) {
        event.preventDefault();
        for(let i = 0; i < spinners.length; i++) {
            let circle = lv.create(spinners[i]);
            circle.add(-10, 200);
        }
    });
    $("#reset_spinner").unbind().click(function (event) {
        event.preventDefault();
        for(let i = 0; i < spinners.length; i++) {
            let circle = lv.create(spinners[i]);
            circle.reset(200);
        }
    });
    $("#fill_line").unbind().click(function(event) {
        event.preventDefault();
        for(let i = 0; i < lines.length; i++) {
            let el = lv.create(lines[i]);
            el.fill(200);
        }
    });
    $("#add_line").unbind().click(function (event) {
        event.preventDefault();
        for(let i = 0; i < lines.length; i++) {
            let el = lv.create(lines[i]);
            el.add(5, 200);
        }
    });
    $("#remove_line").unbind().click(function (event) {
        event.preventDefault();
        for(let i = 0; i < lines.length; i++) {
            let el = lv.create(lines[i]);
            el.add(-10, 200);
        }
    });
    $("#reset_line").unbind().click(function (event) {
        event.preventDefault();
        for(let i = 0; i < lines.length; i++) {
            let el = lv.create(lines[i]);
            el.reset(200);
        }
    });
    $("#fill_bordered_line").unbind().click(function(event) {
        event.preventDefault();
        for(let i = 0; i < borderedLines.length; i++) {
            let el = lv.create(borderedLines[i]);
            el.fill(200);
        }
    });
    $("#add_bordered_line").unbind().click(function (event) {
        event.preventDefault();
        for(let i = 0; i < borderedLines.length; i++) {
            let el = lv.create(borderedLines[i]);
            el.add(5, 200);
        }
    });
    $("#remove_bordered_line").unbind().click(function (event) {
        event.preventDefault();
        for(let i = 0; i < borderedLines.length; i++) {
            let el = lv.create(borderedLines[i]);
            el.add(-10, 200);
        }
    });
    $("#reset_bordered_line").unbind().click(function (event) {
        event.preventDefault();
        for(let i = 0; i < borderedLines.length; i++) {
            let el = lv.create(borderedLines[i]);
            el.reset(200);
        }
    });
});