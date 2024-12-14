$(document).ready(function () {
  // Get the ID from the URL query string
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  // Fetch the JSON data
  $.getJSON("../works.json", function (data) {
    // Find the item with the matching ID
    const item = data.find((work) => work.id == id);

    if (item) {
      // Populate the detail page with the item's data
      $("#detailTitle").text(item.title);
      $("#detailImage").attr("src", item.imgCover).attr("alt", item.title);
      $("#detailCategory").text(item.category);
      $("#detailDescription").text(item.detail.join(" "));
      $("#detailTags").text(item.tags);
    } else {
      $("#detailContent").html("<p>Item not found.</p>");
    }
  });
});
