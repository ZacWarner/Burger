$(document).ready(function () {
    $(document).on("click", ".devourBurger", function () {
        var id = $(this).data("id");
        $.ajax("/api/burgers/" + id, {
            type: "put",
            data: "devoured"
        }).then(
            function () {
                console.log("changed devoured to true")
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {

        event.preventDefault();

        var name = $("#ca").val().trim();
        console.log(name);

        $.post("/api/burgers/name/" + name)
            .then(
                function () {
                    console.log("created new burger");
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
    });

});