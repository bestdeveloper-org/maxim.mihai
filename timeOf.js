

	var a = new Date("Jan 01 1970 02:00:00");
	var theDay = a.getTime();

	var b = new Date("March 29 1990 03:00:00");
	var myDay = b.getTime();

	var d = new Date("December 25 1989 15:00:00");
	var revolutia = d.getTime();

	var minute = 60 * 1000;
	var twoMinutes = minute * 2;
	var fiveMinutes = minute * 5;

	var c = new Date();
	var present = c.getTime();

	var fiveMinutesAgo = present - fiveMinutes;
	var twoMinutesAgo = present - twoMinutes;

	function statusOf(event) {
	  if (event > this.present - this.minute) {
		return "just now";
	  }
	  if (
		event < this.present - this.minute &&
		event > this.present - this.fiveMinutes
	  ) {
		return "not more than five minutes ago";
	  }
	  if (event < myDay) {
		return "before Maxim's time";
	  }
	}