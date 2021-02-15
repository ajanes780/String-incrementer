function incrementString(string) {
  let a = string.split("");
  let length = a.length - 1;
  let sec = a.length - 2;
  let third = a.length - 3;
  let f = a.length - 4;
  let nlast = Number(a[sec]);

  if (a[0] === undefined) {
    return "1";
  }
  if (a[length] === "0") {
    a.pop();
    a.push(1);
    return a.join("");
  } else if (a[length] === "o") {
    a.push(1);
    return a.join("");
  }
  let last = a[length];
  last = Number(last);

  if (last > 0 && last <= 8) {
    last++;
    a.pop();
    a.push(last);
    return a.join("");
  }
  if (last === 9 && nlast === 0) {
    a.pop();
    a.pop();
    a.push("10");
    return a.join("");
  }
  let tlast = Number(a[third]);
  let flast = Number(a[f]);
  if (nlast >= 0 && tlast >= 0 && flast >= 0) {
    a.pop();
    a.pop();
    a.pop();
    a.pop();
    a.push("1000");
    return a.join("");
  }
  if (nlast === 9 && tlast >= 0) {
    a.pop();
    a.pop();
    a.pop();
    a.push("1000");
    return a.join("");
  }
  if (nlast === 9) {
    a.pop();
    a.pop();
    a.push("100");
    return a.join("");
  }
}
