numsToStat = function (nums) {

    //变量声明
    {
        this.array = nums;
        this.sum = 0;
        this.median = median(this.array);
        this.sum = sumAll2(this.array);
        this.mean = this.sum / this.array.length;
        this.sampleSize = this.array.length;
        this.t95Value = t95[this.sampleSize - 2];
        //window.alert(this.t95Value);
        this.deviations = calDev(this.array);
        
        this.stddev = calStdDev(this.array);
        //this.stddev = Math.sqrt(this.temp / (this.array.length - 1));//样本标准差SD
        this.stdError = this.stddev / Math.sqrt(this.array.length);
        this.MarginOfError = this.t95Value * this.stdError;
        this.Tmin = this.mean - this.MarginOfError;
        this.Tmax = this.mean + this.MarginOfError;
        //计算时间对数们
        
        this.numLogs = calNumlog(this.array);
        this.numLogStdDev = calStdDev(this.numLogs);
        this.stdErrorLogStdDev = this.numLogStdDev / Math.sqrt(this.sampleSize);
        
        //求和
        this.logSum = sumAll2(this.numLogs);
        //求log平均
        this.logMean = this.logSum / this.numLogs.length;
        this.ePowLogMean = Math.pow(Math.E, this.logMean);
        this.logMarginError = this.t95Value * this.stdErrorLogStdDev;
        this.logConfiMin = this.logMean - this.logMarginError;
        this.logConfiMax = this.logMean + this.logMarginError;
        this.ConfiMin = Math.pow(Math.E, this.logConfiMin);
        this.ConfiMax = Math.pow(Math.E, this.logConfiMax);
        //this.psd = varianceArr(this.array);//总体标准偏差的方差(PSD)

        this.q04z95 = 1.96;
        this.q04p = 0.5//
        this.q04np = this.sampleSize * this.q04p;
        this.q04stdError = Math.sqrt(this.sampleSize * this.q04p * (1 - this.q04p));
        this.q04Min = this.q04np - this.q04z95 * this.q04stdError;
        this.q04Max = this.q04np + this.q04z95 * this.q04stdError;
    }
    //02 t
    this.writeDataT = function () {
        $("#sum").val(this.sum);
        $("#average").val(this.mean);
        $("#median").val(median(this.array));
        $("#Deviations").val(this.deviations);
        $("#standardDeviation").val(this.stddev);
        $("#standardError").val(this.stdError);
        $("#MarginOfError").val(this.MarginOfError);
        $("#tMin").val(this.Tmin);
        $("#tMax").val(this.Tmax);
    }
    //03 t log
    this.writeDataTlog = function () {
        $("#Tlogs").val(this.numLogs);
        $("#TlogMean").val(this.logMean);
        $("#TlogSampleSize").val(this.sampleSize);
        $("#numLogStdDev").val(this.numLogStdDev);
        $("#stdErrorLogStdDev").val(this.stdErrorLogStdDev);
        $("#logMarginError").val(this.logMarginError);
        $("#logConfiMin").val(this.logConfiMin);
        $("#logConfiMax").val(this.logConfiMax);
        $("#ConfiMin").val(this.ConfiMin);
        $("#ConfiMax").val(this.ConfiMax);
    }
    //04 中位数
    this.writeDataMedian = function () {
        $("#ConfidenceIntervalAroundMedian2").val(this.median);
        $("#np").val(this.q04np);
        $("#q04z95").val(this.q04z95);
        $("#q04stdError").val(this.q04stdError);
        $("#q04Min").val(this.q04Min);
        $("#q04Max").val(this.q04Max);



    }
    //08
    this.writeDataQ08 = function () {
        $("#ePowLogMean").val(this.ePowLogMean);
        $("#stdErrorLogStdDev").val(this.stdErrorLogStdDev);
        $("#q08logMean").val(this.logMean);

    }
    //
    this.writeDataMedian000 = function () {
        $("#ConfidenceIntervalAroundMedian2").val(this.sum);

    }
    //
    this.writeDataMedian000 = function () {
        $("#ConfidenceIntervalAroundMedian2").val(this.sum);

    }
    //
    this.writeDataMedian000 = function () {
        $("#ConfidenceIntervalAroundMedian2").val(this.sum);

    }
    //
    this.writeDataMedian000 = function () {
        $("#ConfidenceIntervalAroundMedian2").val(this.sum);

    }
    //
    this.writeDataMedian000 = function () {
        $("#ConfidenceIntervalAroundMedian2").val(this.sum);

    }
    //
    this.writeDataMedian000 = function () {
        $("#ConfidenceIntervalAroundMedian2").val(this.sum);

    }
    //
    this.writeDataMedian000 = function () {
        $("#ConfidenceIntervalAroundMedian2").val(this.sum);

    }
    //
    this.writeDataMedian000 = function () {
        $("#ConfidenceIntervalAroundMedian2").val(this.sum);

    }




}