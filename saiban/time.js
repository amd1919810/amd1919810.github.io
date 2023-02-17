var d = new Date();
var time = d.getHours();
if (time<=6 && time>=0)
{
	document.write("<b>凌晨好</b>");
}
else if (time<=10 && time>=6)
{
	document.write("<b>早上好</b>");
}
else if (time==12)
{
	document.write("<b>中午好</b>");
}
else if (time>=12 && time<=18)
{
	document.write("<b>下午好</b>");
}
else
{
	document.write("<b>晚上好</b>");
}
