var selector = "#myDIV button";
$(".item").show();
$(".item").not(".standart").hide();
$(".pesan").val("Biasa aja");

$(selector).on("click", function () {
  $(selector).removeClass("active");
  $(this).addClass("active");
});

$(function () {
  $("#standart").click(function () {
    $(".item").show();
    $(".item").not(".standart").hide();
    $(".pesan").val("Biasa aja");
    return false;
  });

  $("#senang").click(function () {
    $(".item").show();
    $(".item").not(".senang").hide();
    $(".pesan").val("Makasih ayang");
    return false;
  });

  $("#ssenang").click(function () {
    $(".item").show();
    $(".item").not(".ssenang").hide();
    $(".pesan").val("Makasih ayang, Aku senang banget");
    return false;
  });

  $("#marah").click(function () {
    $(".item").show();
    $(".item").not(".marah").hide();
    $(".pesan").val("Aku masih marah !!!");
    return false;
  });
});

function myFunction() {
  var pesanwhatsapp = $(".pesan").val();
  location.href = "https://wa.me/6289627905164?text=" + pesanwhatsapp;
}
