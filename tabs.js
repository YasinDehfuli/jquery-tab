$(function () {
    $("#tab-control li").click(function () {
        $("#tab-control li").removeClass('active');
        $(this).addClass('active');
        $("#tabs .card").slideUp(300);
        $($(this).data('target')).slideDown(300);
    });
});