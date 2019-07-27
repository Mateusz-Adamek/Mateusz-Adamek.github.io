$("#btn1").click(function () {
    let div = $("#kwadratuncio");
    div.animate({
            left: '100px',
            height: '100px',
            width: '100px'
        },
        3000);
    div.animate(
        $("#drugi").delay(3000).fadeIn(5000));


    //ŻLE! --> NIE MA CZASU PRZEJŚCIA
    // setTimeout(kolorek, 5000);
    // function kolorek() {
    //     $("#kwadratuncio").addClass('iamblue');
    // }

    div.animate(
        $('h2').show(8500).delay(1000));
   
   //ŻLE! --> ZA SZYBKIE
    //  div.addClass('iamblue')
    // .css("background-color", "blue"),




});


// 3. Po kliknięciu w przycisk kwadrat ma się przesunąć w prawo o 100px
// oraz ma się zmniejszyć do rozmiaru 100px na 100px - wykorzystaj do
// tego metodę animate() - animacja ma trwać 3 sekundy
// 4. Po zakończonej animacji zmień kolor kwadratu na niebieski - animacja
// zmiany ma trwać 5 sekund
// 5. Gdy kwadrat zmieni kolor na niebieski wyświetl wewnątrz niego napis
// w nagłówku h2 "Animacja zakończona"