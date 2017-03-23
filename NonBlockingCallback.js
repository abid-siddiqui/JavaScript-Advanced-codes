
function yieldingLoop(count, chunksize, callback, finished) {
    var i = 0;
    (function chunk() {
        var end = Math.min(i + chunksize, count);
        for ( ; i < end; ++i) {
            console.log("yieldloop i is "+ i);
            callback.call(null, i);
        }
        if (i < count) {
            setTimeout(chunk, 0);
        } else {
            finished.call(null);
        }
    })();
}



function myFunction()
{
    var j = 0;
    var count = 1e6;

    function LoopingCallback() {
         ++j;
    }

    function Complete() {
        document.getElementById('done').innerHTML = 'done!';
    }

    yieldingLoop(count, 1000, LoopingCallback, Complete);

    document.getElementById('done').innerHTML = 'timer started';

    var t = document.getElementById('timer');
    (function timer() {
        t.innerHTML = j;
        console.log("timer j = "+ j);
        if (j < count) {
            setTimeout(timer, 100);
        }
    })();
}