  var a = parseInt(prompt("Введіть а",""));
  var b = parseInt(prompt("Введіть b",""));
  var c = parseInt(prompt("Введіть c",""));
  var x1, x2, d;
  var result = '';
  d = b*b - 4*a*c;
 	console.log('D = ' + d);
  res1 = (d >= 0) ? (-b - Math.sqrt(d))/(2*a) : "розвязку немає";
  res2 = (d >= 0) ? (-b + Math.sqrt(d))/(2*a) : "розвязку немає";
  console.log("Рівняння ax2+ bx + c = 0 має 2 розв’язки: x1 = " +res1+ ", x2 = " + res2);



 