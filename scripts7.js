var high = 30;

for(var i = 0; i < high; i++) {
    for (var k = 0; k < high - i; k++) {
        document.write(" ");
    }
        for (var j = 0; j <= i * 2; j++) {
            document.write("*");
    }
    document.write("<br >");
}