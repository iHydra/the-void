$(document).ready(function () {
  function upgradeTooltips() {
    // Tooltip replace and init
    $("*").filter(function () {
      if ($(this).data("tooltip") !== undefined) {
        var tooltipVal =
          $(this).data("tooltip") || $(this).attr("data-tooltip");
        $(this).attr("data-tippy-content", tooltipVal);
        $(this).removeData("tooltip").removeAttr("data-tooltip");
      }
    });
    tippy("[data-tippy-content]", {
      theme: "material",
      placement: "auto",
    }); // init
  }

  function upgradeSearchInputField() {
    var inputField = $('form[action="search.php"] > input[type="text"]');
    var inputPlaceholder = inputField.attr("value");
    inputField.removeAttr("onfocus").removeAttr("onblur").removeAttr("value");
    inputField
      .attr("id", "v-input-search")
      .attr("class", "v-input-control")
      .wrap("<div class='v-input-outline'></div>");
    inputField.after(
      '<label class="v-input-label" for="v-input-search">' +
        inputPlaceholder +
        '</label><div class="v-input-notch"><div class="v-input-notch-leading" style="width: 9px;"></div><div class="v-input-notch-middle" style="width: 132.8px;"></div><div class="v-input-notch-trailing"></div></div>'
    );
  }

  function upgradeShowGroupsPage() {
    $(
      "#content > div > table > tbody > tr:nth-child(1) > td > span"
    ).removeClass("smalltext");
  }

  upgradeTooltips();
  // upgradeSearchInputField();

  if (window.location.href.indexOf("showgroups.php") > 0)
    upgradeShowGroupsPage();

  // var menuTimeoutLink, menuTimeoutBody;
  // $(function () {
  //   $("ul.panel_links > li.button-dropdown > a").hover(
  //     function () {
  //       console.log("0");
  //       clearTimeout(menuTimeoutLink);
  //       clearTimeout(menuTimeoutBody);
  //       $($(this).parent().find("ul")).css("display", "block");
  //     },
  //     function () {
  //       console.log("1");
  //       menuTimeoutLink = setTimeout(() => {
  //         $($(this).parent().find("ul")).stop().fadeOut("slow");
  //       }, 550);
  //     }
  //   );
  // });
  // $(function () {
  //   $("ul.panel_links > li.button-dropdown > ul").hover(
  //     function () {
  //       clearTimeout(menuTimeoutLink);
  //       clearTimeout(menuTimeoutBody);
  //       $($(this)).css("display", "block");
  //     },
  //     function () {
  //       console.log("2");
  //       menuTimeoutBody = setTimeout(() => {
  //         $($(this)).stop().fadeOut("slow");
  //       }, 550);
  //     }
  //   );
  // });
});
