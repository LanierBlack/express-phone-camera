// 绘制tooltip提示文字
'use strict'
let ToolTip = {}
ToolTip.add = function(context, txtLoc, x, y){
    context.save()
    var padding = 3
    var font = '16px arial'
    context.font = font
    context.textBaseline = 'bottom'
    context.fillStyle = 'yellow'

    // 绘制ToolTip背景
    var width = context.measureText(txtLoc).width
    var height = parseInt(font, 10)
    context.fillRect(x, y - height, width + padding * 2, height + padding * 2)

    // 绘制ToolTip文字
    context.fillStyle = '#000'
    context.fillText(txtLoc, x + padding, y + padding)

    context.restore()
};

ToolTip.clear = function (context, txtLoc, x, y) {
    context.save()
    var padding = 3
    var font = '16px arial'
    context.font = font
    var width = context.measureText(txtLoc).width
    var height = parseInt(font, 10)
    context.clearRect(x, y - height, width + padding * 2, height + padding * 2)
    context.restore()
}