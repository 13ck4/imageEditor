function includeCss(cssFilePath) {
  var css = document.createElement("link");
  css.rel = "stylesheet";
  css.type = "text/css";
  css.href = cssFilePath;
  document.head.appendChild(css);
}
function includeJs(jsFilePath) {
  var js = document.createElement("script");
  js.type = "text/javascript";
  js.src = jsFilePath;
  document.head.appendChild(js);
}
function createEditor(options) {
  if (options.load) {
    includeCss(
      "https://cdn.jsdelivr.net/npm/tui-color-picker@2.2.7/dist/tui-color-picker.css"
    );
    includeCss(
      "https://cdnjs.cloudflare.com/ajax/libs/tui-image-editor/3.15.0/tui-image-editor.css"
    );
    includeJs(
      "https://cdnjs.cloudflare.com/ajax/libs/fabric.js/4.3.1/fabric.min.js"
    );
    includeJs(
      "https://cdnjs.cloudflare.com/ajax/libs/tui-code-snippet/1.5.2/tui-code-snippet.min.js"
    );
    includeJs(
      "https://cdn.jsdelivr.net/npm/tui-color-picker@2.2.7/dist/tui-color-picker.min.js"
    );
    setTimeout(() => {
      includeJs(
        "https://cdnjs.cloudflare.com/ajax/libs/tui-image-editor/3.12.0/tui-image-editor.min.js"
      );
    }, 100);
  } else {
    const myTheme = {
      "header.display": "none",
    };

    var initMenu = false;
    var menuBarPosition = "bottom";
    var width = 700;
    var height = 500;
    if (options.initMenu) {
      initMenu = options.initMenu;
    }
    if (options.menuBarPosition) {
      menuBarPosition = options.menuBarPosition;
    }
    if (options.width) {
      width = options.width;
    }
    if (options.height) {
      height = options.height;
    }
    var ImageEditor = new tui.ImageEditor(document.getElementById(options.id), {
      includeUI: {
        loadImage: {
          path: options.srcImage,
          name: "SampleImage",
        },
        locale: options.locale_Ja,
        theme: myTheme,
        initMenu: initMenu,
        menuBarPosition: menuBarPosition,
        menu: options.menu,
      },
      cssMaxWidth: width,
      cssMaxHeight: height,
      usageStatistics: false,
    });
  }
  return ImageEditor;
}
module.exports.createEditor = createEditor;
