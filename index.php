<?php

require 'lib/CrafyAvatars.php';

$myClass = new CrafyAvatars();

// clo, mouth, eyes, top
echo $myClass->generate_svg([
    '03','15','15','15',
    '03','03','03','03',
    '03','01'
]);

// echo $myClass->convertBaseArrayOnBaseInt([
//     '03', '15', '15', '15',
//     '03', '03', '03', '03',
//     '03', '01'
// ]);

// echo $myClass->generate_svg_byInt($myClass->getAleatoryAvatarID());

// echo $myClass->getAleatoryAvatarID();
// echo "<br/>";

echo ((16*16*16*16)*(4*4*4*4)*(4)*(43)) . ' posibilidades.';

?>