jQuery(document).ready(function ($) {
    //console.log('ppt_ajax_obj:', ppt_ajax_obj); // debug

    $("#ppt-form").on("submit", function (e) {
        e.preventDefault();

        // eslint-disable-next-line no-undef
        if (!ppt_ajax_obj) {
            alert("ppt_ajax_obj is not defined!");
            return;
        }

        // eslint-disable-next-line no-undef
        $.post(ppt_ajax_obj.ajax_url, {
            action: "ppt_save_data",
            // eslint-disable-next-line no-undef
            nonce: ppt_ajax_obj.nonce,
            name: $("#ppt_name").val(),
            email: $("#ppt_email").val()
        }, function (response) {
            if (response.success) {
                let html = "<h3>Saved Data:</h3><ul>";
                response.data.forEach(function (item) {
                    html += "<li>" + item.name + " - " + item.email + " (" + item.time + ")</li>";
                });
                html += "</ul>";
                $("#ppt-result").html(html);
            } else {
                alert("Error: " + response.data);
            }
        });
    });
});
