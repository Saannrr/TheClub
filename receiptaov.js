<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="newimg/favicon.png">
    <link rel="stylesheet" href="css/receipt aov.css">
    <title>Receipt-AOV</title>
</head>
<body background="newimg/dots.png" style="background-color: #FFDC60;" class="body">
    <header class="header">
        <a href="main.html"><img src="newimg/THE CLUB LOGO.png" alt=""></a>
    </header>
    <main class="main">
        <div class="card">
            <img src="newimg/ty aov.png" alt="">
        </div>
        <div class="text">
            <div class="ty"><h3>Thank you for your purchase</h3>
                Your order will be processed in 5-10 minutes
                <br>You may issue refund after 24 hours
            </div>
            <div class="order">
                <script>
                    let number = Math.floor(Math.random() * (100000 - 10000 + 1)) + 10000;
                    document.write("Order ID: AOV" + number);
                </script>
            </div><br>
            <div class="date">
                <script>
                    let currentDate = new Date();
                    document.write("Date " + currentDate.getDate() + "/" + (currentDate.getMonth() + 1) + "/" + currentDate.getFullYear() + "<br>Time: " + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds());
                </script>
            </div>
        </div>
        <div class="buttons">
            <div class="kebeli">
                <a href="aov.html"><div class="t1">Purchase Again</div></a>
            </div>
            <div class="kemenu">
                <a href="top up.html"><div class="t2">Back to Top-Up</div></a>
            </div>
        </div>
    </main>
</body>
</html>
