# CrafyAvatars
Generador de avatares de Crafy Holding. Variación de Multiavatar. Capaz de generar actualmente 2.885.681.152 avatares únicos.

# How to
The lib folder contains the library for PHP and JavaScript (CrafyAvatars.php and CrafyAvatars.js, respectively).
Both files contain the class "CrafyAvatars".

1. Init an instance of the class (CrafyAvatars).
2. Invoke method generate_svg with a base array with 10 values.

## PHP example
```
require 'lib/CrafyAvatars.php'; // load library
$myClass = new CrafyAvatars(); // init class
$svg_string = $myClass->generate_svg_byInt($myClass->getAleatoryAvatarID()); // generates aleatory avatar svg code
echo $svg_string; // shows image as svg
```
