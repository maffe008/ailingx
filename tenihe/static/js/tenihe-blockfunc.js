/**
 * Created by Maffee on 2016/12/13.
 */

function change_intro(id){
    //alert(id);
}

function display_cell(id){
    //alert(id.attr("id"));
    //find Cell(div_id=id) in Database.
    /*
    * Eg
    *
    * Cell
    *   uuid = 123123
    *   div_id = C_tnh_03_001
    *   intro = 特泥河三队001地块情况,种植水飞蓟。
    *   data = 900亩
    *   info = 情况良好，总体成熟度在50%~70%，异常点数量为3个，异常程度低。
    *
    * */
    switch (id){
        case "C_tnh_03_001":
            document.getElementById("cell_id").innerHTML = id.attr("id");
            document.getElementById("cell_intro").innerText ="特泥河三队001地块情况,种植水飞蓟。";
            document.getElementById("cell_data").innerText ="900亩";
            document.getElementById("cell_info").innerText ="情况良好，总体成熟度在50%~70%，异常点数量为3个，异常程度低。";
            break;
        default:
            document.getElementById("cell_id").innerHTML = id.attr("id");
            document.getElementById("cell_intro").innerText ="特泥河生产队地块情况.";
            document.getElementById("cell_data").innerText ="未知亩数";
            document.getElementById("cell_info").innerText ="情况未知，总体成熟度未知，异常点数量未知，异常程度未知。";
            break;
    }
}


