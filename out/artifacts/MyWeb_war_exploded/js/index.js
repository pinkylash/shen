/**
 * Created by shen on 17-3-18.
 */
$(function(){
    //部分加载，现用现加载（不推荐）
    easyloader.load("dialog",function(){
        $("#box").dialog();
    });
    $.parser.parse();

})
$.parser.auto=false;//关闭自动渲染