$(document).ready(function () {


	var situation = 0;
	$("#parent *").click(function (e) {
		if (e.target == $("#a1")[0]) {

			if (situation == 0) {
				$("#a0").text("有任务时间吗？");
				$("#a1").text("有");
				$("#a2").text("没有");

				situation = 1;
			}

			else if (situation == 1) {
				//$("#a0").text("是组间比较吗？");
				//$("#a1").text("yes");
				//$("#a2").text("no");
				$("#decision").text("Q08");
				$("#div1").load("statistics/08.html");
				//situation = 2;
			}

			else if (situation == 2) {
				//$("#a0").text("是组间比较吗？");
				//$("#a1").text("yes");
				//$("#a2").text("no");
				$("#decision").text("Q05");
				$("#div1").load("statistics/05.html");
				//situation = 2;
			}




			//no
		} else if (e.target == $("#a2")[0]) {

			if (situation == 0) {
				$("#a0").text("小样本还是大样本？");
				$("#a1").text("小样本");
				$("#a2").text("大样本");
				//$("#decision").text("Q01 Wald");
				//$("#div1").load("statistics/01.html");
				situation = 2;
			}

			else if (situation == 1) {
				//$("#a0").text("与基准进行比较检验");
				//$("#a1").text("yes");
				//$("#a2").text("no");
				//situation = 5;
				$("#decision").text("Q07");
				$("#div1").load("statistics/07.html");
			}

			else if (situation == 2) {
				//$("#a0").text("与基准进行比较检验");
				//$("#a1").text("yes");
				//$("#a2").text("no");
				//situation = 5;
				$("#decision").text("Q06");
				$("#div1").load("statistics/06.html");
			}

			
		}
		$("#situation").text(situation);
	});


});