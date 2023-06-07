$(document).ready(function() {
    // ユーザーの名前の入力
    const unameInput = $('#uname');
    const savedUname = localStorage.getItem('uname');

    if (savedUname) {
        unameInput.val(savedUname);
    }

    unameInput.on('input', function() {
        const uname = unameInput.val();
        localStorage.setItem('uname', uname);
    });
});

$("#janken").click(function(){
    // ユーザー側
    var uname = $("#uname").val();
    var start1 = (uname + "<br>" + "ジャンケンがしたい！")
    console.log(start1)
    
    var ujanken = $('<div>').addClass('start1').html(start1);
    $("#output").append(ujanken)

    // AI側
    var aname = ("育ちの良いギャル")
    var start2 = (aname + "<br>" + "わかりました！" + "<br>" + "勝てたらご褒美をあげます！" + "<br>" + "<br>" + "行きますよー！" + "<br>" +"ジャン！ケン！" )
    console.log(start2)

    setTimeout(function() {
        var ajanken = $('<div>').addClass('start2').html(start2);
        $("#output").append(ajanken);
        }, 2000); 
    
    // ボタン発生
    var button1 = $('<button>').text('グー').attr('id', 'guu-button');
    var button2 = $('<button>').text('チョキ').attr('id', 'choki-button');
    var button3 = $('<button>').text('パー').attr('id', 'paa-button');

    setTimeout(function() {
        var buttonget = $('<div>').addClass('ubutton');
        buttonget.append(button1, button2, button3);
        $("#output").append(buttonget);
        }, 3000);
        
    var win = $('<div>').addClass('start2').html("勝ち！<br>ご褒美です！<br><br><a href = '/index.html'>ご褒美♡♡</a>")
    var aiko = $('<div>').addClass('start2').html("あいこ！<br>もう一回上のボタンから選んでね！")
    var lose = $('<div>').addClass('start2').html("負け！<br>出直してきな！！負け犬が！！")

        $(document).on("click", "#guu-button", function() {
            // クリックイベントの処理
            var random = Math.floor(Math.random() * 3 + 1);
            console.log(random, "ランダムな数字の箱");
            if (random === 1) {
                // 自分の手
                var choice = $('<div>').addClass('start1');
                choice.append(uname + "<br>" + "グー！")
                $("#output").append(choice)

                console.log("チョキ！");
                var result = $('<div>').addClass('start2');
                result.append(aname + "<br>" + "チョキ！")
                $("#output").append(result)

                setTimeout(function() {
                    $("#output").append(win);
                    }, 2000);


            } else if (random === 2) {
                // 自分の手
                var choice = $('<div>').addClass('start1');
                choice.append(uname + "<br>" + "グー！")
                $("#output").append(choice)

                console.log("パー！");
                var result = $('<div>').addClass('start2');
                result.append(aname + "<br>" + "パー！")
                $("#output").append(result)

                setTimeout(function() {
                    $("#output").append(lose);
                    }, 2000);

            } else if (random === 3) {
                // 自分の手
                var choice = $('<div>').addClass('start1');
                choice.append(uname + "<br>" + "グー！")
                $("#output").append(choice)

                console.log("グー！");
                var result = $('<div>').addClass('start2');
                result.append(aname + "<br>" + "グー！")
                $("#output").append(result)

                setTimeout(function() {
                    $("#output").append(aiko);
                    }, 2000);
            }
        })
    
        $(document).on("click", "#choki-button", function() {
            // クリックイベントの処理
            var random = Math.floor(Math.random() * 3 + 1);
            console.log(random, "ランダムな数字の箱");
            if (random === 1) {
                // 自分の手
                var choice = $('<div>').addClass('start1');
                choice.append(uname + "<br>" + "チョキ！")
                $("#output").append(choice)

                console.log("パー！");
                var result = $('<div>').addClass('start2');
                result.append(aname + "<br>" + "パー！")
                $("#output").append(result)

                setTimeout(function() {
                    $("#output").append(win);
                    }, 2000);


            } else if (random === 2) {
                // 自分の手
                var choice = $('<div>').addClass('start1');
                choice.append(uname + "<br>" + "チョキ！")
                $("#output").append(choice)

                console.log("グー！");
                var result = $('<div>').addClass('start2');
                result.append(aname + "<br>" + "グー！")
                $("#output").append(result)

                setTimeout(function() {
                    $("#output").append(lose);
                    }, 2000);

            } else if (random === 3) {
                // 自分の手
                var choice = $('<div>').addClass('start1');
                choice.append(uname + "<br>" + "チョキ！")
                $("#output").append(choice)

                console.log("チョキ！");
                var result = $('<div>').addClass('start2');
                result.append(aname + "<br>" + "チョキ！")
                $("#output").append(result)

                setTimeout(function() {
                    $("#output").append(aiko);
                    }, 2000);
            }
        })

        $(document).on("click", "#paa-button", function() {
            // クリックイベントの処理
            var random = Math.floor(Math.random() * 3 + 1);
            console.log(random, "ランダムな数字の箱");
            if (random === 1) {
                // 自分の手
                var choice = $('<div>').addClass('start1');
                choice.append(uname + "<br>" + "パー！")
                $("#output").append(choice)

                console.log("グー！");
                var result = $('<div>').addClass('start2');
                result.append(aname + "<br>" + "グー！")
                $("#output").append(result)

                setTimeout(function() {
                    $("#output").append(win);
                    }, 2000);


            } else if (random === 2) {
                // 自分の手
                var choice = $('<div>').addClass('start1');
                choice.append(uname + "<br>" + "パー！")
                $("#output").append(choice)

                console.log("チョキ！");
                var result = $('<div>').addClass('start2');
                result.append(aname + "<br>" + "チョキ！")
                $("#output").append(result)

                setTimeout(function() {
                    $("#output").append(lose);
                    }, 2000);

            } else if (random === 3) {
                // 自分の手
                var choice = $('<div>').addClass('start1');
                choice.append(uname + "<br>" + "パー！")
                $("#output").append(choice)

                console.log("パー！");
                var result = $('<div>').addClass('start2');
                result.append(aname + "<br>" + "パー！")
                $("#output").append(result)

                setTimeout(function() {
                    $("#output").append(aiko);
                    }, 2000);
            }
        })
})
