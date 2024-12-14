$(document).ready(function () {
    // Scrollspy custom
    $(window).bind("scroll", function () {
      var currentTop = $(window).scrollTop();
      var elems = $(".scrollspy-content");
      elems.each(function (index) {
        var elemTop = $(this).offset().top;
        var elemBottom = elemTop + $(this).height();
        if (currentTop >= elemTop && currentTop <= elemBottom) {
          var id = $(this).attr("id");
          var navElem = $('a[href="#' + id + '"]');
          navElem
            .parent()
            .addClass("is-active")
            .siblings()
            .removeClass("is-active");
        }
      });
    });
  
    // learn from https://stackoverflow.com/questions/70942808/json-is-returning-object-object-and-then-result-instead-of-only-the-result
    $.getJSON("../works.json", function (data) {
      $.each(data, function (key, val) {
        var outputHTML = [];
        var description = val["description"];
        var category = val["category"];
        var title = val["title"];
        var URL = val["URL"];
        var imgCover = val["imgCover"];
        var tags = val["tags"];
  
        $.each(description, function (value) {
          outputHTML.push(
            '<a class="card" href=" ' +
              URL +
              ' "><div class="card-cover"><img loading="lazy" src=" ' +
              imgCover +
              ' " alt=""></div><div><h6 class="card-title mt-2 mb-1">' +
              title +
              '</h6><div> <span class="tag">' +
              tags +
              "</span></div></div></a>"
          );
          // console.log(outputHTML);
        });
  
        $("<div/>", {
          class: "col-lg-4 mt-4 mb-4 card-wrapper show " + category,
          html: outputHTML.join(""),
        }).appendTo("#worksContainer");
      });
    });
  
    $.getJSON("../works.json", function (data) {
      // Function to process specific indices
      function processSpecificIndices(jsonArray, indices) {
        indices.forEach(function (index) {
          if (jsonArray[index]) {
            var val = jsonArray[index];
            var outputHTML = [];
            var description = val["description"];
            var category = val["category"];
            var title = val["title"];
            var URL = val["URL"];
            var imgCover = val["imgCover"];
            var tags = val["tags"];
    
            $.each(description, function (value) {
              outputHTML.push(
                '<a class="card" href=" ' +
                  URL +
                  ' "><div class="card-cover"><img loading="lazy" src=" ' +
                  imgCover +
                  ' " alt=""></div><div><h6 class="card-title mt-2 mb-1">' +
                  title +
                  '</h6><div> <span class="tag">' +
                  tags +
                  "</span></div></div></a>"
              );
            });
    
            $("<div/>", {
              class: "col-lg-4 mt-4 mb-4 card-wrapper show " + category,
              html: outputHTML.join(""),
            }).appendTo("#worksCuratedContainer");
          }
        });
      }
    
      // Specify the indices to access (1, 3, 5)
      var indicesToAccess = [1, 3, 5];
    
      // Call the function with data and indices
      processSpecificIndices(data, indicesToAccess);
    });
  });
  
  filterSelection("all");
  function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("card-wrapper");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
  }
  
  function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }
  
  function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }
  
  // Add active class to the current button (highlight it)
  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
  