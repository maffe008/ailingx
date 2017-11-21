/**
* Created by Maffee on 2016/12/13.
*/
$(document).ready(function(){
    $("#optionToggle").click(function(){
        $("#optionBar").toggle();
        $(this).toggleClass("ToggleLogoLayer");
        if($(".esri-ui-corner").css("left") == "300px"){
            //alert($(".esri-ui-corner").css("left"));
            $(".esri-ui-corner").css({"left":"0"});
            //$("#overviewDiv").css({"left":"12px"});
            $("#curcordDiv").css({"left":"12px","bottom":"28px"});
            $("#overviewDiv").css({"display":"none"});
            //$("#curcordDiv").css({"bottom":"28px"})
        }
        else {
            //alert($(".esri-ui-corner").css("left"));
            $(".esri-ui-corner").css({"left":"300px"});
            //$("#overviewDiv").css({"left":"312px"});
            $("#curcordDiv").css({"left":"312px","bottom":"268px"});
            $("#overviewDiv").css({"display":"block"});
            //$("#curcordDiv").css({"bottom":"268px"})
        }

    });
});

$(document).ready(function(){
    $("#dataToggle").click(function(){
        $("#dataBar").toggle();
        $(this).toggleClass("ToggleLogoLayer");
    });
});

$(document).ready(function(){
    $("#listToggle").click(function(){
        $("#listBar").toggle();
        $(this).toggleClass("ToggleLogoEtc");

    });
});
$(document).ready(function(){
    $("#maplistToggle").click(function(){
        $("#maplistBar").toggle();
        $(this).toggleClass("ToggleLogomaprightArrow");

    });
});

$(document).ready(function(){
    $(".optionToolBlock").mouseover(function(){
        $(this).css({"background-color":"rgba(0,0,0,0.8)"})
    });
});
$(document).ready(function(){
    $(".optionToolBlock").mouseout(function(){
        $(this).css({"background-color":"transparent"})
    });
});

$(document).ready(function(){
    $(".manage_func_btn").mouseover(function(){
        $(this).css({"background-color":"rgba(241,242,242,0.9)","color":"#222222"})
    });
});
$(document).ready(function(){
    $(".manage_func_btn").mouseout(function(){
        $(this).css({"background-color":"transparent","color":"#f1f2f2"})
    });
});
$(document).ready(function(){
    $(".map_func_btn").mouseover(function(){
        $(this).css({"background-color":"rgba(241,242,242,0.9)","color":"#222222"})
    });
});
$(document).ready(function(){
    $(".map_func_btn").mouseout(function(){
        $(this).css({"background-color":"transparent","color":"#f1f2f2"})
    });
});

$(document).ready(function(){
    $(".blocklist-heading-Area").mouseover(function(){
        $(this).css({"background-color":"rgba(241,242,242,0.7)","color":"#222222","font-weight":"bold"})
    });
});
$(document).ready(function(){
    $(".blocklist-heading-Area").mouseout(function(){
        $(this).css({"background-color":"rgba(1, 75, 32, 0.8)","color":"#f1f2f2","font-weight":"normal"})
    });
});

$(document).ready(function(){
    $(".blocklist-heading").mouseover(function(){
        $(this).css({"background-color":"rgba(241,242,242,0.7)","color":"#222222","font-weight":"bold"})
    });
});
$(document).ready(function(){
    $(".blocklist-heading").mouseout(function(){
        $(this).css({"background-color":"rgba(64, 161, 2, 0.8)","color":"#f1f2f2","font-weight":"normal"})
    });
});

$(document).ready(function(){
    $(".Blockname").mouseover(function(){
        $(this).css({"background-color":"rgba(241,242,242,0.7)","color":"#222222","font-weight":"bold"})
    });
});
$(document).ready(function(){
    $(".Blockname").mouseout(function(){
        $(this).css({"background-color":"transparent","color":"#f1f2f2","font-weight":"normal"})
    });
});



$(document).ready(function(){
    $("#Tool2").click(function(){
        var sys_panel = $("#sys_panel");
        sys_panel.css({"display":"block"});
        sys_panel.siblings().css({"display":"none"});
    })
});

$(document).ready(function(){
    $(".area_id").click(function(){
        var area_panel = $("#Area_panel");
        area_panel.css({"display":"block"});
        area_panel.siblings().css({"display":"none"});
    })
});

$(document).ready(function(){
    $(".block_id").click(function(){
        var block_panel = $("#Block_panel");
        block_panel.css({"display":"block"});
        block_panel.siblings().css({"display":"none"});
        var cur_block_id = $(this);
        display_block(cur_block_id);
    })
});

$(document).ready(function(){

    var cell_id = $(".cell_id");

    cell_id.mouseenter(function(){
        $(this).css({"color":"#ff8c00"})
    });
    cell_id.mouseout(function(){
        $(this).css({"color":"#f1f2f2"})
    });
    cell_id.click(function(){
        //alert($(this).attr("id"));
        var cell_panel = $("#Cell_panel");
        cell_panel.css({"display":"block"});
        cell_panel.siblings().css({"display":"none"});
        var cur_cell_id = $(this);
        display_cell(cur_cell_id);
    })
});
$(document).ready(function(){
    $("#C_tnh_08_001").click(function(){
        var c01date = $("#C01date");
        c01date.css({"display":"block"});
        c01date.siblings().css({"display":"none"});
        var cur_cd_id = $(this);
        display_cd(cur_cd_id);
    })
});
$(document).ready(function(){
    $("#C_tnh_08_002").click(function(){
        var c02date = $("#C02date");
        c02date.css({"display":"block"});
        c02date.siblings().css({"display":"none"});
        var cur_cd_id = $(this);
        display_cd(cur_cd_id);
    })
});

$(document).ready(function(){
    $(".date_title").click(function(){
        var cur_date = $(this);
        display_date(cur_date);
    })
});


$(document).ready(function(){
    $(".layer_func_card").mouseover(function(){
        $(this).css({"background-color":"rgba(0,0,0,0.8)"})
    });
});
$(document).ready(function(){
    $(".layer_func_card").mouseout(function(){
        $(this).css({"background-color":"rgba(64, 161, 2, 0.8)"})
    });
});

$(document).ready(function(){
    $(".card-date").mouseover(function(){
        $(this).css({"background-color":"rgba(64,64,64,0.4)"})
    });
});
$(document).ready(function(){
    $(".card-date").mouseout(function(){
        $(this).css({"background-color":"rgba(162, 181, 1, 0.8)"})
    });
});


