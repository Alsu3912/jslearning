let probability = function () {
    let event = 0;
    for (let ticketNumber=0; ticketNumber <= 999999; ticketNumber++) {
            let rigthHalf = Math.floor(ticketNumber/1000);
            let leftHalf = ticketNumber - rigthHalf*1000;
            let sumOfDigids = function (rlHalf) {
                let a = Math.floor(rlHalf/100);
                let b = Math.floor((rlHalf - a*100)/10);
                let c = rlHalf%10;
                return a+b+c;
            }
            if (sumOfDigids(rigthHalf) == sumOfDigids(leftHalf)) {
                event++;
            } 
    }
    return event/1000000;
}
console.log(probability());

let p2 = function() {
    var event = 0; 
    for (i1 =0; i1<10; i1++) {
        for (i2 =0; i2<10; i2++) {
            for (i3 =0; i3<10; i3++) {
                for (i4 =0; i4<10; i4++) {
                    for (i5 =0; i5<10; i5++) {
                        for (i6 =0; i6<10; i6++) {
                            if (i1+i2+i3 == i4 + i5 + i6) {
                                event++;
                            }  
                        }
                    }
                }
            }
        }
    }
    return event/1000000; 
};

console.log(p2())
