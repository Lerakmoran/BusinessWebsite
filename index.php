<?php

// Get language from cookies
if (isset($_COOKIE["lang"])) {
    $lang = $_COOKIE["lang"];
} else {
    $lang = "en";
}

// Tenzij cookies een andere taal heeft opgeslagen, engels is standaard
header("Location: " . "../" . $lang . "/index.html");