/**
 * Created by Maffee on 2016/12/13.
 */

function change_intro(id){
    //alert(id);
}

function display_block(id){
    //alert(id.attr("id"));
    //alert(id);

    //find Cell(div_id=id) in Database.
    /*
    * Eg
    *
    * Block
    *   uuid = 123123
    *   div_id = B_tnh_03
    *   intro = 特泥河三队情况
    *   data = 40000亩
    *   info = 情况良好，总体成熟度在50%~70%。
    *
    * */
    var Bid = id.attr("id");
    document.getElementById("block_id").innerHTML = block_no(Bid.slice(6,8));
    switch (Bid){
        case "B_tnh_03_hlt":
            document.getElementById("block_intro").innerText ="主要种植作物";
            document.getElementById("block_data").innerText ="40000亩";
            document.getElementById("block_info").innerText ="情况良好。";
            break;
        case "B_tnh_04_hlt":
            document.getElementById("block_intro").innerText ="主要种植作物";
            document.getElementById("block_data").innerText ="39000亩";
            document.getElementById("block_info").innerText ="情况良好。";
            break;
        case "B_tnh_06_hlt":
            document.getElementById("block_intro").innerText ="主要种植作物";
            document.getElementById("block_data").innerText ="30000亩";
            document.getElementById("block_info").innerText ="情况良好。";
            break;
        case "B_tnh_08_hlt":
            document.getElementById("block_intro").innerText ="主要种植作物";
            document.getElementById("block_data").innerText ="29800亩";
            document.getElementById("block_info").innerText ="情况良好。";
            break;
        case "B_tnh_09_hlt":
            document.getElementById("block_intro").innerText ="主要种植作物";
            document.getElementById("block_data").innerText ="41000亩";
            document.getElementById("block_info").innerText ="情况良好。";
            break;
        case "B_tnh_10_hlt":
            document.getElementById("block_intro").innerText ="主要种植作物";
            document.getElementById("block_data").innerText ="25000亩";
            document.getElementById("block_info").innerText ="情况良好。";
            break;
        case "B_tnh_11_hlt":
            document.getElementById("block_intro").innerText ="主要种植作物";
            document.getElementById("block_data").innerText ="38000亩";
            document.getElementById("block_info").innerText ="情况良好。";
            break;
        default:
            document.getElementById("block_intro").innerText ="主要种植作物";
            document.getElementById("block_data").innerText ="未知亩数";
            document.getElementById("block_info").innerText ="情况未知。";
            break;
    }
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
    var Cid = id.attr("id");
    document.getElementById("cell_id").innerHTML = Cid.slice(9,12)+'地块';
    document.getElementById("cell_block").innerHTML = '特泥河农牧场'+block_no(Cid.slice(6,8));
    document.getElementById("cell_newest").innerHTML = "本地块最新情况。";
    switch (Cid){
        case "C_tnh_08_001":
            document.getElementById("cell_intro").innerText = '地块情况,种植水飞蓟';
            document.getElementById("cell_data").innerText = cell_sq(800,200)+"亩";
            break;
        case "C_tnh_08_002":
            document.getElementById("cell_intro").innerText = '地块情况,种植大麦';
            document.getElementById("cell_data").innerText = cell_sq(800,200)+"亩";
            break;
        case "C_tnh_08_003":
            document.getElementById("cell_intro").innerText = '地块情况,种植水飞蓟';
            document.getElementById("cell_data").innerText = cell_sq(800,200)+"亩";
            break;
        default:
            document.getElementById("cell_intro").innerText = '地块情况,种植XX';
            document.getElementById("cell_data").innerText = cell_sq(800,200)+"亩";
            break;
    }
}
function block_no(Bid){
    var Block_name ;
    switch (Bid){
        case "03": Block_name = "三队";break;
        case "04": Block_name = "四队";break;
        case "06": Block_name = "六队";break;
        case "08": Block_name = "八队";break;
        case "09": Block_name = "九队";break;
        case "10": Block_name = "十队";break;
        case "11": Block_name = "十一队";break;
        default:Block_name = "?队";break;
    }
    return Block_name;
}

function cell_sq(num,range){
    return num+Math.round(Math.random()*range);
}

function display_date(id){
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
    var Did = id.attr("id").slice(13,15);
    var res = Date_info_random(Did);
    var return_id = 'D_tnh_08_001_'+Did+'_info';
    document.getElementById(return_id).innerText = '异常点数量为' + res[0] + '个,' + res[1];

}
function Date_info_random(Did){
    var error = parseInt(Did);
    var error_c = error+Math.round(Math.random()*error*10);
    if (error_c>10){
        return [error_c,"警报"];
    }
    else if(error_c<3){
        return [error_c,"正常"];
    }
    else{
        return [error_c,"存在异常"];
    }
}
