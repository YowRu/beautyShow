 let lang = window.navigator.userLanguage || window.navigator.language ;
         let relang=lang.toLowerCase();
        switch (relang){
            case "zh-en":
                $("#tbody").load("en.html");
            break;
            case "zh-tw":
                $("#tbody").load("tw.html");
            break;
            default:
            $("#tbody").load("tw.html");
        }