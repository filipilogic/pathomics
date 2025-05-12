jQuery(document).ready(function($) {
    // Helper to set dropdown to loading state
    function setDropdownLoading(isLoading) {
        var $dropdown = $("#cases-dropdown");
        if (isLoading) {
            // Store current value and text for restoration
            $dropdown.data("prev-value", $dropdown.val());
            $dropdown.data("prev-text", $dropdown.find("option:selected").text());
            // Disable and set to loading
            $dropdown.prop("disabled", true);
            // If "Loading..." option doesn't exist, add it
            if ($dropdown.find("option.loading-option").length === 0) {
                $dropdown.prepend('<option class="loading-option" value="">Loading...</option>');
            }
            $dropdown.val("");
        } else {
            // Remove loading option
            $dropdown.find("option.loading-option").remove();
            // Restore previous value if available
            var prevValue = $dropdown.data("prev-value");
            if (typeof prevValue !== "undefined") {
                $dropdown.val(prevValue);
            }
            $dropdown.prop("disabled", false);
        }
    }

    $("#show-case").on("click", function() {
        var selected = $("#cases-dropdown").val();
        if (!selected) {
            return;
        }
        setDropdownLoading(true);
        loadCaseData(selected, function() {
            setDropdownLoading(false);
        });
    });

    $(".case-button").on("click", function() {
        var postId = $(this).data("id");
        $("#cases-dropdown").val(postId); // Update dropdown
        setDropdownLoading(true);
        loadCaseData(postId, function() {
            setDropdownLoading(false);
        });
    });

    // Add change event listener for the dropdown
    $("#cases-dropdown").on("change", function() {
        var selected = $(this).val();
        var windowWidth = $(window).width();
        if (selected && windowWidth < 1199.6) {
            setDropdownLoading(true);
            loadCaseData(selected, function() {
                setDropdownLoading(false);
            });
        }
    });

    function loadCaseData(postId, callback) {
        var $dropdown = $("#cases-dropdown");
        var prevVal = $dropdown.val(); // Store current value
        console.log("Previous Value:", prevVal); // Debugging line
        var data = {
            action: "load_case_data",
            post_id: postId
        };
        $.post(ajax_object.ajaxurl, data, function(response) {
            $("#case-overlay").html(response);
            // Restore dropdown value if it was cleared
            if ($dropdown.val() === "" || $dropdown.val() === null) {
                $dropdown.val(prevVal);
                console.log("Restored Value:", prevVal); // Debugging line
            }
            // Show the overlay and the background
            $('.case-overlay').fadeIn();
            $('.case-overlay-bg').fadeIn();
            if (typeof callback === "function") {
                callback();
            }
        });
    }
});