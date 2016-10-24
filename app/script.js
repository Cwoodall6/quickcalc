window.onload = function() {
    var pad = document.getElementById('pad');
    var answerArea = document.getElementById('answer');
    var d = new Date();

    var calculateLine = function(){
        var questionText = pad.value;
        var outputText = answerArea.value;
        answerArea.innerHTML = "";

        //NORMAL BEHAVIOR
        questionText.replace(" ", "").trim();
        if (!questionText.includes(":")) {
            if (!(eval(questionText) == undefined)) {
                val = eval(questionText);
                answerArea.innerHTML = val;
            }
        } else {
            answerArea.innerHTML = "";
        }

        //MATH FUNCTIONS
        //SQRT FUNC
        if (questionText.includes(":sqrt(") && questionText.includes(")")) {
            var val = questionText.substring(questionText.indexOf("(")+1, --questionText.length);
            trueVal = eval(val);
            parseInt(trueVal);
            var calc =  Math.sqrt(trueVal);
            answerArea.innerHTML = calc;
        }

        //ABS FUNC
        if (questionText.includes(":abs(") && questionText.includes(")")) {
            var val = questionText.substring(questionText.indexOf("(")+1, --questionText.length);
            trueVal = eval(val);
            parseInt(trueVal);
            var calc =  Math.abs(trueVal);
            answerArea.innerHTML = calc;
        }

        //LOG FUNC
        if (questionText.includes(":log(") && questionText.includes(")")) {
            var val = questionText.substring(questionText.indexOf("(")+1, --questionText.length);
            trueVal = eval(val);
            parseInt(trueVal);
            var calc =  Math.log(trueVal) / Math.LN10;
            answerArea.innerHTML = calc;
        }

        //LN FUNC
        if (questionText.includes(":ln(") && questionText.includes(")")) {
            var val = questionText.substring(questionText.indexOf("(")+1, --questionText.length);
            trueVal = eval(val);
            parseInt(trueVal);
            var calc =  Math.log(trueVal);
            answerArea.innerHTML = calc;
        }

        //E^x FUNC
        if (questionText.includes(":e(") && questionText.includes(")")) {
            var val = questionText.substring(questionText.indexOf("(")+1, --questionText.length);
            trueVal = eval(val);
            parseInt(trueVal);
            var calc =  Math.exp(trueVal);
            answerArea.innerHTML = calc;
        }

        //SIN FUNC
        if (questionText.includes(":sin(") && questionText.includes(")")) {
            var val = questionText.substring(questionText.indexOf("(")+1, --questionText.length);
            trueVal = eval(val);
            parseInt(trueVal);
            var calc =  Math.sin(trueVal);
            answerArea.innerHTML = calc;
        }

        //COS FUNC
        if (questionText.includes(":cos(") && questionText.includes(")")) {
            var val = questionText.substring(questionText.indexOf("(")+1, --questionText.length);
            trueVal = eval(val);
            parseInt(trueVal);
            var calc =  Math.cos(trueVal);
            answerArea.innerHTML = calc;
        }

        //TAN FUNC
        if (questionText.includes(":tan(") && questionText.includes(")")) {
            var val = questionText.substring(questionText.indexOf("(")+1, --questionText.length);
            trueVal = eval(val);
            parseInt(trueVal);
            var calc =  Math.tan(trueVal);
            answerArea.innerHTML = calc;
        }

        //DATE FUNCTIONS
        //TODAY FUNC
        if (questionText.includes(":today")) {
            answerArea.innerHTML = (d.getMonth()+1) + "/" + d.getDate() + "/" + d.getFullYear() + " ";
            if (questionText.includes("+")) {
                var currentLen = questionText.length;
                if ((currentLen-1) > questionText.indexOf("+")) {
                    var addTime = 86400000 * parseInt(questionText.substring((questionText.indexOf("+")+1), (questionText.length)));
                    var n = new Date(d.getTime() + addTime);
                    answerArea.innerHTML = (n.getMonth()+1) + "/" + n.getDate() + "/" + n.getFullYear() + " ";
                } else {
                    answerArea.innerHTML = (d.getMonth()+1) + "/" + d.getDate() + "/" + d.getFullYear() + " ";
                }
            }
            if (questionText.includes("-")) {
                var currentLen = questionText.length;
                if ((currentLen-1) > questionText.indexOf("-")) {
                    var addTime = 86400000 * parseInt(questionText.substring((questionText.indexOf("-")+1), (questionText.length)));
                    var n = new Date(d.getTime() - addTime);
                    answerArea.innerHTML = (n.getMonth()+1) + "/" + n.getDate() + "/" + n.getFullYear() + " ";
                } else {
                    answerArea.innerHTML = (d.getMonth()+1) + "/" + d.getDate() + "/" + d.getFullYear() + " ";
                }
            }
        }

        //DATEIN FUNC
        if (questionText.includes(":datein")) {
            var currentLen = questionText.length;
            if ((currentLen-1) > questionText.indexOf("n")) {
                var addTime = 86400000 * parseInt(questionText.substring((questionText.indexOf("n")+1), (questionText.length)));
                var n = new Date(d.getTime() + addTime);
                answerArea.innerHTML = (n.getMonth()+1) + "/" + n.getDate() + "/" + n.getFullYear() + " ";
            } else {
                answerArea.innerHTML = (d.getMonth()+1) + "/" + d.getDate() + "/" + d.getFullYear() + " ";
            }
        }

        //DAYSOF FUNC
        if (questionText.includes(":daysof")) {
            var currentLen = questionText.length;
            if ((currentLen-1) > questionText.indexOf("f")) {
                var askMon = questionText.substring((questionText.indexOf("f")+1), (questionText.length));
                answerArea.innerHTML = getDaysOfMon(askMon.trim());
            }
        }

        //TIME FUNC
        if (questionText.includes(":time")) {
            try {
                if (!(outputText.includes(d.toLocaleTimeString())))  {
                    answerArea.innerHTML = d.toLocaleTimeString();
                }
            } catch(err) {
                if (questionText.search("time") == 0) {
                    answerArea.innerHTML = d.toLocaleTimeString();
                } else {
                    answerArea.innerHTML += d.toLocaleTimeString();
                }
            }
        }

        //MONEY FUNCTIONS
        //OFF FUNC
        if (questionText.includes(":off")) {
            if (questionText.includes(".")) {
                var per = questionText.substring(0, questionText.indexOf("%"));
                var cash = questionText.substring((questionText.indexOf("f")+2), questionText.length);
                parseInt(per);
                parseInt(cash);
                var calc =  cash - ((per/100) * cash);
                var num = round(calc, 2);
                answerArea.innerHTML = num;
            } else {
                var per = questionText.substring(0, questionText.indexOf("%"));
                var cash = questionText.substring((questionText.indexOf("f")+2), questionText.length);
                parseInt(per);
                parseInt(cash);
                var calc =  cash - ((per/100) * cash);
                answerArea.innerHTML = calc;
            }
        }

        //OF FUNC
        if (questionText.includes(":of")) {
            if (questionText.includes(".")) {
                var per = questionText.substring(0, questionText.indexOf("%"));
                var cash = questionText.substring((questionText.indexOf("f")+2), questionText.length);
                parseInt(per);
                parseInt(cash);
                var calc =  (per/100) * cash;
                var num = round(calc, 2);
                answerArea.innerHTML = num;
            } else {
                var per = questionText.substring(0, questionText.indexOf("%"));
                var cash = questionText.substring((questionText.indexOf("f")+2), questionText.length);
                parseInt(per);
                parseInt(cash);
                var calc =  (per/100) * cash;
                answerArea.innerHTML = calc;
            }
        }

        //MISC FUNCTIONS
        //COLOR FUNC
        if (questionText.includes(":color(") && questionText.includes(")")) {
            var val = questionText.substring(questionText.indexOf("(")+1, --questionText.length);
            answerArea.innerHTML = '<canvas id="myCanvas"></canvas>';
            var canvas = document.getElementById("myCanvas");
            var ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.fillStyle = val;
            ctx.rect(35,3,50,20);
            ctx.fill();
        }
    };

    function getDaysOfMon(monthStr) {
        monthStr.toLowerCase();
        if (monthStr == "january" || monthStr == "jan") {
            return 31 + " days ";
        }  else if (monthStr == "february" || monthStr == "feb") {
            if ((d.getFullYear%4) == 0) {
                return 29 + " days ";
            } else {
                return 28 + " days ";
            }
        } else if (monthStr == "march" || monthStr == "mar") {
            return 31 + " days ";
        } else if (monthStr == "april" || monthStr == "apr") {
            return 30 + " days ";
        } else if (monthStr == "may") {
            return 31 + " days ";
        } else if (monthStr == "june" || monthStr == "jun") {
            return 30 + " days ";
        } else if (monthStr == "july" || monthStr == "jul") {
            return 31 + " days ";
        } else if (monthStr == "august" || monthStr == "aug") {
            return 31 + " days ";
        } else if (monthStr == "september" || monthStr == "sep") {
            return 30 + " days ";
        } else if (monthStr == "october" || monthStr == "oct") {
            return 31 + " days ";
        } else if (monthStr == "november" || monthStr == "nov") {
            return 30 + " days ";
        } else if (monthStr == "december" || monthStr == "dec") {
            return 31 + " days ";
        } else if (monthStr.includes("year") || monthStr.includes("month"))  {
            var days = 0;
            if (monthStr.includes("years") && monthStr.includes("months")) {
                if (monthStr.indexOf("y") < monthStr.indexOf("m")) {
                    var arrDays = monthStr.split("s");
                    arrDays[0] = arrDays[0].replace(" ", "");
                    arrDays[1] = arrDays[1].replace(" ", "");
                    days += parseInt(arrDays[0].substring(0, arrDays[0].indexOf("y"))) * 365;
                    days += parseInt(arrDays[1].substring(0, arrDays[1].indexOf("m"))) * 30;
                    return days + " days ";
                } else {
                    var arrDays = monthStr.split("s");
                    arrDays[0] = arrDays[0].replace(" ", "");
                    arrDays[1] = arrDays[1].replace(" ", "");
                    days += parseInt(arrDays[0].substring(0, arrDays[0].indexOf("m"))) * 30;
                    days += parseInt(arrDays[1].substring(0, arrDays[1].indexOf("y"))) * 365;
                    return days + " days ";
                }
            } else if (monthStr.includes("year") && monthStr.includes("months")) {
                if (monthStr.indexOf("y") < monthStr.indexOf("m")) {
                    var arrDays = monthStr.split("r");
                    arrDays[0] = arrDays[0].replace(" ", "");
                    arrDays[1] = arrDays[1].replace(" ", "");
                    days += parseInt(arrDays[0].substring(0, arrDays[0].indexOf("y"))) * 365;
                    days += parseInt(arrDays[1].substring(0, arrDays[1].indexOf("m"))) * 30;
                    return days + " days ";
                }
            } else if (monthStr.includes("years") && monthStr.includes("month")) {
                if (monthStr.indexOf("m") < monthStr.indexOf("y")) {
                    var arrDays = monthStr.split("h");
                    arrDays[0] = arrDays[0].replace(" ", "");
                    arrDays[1] = arrDays[1].replace(" ", "");
                    days += parseInt(arrDays[0].substring(0, arrDays[0].indexOf("m"))) * 30;
                    days += parseInt(arrDays[1].substring(0, arrDays[1].indexOf("y"))) * 365;
                    return days + " days ";
                }
            }
            else if(monthStr.includes("y")) {
                days += parseInt(monthStr.substring(0, monthStr.indexOf("y"))) * 365;
                return days + " days ";
            } else {
                days += parseInt(monthStr.substring(0, monthStr.indexOf("m"))) * 30;
                return days + " days ";
            }

        }else {
            return 0 + " ";
        }
    }

    function round(value, decimals) {
        return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
    }

    pad.addEventListener('input', calculateLine);
};
