/**
 * Created by limeng on 2014/12/25.
 */
$(document).ready(function() {
    $.ajax({
        url: ,
        type: "GET",
        success: function (data){
            var imageUrls = data.;
            for (var i = 0; i < imageUrls.length; i++) {
                var message = addImage(imageUrls[i]);
            }
        },
        error: function (data){
            console.info(data);
        }
    });

    //建立一个图像文件
    function addImage(imageUrl) {
        $('.twentyFive').append('<div class="example"><img src="'+ imageUrl +'" class="example_img"/>');
    }
    //选择预设头像点击事件
    $('.example').click(function(){
        $('#input_info').html("已选择");
        var str = $(this).attr("class");
        $("#default_photo").val(str[str.length - 1]);
    });
});