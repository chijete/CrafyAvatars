var result_zone = document.getElementById('result_zone');
var result_id = document.getElementById('result_id');
var selector_clo = document.getElementById('selector_clo');
var selector_mouth = document.getElementById('selector_mouth');
var selector_eyes = document.getElementById('selector_eyes');
var selector_top = document.getElementById('selector_top');
var selector_theme_clo = document.getElementById('selector_theme_clo');
var selector_theme_mouth = document.getElementById('selector_theme_mouth');
var selector_theme_eyes = document.getElementById('selector_theme_eyes');
var selector_theme_top = document.getElementById('selector_theme_top');
var selector_theme_env = document.getElementById('selector_theme_env');
var selector_theme_head = document.getElementById('selector_theme_head');
var aleatory_button = document.getElementById('aleatory_button');

let myClass = new CrafyAvatars;

var actual_base_array = [
    '00', '00', '00', '00',
    '00', '00', '00', '00',
    '00', '00'
];

function executeAvatar () {
    let result = myClass.generate_svg(actual_base_array);
    result_zone.innerHTML = result;
    result_id.innerHTML = myClass.convertBaseArrayOnBaseInt(actual_base_array);
}

executeAvatar();

let amounts = myClass.get_amounts();

for (let index = 0; index < (amounts.shapes); index++) {
    let indexi = CrafyAvatars_addZeroToStart(index);
    selector_clo.innerHTML = selector_clo.innerHTML + '<option value="'+indexi+'">'+indexi+'</option>';
    selector_mouth.innerHTML = selector_mouth.innerHTML + '<option value="'+indexi+'">'+indexi+'</option>';
    selector_eyes.innerHTML = selector_eyes.innerHTML + '<option value="'+indexi+'">'+indexi+'</option>';
    selector_top.innerHTML = selector_top.innerHTML + '<option value="'+indexi+'">'+indexi+'</option>';
}

for (let index = 0; index < (amounts.themes); index++) {
    let indexi = CrafyAvatars_addZeroToStart(index);
    selector_theme_clo.innerHTML = selector_theme_clo.innerHTML + '<option value="'+indexi+'">'+indexi+'</option>';
    selector_theme_mouth.innerHTML = selector_theme_mouth.innerHTML + '<option value="'+indexi+'">'+indexi+'</option>';
    selector_theme_eyes.innerHTML = selector_theme_eyes.innerHTML + '<option value="'+indexi+'">'+indexi+'</option>';
    selector_theme_top.innerHTML = selector_theme_top.innerHTML + '<option value="'+indexi+'">'+indexi+'</option>';
    selector_theme_env.innerHTML = selector_theme_env.innerHTML + '<option value="'+indexi+'">'+indexi+'</option>';
}

for (let index = 0; index < (amounts.head_colors); index++) {
    let indexi = CrafyAvatars_addZeroToStart(index);
    selector_theme_head.innerHTML = selector_theme_head.innerHTML + '<option value="'+indexi+'">'+indexi+'</option>';
}

document.querySelectorAll('#form_zone select').forEach(function(select_item) {
    select_item.addEventListener('change', function(e) {
        actual_base_array[parseInt(this.getAttribute('array-position'))] = this.value;
        console.log(actual_base_array);
        executeAvatar();
    });
});

aleatory_button.addEventListener('click', function() {
    actual_base_array = myClass.convertBaseIntOnBaseArray(myClass.getAleatoryAvatarID());
    executeAvatar();
});

// console.log(myClass.generate_svg_byInt(myClass.getAleatoryAvatarID()));
