# Wath is this?


Get perfect shadow every time for the non-designer.

# Installation 

`npm i imageeditorcreate --save`

Then... 

```
var imageEditorCreate = require('imageeditorcreate')

------
step1: ***** load library javascript **** 
            imageEditorCreate.createEditor({load: true})
-----

-----
step2: create editor image

    imageEditorCreate.createEditor({
        id: "tui-image-editor-container",
        srcImage: srcImage, 
        locale_Ja: locale_Ja,
        initMenu: initMenu, 
        menuBarPosition: menuBarPosition, 
        menu: menu, 
        width: width, 
        height: height
    })

```

## Options

imageEditorCreate supports 9 options, both of which are optional:
* *load*                  -_boolean


* *id*                  -_string_   (id of div)
* *srcImage*            -_string_   (url of image)
* *locale_Ja*           _array_     (language of taskbar , Defaults to english)
* *srcImage*            -_string_   (url of image)
* *initMenu*            -_string_   (Defaults to filter)
* *menuBarPosition*     -_tring_    (Defaults to bottom)
* *width*               -_integer_  (width of image, default 700px)
* *height*              -_integer_  (height of image, default 500px)