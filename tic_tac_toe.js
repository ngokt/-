//table生成
var ttt_table = document.createElement('table');
ttt_table.id = 'ttt_table';
//3×3のマスを生成する
for(var i=1; i<=3; i++) {
    //行生成
    var row = document.createElement('tr');
    for(var j=1; j<=3; j++){
        //セル生成
        var data = document.createElement('td');
        //TODO 後で削除
        data.textContent = `(${i}, ${j})`;
        //行にセルを追加
        row.appendChild(data);
    }
    //tableに行を追加
    ttt_table.appendChild(row);
}

//tableをtttに追加
document.getElementById('ttt').appendChild(ttt_table);
