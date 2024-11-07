var intervalId = 0;

        function moveImage()
        {
            document.getElementById("startButton").disabled = true;
            document.getElementById("stopButton").disabled = false;
            var image = document.getElementById("memeImage3")

            var oldX = 0;
            var oldY = 0;
            intervalId = setInterval(function()
            {
                var newX = 5;
                var newY = 5;

                oldX += newX;
                oldY += newY;

                console.log("old X = " + oldX);
                console.log("old Y = " + oldY);

                image.style.left = oldX + "px";
                image.style.top = oldY + "px";
            }, 1000)
        }

        function stopMoveImage()
        {
            document.getElementById("startButton").disabled = false;
            document.getElementById("stopButton").disabled = true;
            clearInterval(intervalId);
        }