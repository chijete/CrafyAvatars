<?php

require 'lib/CrafyAvatars.php';

$myClass = new CrafyAvatars();

// clo, mouth, eyes, top
// echo $myClass->generate_svg([
//     '03','15','15','15',
//     '03','03','03','03',
//     '03','01'
// ]);

// echo $myClass->convertBaseArrayOnBaseInt([
//     '03', '15', '15', '15',
//     '03', '03', '03', '03',
//     '03', '01'
// ]);

// echo $myClass->generate_svg_byInt($myClass->getAleatoryAvatarID());

// echo $myClass->getAleatoryAvatarID();
// echo "<br/>";

var_dump($myClass->generate_svg_byInt('14130910010102021410'));

echo ((16*16*16*16)*(4*4*4*4)*(21)*(43)) . ' posibilidades.';

echo "<br/>";

var_dump($myClass->get_amounts());

?>