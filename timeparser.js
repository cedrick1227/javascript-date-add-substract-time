const timeparser = {
	_stringToDate:function(date, str, tt){
		let hour, minute, second;
		str = [...str].reduce((accu, iter)=>{
			if(!['A','M','P'," "].includes(iter)){accu += iter};
			return accu;
		}, "").split(":").map(item=>{
			return Number(item);
		});
		hour = (tt == 'PM')? str[0] + 12: str[0];
		minute = str[1] || 0;
		second = str[2] || 0;
		return new Date(date.getFullYear(), date.getMonth(), date.getDate(), hour, minute, second);
	},
	_parse:function(str){
		let isDate = str instanceof Date;
		let isString = typeof str == 'string';
		let isNumber = typeof str == 'number';
		let tt = (isString)?str.includes('AM')?'AM':str.includes('PM')?'PM':false:false;
		let date = new Date;
		date = (isString)?this._stringToDate(date, str, tt):
			(isDate)?str: (isNumber)?(str>24)?new Date(str):
			new Date(date.getFullYear(), date.getMonth(), date.getDate(), str, 0,0): date;
		return {
			month: date.getMonth(),
			year: date.getFullYear(),
			date: date.getDate(),
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds(),
			tt,
		};
	},
	_toMil:function(obj){
		let {hour, minute, second} = obj;
		return (hour*60*60*1000) + (minute*60*1000) + (second*1000);
	},
	_toDate:function(parsed){
		let {month, year, date, hour, minute, second} = this._parse(parsed);
		return new Date(year, month, date, hour, minute, second);
	},
	diff:function(ins, outs){
		ins = this._toDate(ins);
		outs = this._toMil(this._parse(outs));
		return new Date(ins.getTime() - outs);
	},
	add:function(ins, outs){
		ins = this._toDate(ins);
		outs = this._toMil(this._parse(outs));
		return new Date(ins.getTime() + outs);
	},
}
